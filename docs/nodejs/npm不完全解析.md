# npm不完全解析
npm是 **Node** 的模块管理器，功能极其强大。相当于是一个仓库，里面存放着各种共享的模块。如果需要使用的话直接 `npm install` 就可把模块安装在当前项目中。

## npm install
`npm install` 模块用来安装模块到 `node_modules` 目录中。

```bash
npm install <packageName>
```
安装机制如下：
1. 检查当前模块是否在 `node_modules` 中存在，如果存在，不再重新安装。（`npm install <packageName> --force`）可以强制重新安装。
2. npm 向 `registry` 查询模块压缩包的网址。
3. 下载压缩包，存放在`~/.npm`目录。
4. 解压压缩包到当前项目的**node_modules**目录。

```bash
npm install 
```
流程：
1. 检查配置信息，命令行中的配置、项目.npmrc、全局.npmrc
2. 检查lockfile， `package-lock.json`或 `yarn.lock`，如果存在 `lockfile`，那么就会直接进入文件完整性检查环节，减少了大量的 `http` 请求。将会跳到第4步。
3. 构建包依赖树。
4. 检查缓存，命中缓存会直接跳到第7步
5. 获取包内容
6. 解压到缓存
7. 复制文件到 `node_modules`
8. 执行build
9. 生成 `lockfile`
10. 结束

## npm update
更新已安装模块，就要用到 `npm update` 命令。
```bash
npm update <packageName>
```
如果本地没有这个模块，或者远程库有更新的版本，将会更新本地模块。
