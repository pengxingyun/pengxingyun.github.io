# webpack+vue-loader手动配置项目
项目目录就是cli的目录列表。

新建 `build/`，创建以下文件
* webpack.base.config.js
* webpack.dev.config.js
* webpack.prod.config.js
* build.js

webpack.base.config.js 配置基础配置
```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 导出css文件插件

// 导出文件地址
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            '@': resolve('src'),
            assets: resolve('assets'),
            components: resolve('src/components')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        },
        // 它会应用到普通的 `.less` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
            test: /\.less$/,
            use: [
                process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader, // 判断是开发环境还是打包环境
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false // 默认是true 需要配置false 否则样式不会生效
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            // 根据autoprefixer启动添加样式前缀 配置内容在根路径下新建.browserslistrc
                            require('autoprefixer')()                      
                        ]
                    }
                },
                'less-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            // options额外的配置，⽐如资源名称
            options: {
                esModule: false, // 不开启esModule
                name: "[name]_[hash].[ext]",
                //打包后的存放位置
                outputPath: "images/",
                //⼩于2048，才转换成base64
                limit: 2048
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            // options额外的配置，⽐如资源名称
            options: {
                esModule: false, // 不开启esModule
                name: "[name]_[hash].[ext]",
                //打包后的存放位置
                outputPath: "images/",
                //⼩于2048，才转换成base64
                limit: 2048
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
```
.browserslistrc 用于 autoprefixer 自动配置css属性前缀
```
defaults
not ie < 11
last 2 versions
> 1%
iOS 7
last 3 iOS versions
```
babel.config.js 用于 babel-loader 解析
```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```
webpack.dev.config.js 开发环境配置
```js
const baseWebpackConfig = require('./webpack.base.config.js')
const path = require('path')
const webpack = require('webpack')
const config = require('./config.js')
const {merge} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require("html-webpack-plugin")
const { env } = config.dev

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
            '$envType': env
        }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new htmlWebpackPlugin({
            title: 'webpack demo',
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'   //指定生成的页面名称
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        open: true,
        port: 8080,
        hotOnly: true, // 模块刷新，不会做页面刷新
        historyApiFallback: {
            //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
            index: '/index.html' // 要支持history 得改成都匹配到index.html 必须加'/'
        }
    }
});
```
调用
```
npx webpack-dev-server --config ./build/webpack.dev.config.js --open
```
webpack.prod.config.js
```js
const baseWebpackConfig = require('./webpack.base.config.js')
const path = require('path')
const webpack = require('webpack')
const config = require('./config.js')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const {merge} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require("html-webpack-plugin")

const {env} = config.dev
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': env,
            '$envType': env
        }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            title: 'webpack demo',
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'   //指定生成的页面名称
        })
    ],
});
```
新建./build/build.js
```js
process.env.NODE_ENV = 'production'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.config')

const spinner = ora('building for test...')

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index-dev.html over file:// won\'t work.\n'
    ))
})
```
启动打包
```
node ./build/build.js
```

源码地址：https://github.com/pengxingyun/vue2.0-template/tree/vue-native