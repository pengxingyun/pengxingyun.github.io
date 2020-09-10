# pm2文档
pm2是一个进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。
## 安装pm2
```bash
npm install pm2 -D
```
## 启动进程
```bash
# app.js是入口文件 进程名为文件名app
pm2 start app.js 
```
## 重命名进程
```bash
# 进程名server
pm2 start app.js --name server
```
## 监听进程
监听应用目录的变化，一旦发生变化，自动重启。
```bash
pm2 start app.js --watch
```
## 结束进程
```bash
pm2 stop app
```
## 结束所有进程
```bash
pm2 stop all
```
## 删除进程
```bash
pm2 delete app
```
## 删除所有进程
```bash
pm2 delete all
```
## 列出所有进程
```bash
pm2 list
```
## 查看某个进程详情
```js
pm2 describe app
```
## 重启单个进程
```bash
pm2 restart app
```
## 重启所有进程
```bash
pm2 restart all
```
## 查看单个进程日志
```bash
pm2 logs app
```
## 查看所有进程日志
```bash
pm2 logs
```
## 查看当前通过 pm2 运行的进程的状态
```bash
pm2 monit
```
## 根据文件启动服务
pm2.json
```js
{
    "apps": {
        "name": "app",       // 项目名          
        "script": "app.js",              // 执行文件
        "cwd": "./",                     // 根目录
        "args": "",                      // 传递给脚本的参数
        "interpreter": "",               // 指定的脚本解释器
        "interpreter_args": "",          // 传递给解释器的参数
        "watch": true,                   // 是否监听文件变动然后重启
        "ignore_watch": [                // 不用监听的文件
            "node_modules",
            "public"
        ],
        "exec_mode": "cluster_mode",     // 应用启动模式，支持 fork 和 cluster 模式
        "instances": "1",              // 应用启动实例个数，仅在 cluster 模式有效 默认为 fork max为你设备核数
        "error_file": "./logs/app-err.log",         // 错误日志文件
        "out_file": "./logs/app-out.log",           // 正常日志文件
        "merge_logs": true,                         // 设置追加日志而不是新建日志
        "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
        "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
        "max_restarts": 30,                         // 最大异常重启次数
        "autorestart": true,                        // 默认为 true, 发生异常的情况下自动重启
        "restart_delay": "60",                       // 异常重启情况下，延时重启时间
        "env": {
           "NODE_ENV": "production",                // 环境参数，当前指定为生产环境
           "REMOTE_ADDR": ""               
        },
        "env_dev": {
            "NODE_ENV": "development",              // 环境参数，当前指定为开发环境
            "REMOTE_ADDR": ""
        },
        "env_test": {                               // 环境参数，当前指定为测试环境
            "NODE_ENV": "test",
            "REMOTE_ADDR": ""
        }
    }
}
```
```bash
pm2 start pm2.json
```

## pm2-logrotate
这个是用来分割日志的，只能用在pm2上。
### 安装
```js
pm2 install pm2-logrotate
```
注意是 `pm2` 不是 `npm`

## 使用方法
```js
pm2 set pm2-logrotate:max_size 1K
```
## 参数
格式是：pm2 set pm2-logrotate:{paramName} {value}

命令设置具体的参数，支持的参数有：

| Compress：是否通过gzip压缩日志

| max_size：单个日志文件的大小，比如上图中设置为1K（这个其实太小了，实际文件大小并不会严格分为1K）

| retain：保留的日志文件个数，比如设置为10,那么在日志文件达到10个后会将最早的日志文件删除掉

| dateFormat：日志文件名中的日期格式，默认是YYYY-MM-DD_HH-mm-ss，注意是设置的日志名+这个格式，如设置的日志名为abc.log，那就会生成abc_YYYY-MM-DD_HH-mm-ss.log名字的日志文件

| rotateModule：把pm2本身的日志也进行分割

| workerInterval：设置启动几个工作进程监控日志尺寸，最小为1

| rotateInterval：设置强制分割，默认值是0 0 * * *，意思是每天晚上0点分割，这个足够了个人觉得

设置完毕后可通过pm2 conf pm2-logrotate来查看详细的配置。