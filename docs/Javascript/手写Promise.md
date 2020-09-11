# 手写Promise
Promise用来实现对回调地狱的优雅解决方式。

```js
let i = 0;
function cb() {
    return new Promise((resolve, reject) => {
        resolve(i++);
    })
}
cb().then(res => {
    console.log(res);
    return cb();
}).then(res => {
    console.log(res);
    return cb();
}).then(res => {
    console.log(res);
})
```
## 实现
```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class MyPromise {
    constructor(executor) {
        // 默认状态为 PENDING
        this.status = PENDING;
        // 存放成功状态的值，默认为 undefined
        this.value = undefined;
        // 存放失败状态的值，默认为 undefined
        this.reason = undefined;
        // 存放成功的回调
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks = [];
        // 调用此方法就是成功
        let resolve = (value) => {
            if(this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                // 依次将对应的函数执行
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        }
        // 调用此方法就是失败
        let reject = (reason) => {
          // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
          if(this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            // 依次将对应的函数执行
            this.onRejectedCallbacks.forEach(fn=>fn());
          }
        }
        try {
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }
    // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
    then(onFullfilled = () => {}, onRejected) {
        if (this.status === FULFILLED) {
          onFullfilled(this.value)
        }
        
        if (this.status === REJECTED) {
          onRejected(this.reason)
        }
        
        if(this.status === PENDING) {
          this.onResolvedCallbacks.push(() => {
            onFullfilled(this.value);
          })
          this.onRejectedCallbacks.push(() => {
            onRejected(this.reason);
          })
        }
    }
}
```
测试
```js
new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('成功'), 0);
}).then(res => {
    console.log(res);
})
```
## 链式调用和值穿透特性
待完善