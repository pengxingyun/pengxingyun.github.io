# vue-cli怎么改造成ssr

安装插件
```bash
npm install vue-server-renderer webpack-node-externals lodash.merge express --save-dev
```
## 基本配置
router/index.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)
// 需要改造变为工厂函数每次返回全新router实例
export function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: [
      { path: "/", component: Home },
      { path: "/about", component: About },
    ],
  });
}
```
src下添加 entry-client.js
```js
// 用于浏览器中激活内容
import {createApp} from './app'

const {app,router} = createApp();

router.onReady(()=> {
    // 挂载以后页面就激活了称为可交互spa
    app.$mount('#app')
})
```
src下添加 entry-server.js
```js
// 首屏渲染

import { createApp } from "./app";

// context由express传递进来
export default context => {
  // 返回Promise
  // 确保将来可能发生的异步数据请求
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    // 首屏渲染谁根据url
    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
```

这两个 js 用于生成 bundle 文件

配置 vue.config.js
```js
// 这两个插件分别生成客户端和服务端两个bundle.json
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin"); // npm install vue-server-renderer
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals"); // npm install webpack-node-externals
const merge = require("lodash.merge"); // npm install lodash.merge
// 环境变量
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const target = TARGET_NODE ? "server" : "client";

module.exports = {
  css: {
    extract: false
  },
  outputDir: './dist/'+target,
  configureWebpack: () => ({
    // 将 entry 指向应用程序的 server / client 文件
    entry: `./src/entry-${target}.js`,
    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',
    // 这允许 webpack 以 Node 适用方式处理动态导入(dynamic import)，
    // 并且还会在编译 Vue 组件时告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    target: TARGET_NODE ? "node" : "web",
    node: TARGET_NODE ? undefined : false,
    output: {
      // 此处使用 Node 风格导出模块
      libraryTarget: TARGET_NODE ? "commonjs2" : undefined
    },
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，并生成较小的 bundle 文件。
    externals: TARGET_NODE
      ? nodeExternals({
          // 不要外置化 webpack 需要处理的依赖模块。
          // 可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
          // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
          whitelist: [/\.css$/]
        })
      : undefined,
    optimization: {
      splitChunks: undefined
    },
    // 这是将服务器的整个输出构建为单个 JSON 文件的插件。
    // 服务端默认文件名为 `vue-ssr-server-bundle.json`
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        });
      });
  }
};
```

## 生成 bundle 文件
```js
scripts: {
    "build:client": "vue-cli-service build",
    "build:server": "cross-env WEBPACK_TARGET=node vue-cli-service build --mode server",
    "build": "npm run build:server && npm run build:client"
}
```
```bash
npm run build
```
该操作会在 `dist/` 下生成 server 和 client

## 服务端渲染入口
主目录下添加 server/index.js
```js
const express = require("express");
const fs = require("fs");

// 创建express实例
const app = express();

// 静态文件服务
app.use(express.static("../dist/client", { index: false }));

// 创建渲染器函数
const { createBundleRenderer } = require("vue-server-renderer");
const bundle = require("../dist/server/vue-ssr-server-bundle.json");

// 创建渲染器
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync("./index.html", "utf-8"),
  clientManifest: require("../dist/client/vue-ssr-client-manifest.json"),
});

// 声明路由监听
app.get("*", async (req, res) => {
  // 获取page参数
  const context = {
    title: "ssr",
    url: req.url, // 从请求对象中获取url传递下去
  };
  const html = await renderer.renderToString(context);
  res.send(html);
});

app.listen(3000, () => {
  console.log("vue ssr is on position！");
});
```
主目录下添加 server/index.html
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!--vue-ssr-outlet-->
</body>

</html>
```
渲染内容会被插入到 `<!--vue-ssr-outlet-->`，固定格式不能修改，比如不能前后加空格。`<!-- vue-ssr-outlet -->`

```bash
cd server && node index.js
```

涉及到项目的开发，建议使用 nuxt.js, 本文仅限于研究原理实现。


源码地址： https://github.com/pengxingyun/vue-ssr

