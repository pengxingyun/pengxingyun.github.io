# koa和typescript搭建中台
## 依赖和入口
koa 依赖包
* koa
* koa-body
* koa-router
* koa-static
* koa-xtime

```bash
npm install koa koa-static koa-body koa-xtime -S
```
typescript 依赖包
* typescript
* ts-node-dev
* tslint
* @types/node

```bash
npm install typescript ts-node-dev tslint @types/node -D
```
`package.json` 替换 `scripts`
```js
"scripts": {
    "dev": "ts-node-dev ./src/index.ts -P tsconfig.json --no-cache",
    "build": "tsc -P tsconfig.json && node ./dist/index.js",
    "tslint": "tslint --fix -p tsconfig.json"
}
```
tsconfig.json
```json
{
    "compilerOptions": {
        "outDir": "./dist",
        "target": "es6", // 指定编译后的版本
        "module": "commonjs", // 指定模版标准 cjs
        "sourceMap": true, // 编译时需要生成sourceMap文件
        "moduleResolution": "node", // 模块解析策略
        "experimentalDecorators": true, // 启用装饰器特性
        "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块默认导出
        "lib": ["es2015"], // 指定要包含在编译中的库文件
        "typeRoots": ["./node_modules/@types"] // 这里面是刚才安装的@types/node
    },
    "include": ["src/**/*"], // 指定要编译的路径列表
    "exclude": [ // 排除不编译的文件
        "node_modules"
    ]
}
```
## 项目搭建
./src/index.ts
```js
import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as serve from 'koa-static'
import * as timing from 'koa-xtime' // 插入X-response-time
import {load} from './utils/route-decors'
import {resolve} from 'path'
const app = new Koa()

app.use(serve(`${__dirname}/public`))
app.use(timing())
app.use(bodify({
    multipart: true,
    strict: false
}))

let router = load(resolve(__dirname, './routes')) // 执行指定目录生成路由

app.use(router.routes())
app.use((ctx: Koa.Context) => {
    ctx.body = 'hello world'
})

app.listen(3000, () => {
    console.log('服务器启动成功')
})
```
./utils/route-decors.ts
```js
import * as Koa from 'Koa'
import * as KoaRouter from 'koa-router'
import * as glob from 'glob'

// 装饰器类型 通过@get('/list')等形式调用
type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'patch';
type LoadOptions = {
    /**
     * 路由⽂件扩展名，默认值是`.{js,ts}`
     */
    extname?: string;
};
type RouteOptions = {
    /**
     * 适⽤于某个请求⽐较特殊，需要单独制定前缀的情形
     */
    prefix?: string;
    /**
     * 给当前路由添加⼀个或多个中间件
     */
    middlewares?: Array<Koa.Middleware>;
};
const router = new KoaRouter()

// 柯里化 方便后面的装饰器生成
const decorate = (method: HTTPMethod, path: string, options:RouteOptions = {}, router: KoaRouter) =>  {
    // target是类 property是修饰的方法 descriptor是方法的内容
    return (target, property, descriptor) {
        const middlewares = []; // 缓存中间件
        if(options.middlewares) {
            middlewares.push(...options.middlewares);
        }
        middlewares.push(target[property]); // 最后执行当前方法
        const url = options.prefix ? options.prefix + path : path
        router[method](url, ...middlewares) //注册路由
    }
}
const method = method => (path: string, options?:RouteOptions) => decorate(method, path, options, router)
// 这些是实实在在的装饰器函数
export const get = method('get')
export const post = method('post')
export const put = method('put')
export const del = method('del')
export const patch = method('patch')

// 调用接口会打印log
export const log = function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    }
    return descriptor;
}
// 执行函数注册router
export const load = (folder: string, options: LoadOptions = {}) : KoaRouter => {
    const extname = options.extname || '.{js,ts}'
    glob.sync(require('path').join(folder, `./**/*${extname}`)).forEach(item => require(item))
    return router
}
```
./routes/user.ts
```js
import * as Koa from 'koa'
import {get, post, log} from '../utils/route-decors'
const users = [{name: 'abc'}, {name: 'def'}, {name: 'joy'}] 
export default class User {
    @get('/users')
    @log
    public list(ctx: Koa.Context) {
        sleep(4);
        ctx.body = {ok: 1, data: users}
    }
    
    @post('/users', {
        middlewares: [
            async (ctx, next) => {
                const name = ctx.request.body.name
                // 用户名必传
                if(!name) {
                    throw '请输入用户名'
                } else {
                    await next()
                }
            }
        ]
    })
    @log
    public add(ctx: Koa.Context) {
        users.push(ctx.request.body)
        ctx.body = {ok: 1}
    }
}
```
## 实现类装饰器
假如获取用户前需要先登录
```js
import {classValid} from '../utils/route-decors.td';
@classValid([
    async function guard(ctx: Koa.Context, next: () => Promise<any>) {
        console.log('guard', ctx.header);

        // 校验token
        if(ctx.header.token) {
            await next();
        } else {
            throw '请登录';
        }
    }
])
export default class User {
    @log
    @get('/users')
    public list(ctx: Koa.Context) {
        sleep(4);
        ctx.body = {ok: 1, data: users}
    }

    @post('/users', {
        middlewares: [
            async (ctx, next) => {
                const name = ctx.request.body.name
                // 用户名必传
                if(!name) {
                    throw '请输入用户名'
                } else {
                    await next()
                }
            }
        ]
    })
    public add(ctx: Koa.Context) {
        users.push(ctx.request.body)
        ctx.body = {ok: 1}
    }
}
```
装饰器的顺序是**从外到里**定义，**从里到外**执行的，所以如果按正常思路加到队列后面是不行的
./utils/route-decors.ts
```js
// 柯里化 方便后面的装饰器生成
const decorate = (method: HTTPMethod, path: string, options:RouteOptions = {}, router: KoaRouter) =>  {
    // target是类 property是修饰的方法 descriptor是方法的内容
    return (target, property, descriptor) {
        process.nextTick(() => {
            const middlewares = []; // 缓存中间件
            if(target.middlewares) {
                middlewares.push(...target.middlewares);
            }
            if(options.middlewares) {
                middlewares.push(...options.middlewares);
            }
            middlewares.push(target[property]); // 最后执行当前方法
            const url = options.prefix ? options.prefix + path : path
            router[method](url, ...middlewares) //注册路由
        })
    }
}
...
export const classValid = function(middlewares: Koa.middlewares[]) {
    return function(target) {
        target.prototype.middlewares = middlewares; // 加到原型链上 decorate再处理
    }
}
```
这就相当于在每次调用接口时都会执行classValid检查是否登录。