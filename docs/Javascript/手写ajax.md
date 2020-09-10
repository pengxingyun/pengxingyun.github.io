# 手写ajax
## 建立一个ajax需要几步
1. 创建 `XMLHttpRequest` 对象
2. 设置回调
3. 打开一个 `URL`
4. 发送请求

```js
function ajax(options) {
    var req = new XMLHttpRequest();
    req.onload = function() { // 成功回调
        options.success && options.success(req.responseText);
    }
    req.onerror = function() { // 失败回调
        options.error && options.error(req)
    }
    req.onprocess = function(oEvent) { // 服务端到客户端的传输进程（下载）下载才会有效
        if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total * 100;
            console.log(percentComplete);
            // ...
      } else {
            console.log('no-total')
            // 总大小未知时不能计算进程信息
      }
    }
    req.onabort = function() {
        // 请求被终止
    }
    req.open(options.method, options.url); // 初始化请求
    req.send();
}
```
调用
```js
ajax({
    url: 'https://www.pengxingyun.com', 
    method: 'get', 
    success: function(res) {
        console.log(res);
    },
    error: function(err) {
        console.log(err);
    }
})
```

## Promise包装一哈
```js
function ajax(url, method = 'get') {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.open(method, url); // 初始化请求
        req.send();
    })
}
```
调用
```js
ajax('https://www.pengxingyun.com').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```