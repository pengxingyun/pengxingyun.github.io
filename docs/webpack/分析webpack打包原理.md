# 分析webpack打包原理
webpack的目的是通过打包生成一个依赖图，然后执行。

所以我们执行的目的就是形成模块依赖图，然后执行主文件。
## 新建模版文件
入口文件src/index.js
```js
import bar from './bar';

bar();
```
src/bar.js
```js
export default function bar() {
  document.write('hello webpack!')
}
```
配置文件webpack.config.js
```js
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'main.js'
    },
    mode: 'development'
}
```
打包文件 bundle.js 通过 `node bundle.js`会执行打包

```js
const options = require('./webpack.config')
```
## 执行流程
bundle.js
```js
const options = require('./webpack.config')
const Compiler = require('./lib/compiler')

new Compiler(options).run(); // 执行编译 目标是返回output指定的文件
```
compiler.js
```js
const {getAst, getDependencies, getCode} = require('./parser');
const fs = require('fs')
const path = require('path')
module.exports = class Compiler {
    // 需要持有 方便后面用
    constructor(options) {
        const {entry, output} = options;
        this.entry = entry;
        this.output = output;
        this.moduleInfo = [];
    }
    run() {
        let info= this.build(this.entry);
        this.moduleInfo.push(info);
        // 广度优先搜索 所有指定的模块都对应上
        for(let i = 0; i < this.moduleInfo.length; i++) {
            const {dependencies} = this.moduleInfo[i];
            if(dependencies) {
                for(let j in dependencies) {
                    this.moduleInfo.push(this.build(dependencies[j]));
                }
            }
        }
        // 数组转换为obj
        const obj = {};
        this.moduleInfo.forEach(item => {
            obj[item.filename] = {
                dependencies: item.dependencies,
                code: item.code
            }
        })
        this.file(obj);
    }
    // 分析
    build(filename) {
        let ast = getAst(filename);
        let dependencies = getDependencies(ast, filename);
        let code = getCode(ast);
        return {
            code,
            dependencies,
            filename
        }
    }
    // 文件生成
    file(code) {
        const filePath = path.join(this.output.path, this.output.filename);
        const newCode = JSON.stringify(code);
        const bundle = `
        (function(graph){
            function require(module) {
                function localrequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code)
                })(localrequire, exports, graph[module].code)
                return exports;
            }
            require('${this.entry}')
        })(${newCode})`

        fs.writeFileSync(filePath, bundle, 'utf-8');
    }
}
```
parser.js
```js
const fs = require('fs')
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const path = require('path')
const babel = require('@babel/core')
module.exports = {
    getAst(filename) {
        const content = fs.readFileSync(filename, 'utf-8');
        // 获取抽象语法树
        const Ast = parser.parse(content, {
            sourceType: "module"
        });
        return Ast;
    },
    getDependencies(Ast, filename) {
        const dependencies = {};
        // 解析语法树 获取依赖的模块
        traverse(Ast, {
            ImportDeclaration({node}) {
                const newPath = path.join(path.dirname(filename), node.source.value);
                dependencies[node.source.value] = newPath;
            }
        })
        return dependencies;
    },
    getCode(Ast) {
        const { code } = babel.transformFromAst(Ast, null, {
            presets: ["@babel/preset-env"]
        });
        return code;
    }
}
```
这里用到了3个模块包都是由babel提供的，需要使用 `npm` 或 `yarn` 安装
* @babel/parser 解析js返回ast
* @babel/traverse 解析语法树 获取依赖的模块
* @babel/core 解析语法树 编译成指定版本的代码

最后输出的文件 dist/main.js
```js
(function(graph){
    function require(module) {
        function localrequire(relativePath) {
            return require(graph[module].dependencies[relativePath]);
        }
        var exports = {};
        (function(require, exports, code) {
            eval(code)
        })(localrequire, exports, graph[module].code)
        return exports;
    }
    require('./src/index.js')
})({"./src/index.js":{"dependencies":{"./hello.js":"src/hello.js"},"code":"\"use strict\";\n\nvar _hello = _interopRequireDefault(require(\"./hello.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _hello[\"default\"])();"},"src/hello.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = bar;\n\nfunction bar() {\n  document.write('hello webpack!');\n}"}})
```
