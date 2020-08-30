# loader和plugin怎么写

## loader
loader就是⼀个函数，拿到源代码，作进⼀步的修饰处理，再返回处理后的源码就可以了

下面实现一个根据 `oldVal` 替换为 `newVal`

myLoader.js
```js
const loaderUtils = require("loader-utils"); // 官⽅推荐处理loader,query的⼯具

module.exports = function(source) {
    // 通过this.query来接受配置⽂件传递进来的参数
    const options = loaderUtils.getOptions(this);
    return source.replace(options.oldVal, options.newVal)
}
```
webpack.config.js
```js
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: path.resolve(__dirname, './myLoader.js'), // 实现一个替换oldVal为newVal的loader
                options: {
                    oldVal: 'webpack',
                    newVal: 'world'
                }
            }
        ],
    },
    mode: 'development'
}
```
./src/index.js
```js
function bar() {
    document.write('hello webpack!!');
}
bar();
```
最后生成的代码会变成
```js
function bar() {
    document.write('hello world!!');
}
bar();
```

## plugin
basic-plugin.js
```js
module.exports = class BasicPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options){
    console.log(options); // 往插件传的参数这里获取
  }

  // Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler){
    compiler.plugin('compilation',function(compilation) {
    })
  }
}
```
webpack.config.js
```js
const path = require('path')
const BasicPlugin = require('./basic-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: path.resolve(__dirname, './myLoader.js'), // 实现一个替换oldVal为newVal的loader
                options: {
                    oldVal: 'webpack',
                    newVal: 'world'
                }
            }
        ],
    },
    plugins: [
        new BasicPlugin({
            name: 'BasicPlugin'
        })
    ]
    mode: 'development'
}
```