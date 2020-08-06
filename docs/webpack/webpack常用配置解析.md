# webpack常用配置解析
Webpack可以看做是模块打包机：它做的事情是，分析你的项⽬结构，找到JavaScript模块以及其它的⼀些浏览器不能直接运⾏的拓展语⾔（less，sass，typeScript等），并将其打包为合适的格式以供浏览器使⽤。

## 安装
```bash
npm install webpack --save-dev // 不建议全局安装
webpack -v // 查看版本 确定安装成功
```

## 基本配置
打包默认配置文件是 `webpack.config.js`
```bash
npx webpack //执⾏命令后，webpack会找到默认的配置⽂件，并使⽤执⾏
```
不使用默认配置文件：`webpackconfig.js`
```bash
npx webpack --config webpackconfig.js //指定webpackconfig.js⽂件来作为配置⽂件并执⾏
```

修改 `package.json scripts` 字段， 使用 `npm run build` 方式执行打包

package.json
```js
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "npx webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
```bash
npm run build
```

`webpack.config.js` 配置结构
```js
module.exports = {
    entry: './src/index.js', // 入口文件
    output: './dist', // 输出位置
    mode: 'none', // 打包环境 production development none
    module: {
        rules: [
            //loader模块处理
            {
                test: /\.css$/,
                use: "style-loader"
            }
        ]
    },
    plugins: [] //插件配置
}
```

## 常用loader
当 `webpack` 处理到不认识的模块时，需要在 `webpack` 中的 `module` 处进⾏配置，当检测到是什么格式的模块，使⽤什么 `loader` 来处理。
* style-loader // 处理样式
* css-loader // 处理css
* less-loader // 处理less
* sass-loader // 处理sass
* ts-loader //将Ts转换成js
* babel-loader//转换ES6、7等js新特性语法
* file-loader//处理图⽚⼦图等静态资源模块

### 样式处理 css-loader，style-loader，less-loader

 css-loader：分析 `css` 模块之间的关系，并合成⼀个 `css`
 style-loader：`style-loader` 会把 `css-loader` ⽣成的内容，以 `style` 挂载到⻚⾯的`head`部分，（文件里面看不到，浏览器才能看到，放到了 `index.js` 等执行完`head` 才有）
 less-loader：`webpack` 将 `Less` 编译为 `CSS` 的 `loader`。
 post-loader：预处理`css`的`loader`
 autoprefixer：样式⾃动添加前缀

```js
const htmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const path = require('path');
module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development', // 打包环境 production development none
    module: {
        rules: [
            {
                test: /\.less$/, // 处理less文件 并插入到head
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.sass$/, // 处理sass文件 并插入到head
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        // 以模版自动生成HTML 且生成的js会自动引入
        new htmlWebpackPlugin({
            title: 'webpack demo',
            template: path.join(__dirname, './src/index.html'),
            filename:'index.html'   //指定生成的页面名称
        })
    ] //插件配置
}
```

### 文件处理
file-loader：处理静态资源模块，把打包⼊⼝中识别出的资源模块，移动到输出⽬录，并且返回⼀个地址名称

```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/,
            use: {
                loader: "file-loader",
                // options额外的配置，⽐如资源名称
                options: {
                    name: "[name]_[hash].[ext]",
                    //打包后的存放位置
                    outputPath: "images/"
                }
            }
        }
    ]
}
```
url-loader：`file-loader`加强版本，不同的是会把 `<limit` 限制的图⽚转换成`base64`格式字符串并打包到`js`⾥。
```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/,
            use: {
                loader: "url-loader",
                // options额外的配置，⽐如资源名称
                options: {
                    name: "[name]_[hash].[ext]",
                    //打包后的存放位置
                    outputPath: "images/",
                    //⼩于2048，才转换成base64
                    limit: 2048
                }
            }
        }
    ]
}
```
### Babel处理ES6
```bash
npm i babel-loader @babel/core @babel/preset-env -D
//babel-loader是webpack 与 babel的通信桥梁，不会做把es6转成es5的⼯作。
// 这部分⼯作需要⽤到@babel/preset-env来做
//@babel/preset-env⾥包含了es6转es5的转换规则
```
webpack.config.js
```js
{
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
         loader: "babel-loader",
         options: {
            presets: ["@babel/preset-env"]
         }
     }
}
```
#### 安装 `es6` 新特性
##### 全局引入方式（全部引入）把所有特性注⼊进来
```bash
npm install --save @babel/polyfill
```
```js
//index.js 顶部
import "@babel/polyfill";
```
##### 按需加载
webpack.config.js
```js
{
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
         loader: "babel-loader",
         options: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: {
                            edge: "17",
                            firefox: "60",
                            chrome: "67",
                            safari: "11.1"
                        },
                        corejs: 2,//新版本需要指定核⼼库版本
                        useBuiltIns: "usage"//按需注⼊
                    }
                ]
            ]
         }
     }
}
```

### 不污染全局
@babel/plugin-transform-runtime
```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```
```js
{
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
         loader: "babel-loader",
         options: {
            "plugins": [
                 "@babel/plugin-transform-runtime",
                 {
                 "absoluteRuntime": false,
                 "corejs": false,
                 "helpers": true,
                 "regenerator": true,
                 "useESModules": false
                 }
                 ]
            ]
         }
     }
}
```
> usage 的⾏为类似 babel-transform-runtime，不会造成全局污染，因此也会不会对类似 `Array.prototype.includes()` 进⾏ polyfill。

### .babelrc⽂件
options部分移入该文件
```js
{
 "plugins": [
     [
        "@babel/plugin-transform-runtime",
         {
             "absoluteRuntime": false,
             "corejs": false,
             "helpers": true,
             "regenerator": true,
             "useESModules": false
         }
     ]
     ]
}
```
```js
{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: "babel-loader"
}
```


## 插件Plugins
### HtmlWebpackPlugin
在打包结束后，自动生成一个`html`文件，并把打包⽣成的`js`模块引⼊到该`html`中。
```bash
npm install html-webpack-plugin --save-dev
```
```js
const htmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const path = require('path');
module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development', // 打包环境 production development none
    module: {
        rules: [
            {
                test: /\.less$/, // 处理less文件 并插入到head
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.sass$/, // 处理sass文件 并插入到head
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        // 以模版自动生成HTML 且生成的js会自动引入
        new htmlWebpackPlugin({
            title: 'webpack demo', // 页面标题
            template: path.join(__dirname, './src/index.html'), // 源html
            filename:'index.html'   //指定生成的页面名称
        })
    ] //插件配置
}
```
`title` 会赋值到 `htmlWebpackPlugin.options.title`，在`html`页面中用`ejs`语法指定`title`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
    <div id="app">app</div>
</body>
</html>
```
### clean-webpack-plugin
输出前删除生成的文件夹
```bash
npm install clean-webpack-plugin --save-dev
```
```js
const { CleanWebpackPlugin } = require("clean-webpackplugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development', // 打包环境 production development none
    module: {
        rules: [
            {
                test: /\.less$/, // 处理less文件 并插入到head
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 以模版自动生成HTML 且生成的js会自动引入
        new htmlWebpackPlugin({
            title: 'webpack demo', // 页面标题
            template: path.join(__dirname, './src/index.html'), // 源html
            filename:'index.html'   //指定生成的页面名称
        })
    ] //插件配置
}
```
### mini-css-extract-plugin
将`css`提取为独立的文件的插件，对每个包含`css`的`js`文件都会创建一个`css`文件。生成的文件会自动添加到`index.html`
```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development', // 打包环境 production development none
    module: {
        rules: [
            {
                test: /\.less$/, // 处理less文件 并插入到head
                use: [miniCssExtractPlugin.loader, "css-loader", "less-loader"] // 用了这个style-loader就不能写了
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename: "[name][chunkhash:8].css" // 单独生成指定css文件
        }),
        // 以模版自动生成HTML 且生成的js会自动引入
        new htmlWebpackPlugin({
            title: 'webpack demo', // 页面标题
            template: path.join(__dirname, './src/index.html'), // 源html
            filename:'index.html'   //指定生成的页面名称
        })
    ] //插件配置
}
```
### sourceMap
源代码与打包后的代码的映射关系，通过sourceMap定位到源代码。
```js
devtool:"cheap-module-eval-source-map",// 开发环境配置
devtool:"cheap-module-source-map", // 线上⽣成配置
```

### WebpackDevServer
提升开发效率的利器
```bash
npm install webpack-dev-server -D
```
#### 运行 `webpack-dev-server`
```bash
npx webpack-dev-server
```
或

配置 `package.json`
```js
"scripts": {
    "server": "webpack-dev-server"
}
```
```bash
npm run server
```
该操作会运行服务到 `http://localhost:8080`

#### 配置自定义端口
```js
devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081
}
```
#### 跨域实现代理
```js
devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    proxy: {
        '/api': 'http://localhost:3000'
    }
}
```
现在，对 `/api/users` 的请求会将请求代理到 `http://localhost:3000/api/users`。

#### Hot Module Replacement (HMR:热模块替换)
```js
const webpack = require("webpack");

module.exports = {
    devServer: {
     contentBase: "./dist",
     open: true,
     hot:true // 启动hmr
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```
> 注意启动HMR后，`css`抽离会不⽣效，需用 `style-loader`