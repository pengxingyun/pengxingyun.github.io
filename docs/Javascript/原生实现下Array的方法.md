# 原生实现下Array的方法
```js
let arr = [1,2,3,4,5]
```
## map
接收两个参数`cb`和`this`, 返回处理后的数组
```js
arr.map((item, index, list) => {
    console.log(this); // window
    return item * item;
}, this) // [1, 4, 9, 16, 25]
```

```js
Array.prototype.map = function(cb, arg) {
    let arr = [];
    for(let i = 0, len = this.length; i < len; i++) {
        arr.push(cb.call(arg, this[i], i, this));
    }
    return arr;
}
```
## filter
根据条件过滤数组，返回符合条件的元素
```js
arr.filter((item, index, array) => {
    console.log(this); // window
    return item > 2;
}, this); // [3,4,5]
```
```js
Array.prototype.filter = function(cb, arg) {
    let arr = [];
    for(let i = 0, len = this.length; i < len; i++) {
        cb.call(arg, this[i], i, this) && arr.push(this[i]);
    }
    return arr;
}
```
## some
测试数组中是不是至少有1个元素通过了被提供的函数测试。
```js
arr.some((element) => element % 2 === 0);
```
```js
Array.prototype.some = function(cb, arg) {
    for(let i = 0, len = this.length; i < len; i++) {
         if(cb.call(arg, this[i], i, this)) {
            return true;
         }
    }
    return false;
}
```
## every
测试一个数组内的所有元素是否都能通过某个指定函数的测试。
```js
arr.every((currentValue) => currentValue < 40);
```
```js
Array.prototype.every = function(cb, arg) {
    for(let i = 0, len = this.length; i < len; i++) {
         if(!cb.call(arg, this[i], i, this)) {
            return false;
         }
    }
    return true;
}
```
## reduce
```js
arr.reduce((acc, cur, idx, src) => acc + cur); // 15
```
```js
Array.prototype.reduce = function(cb, init) { // init是初始值
    let acc = init ?? this[0]; // ??是es2020新特性 和 || 不同的是??返回一个已定义的值 || 返回的是第一个真值 区别就是 ?? 可以返回0 ‘’
    for(let i = 0, len = this.length; i < len; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}
```
## reduceRgiht
```js
arr.reduce((acc, cur, idx, src) => acc + cur); // 15
```
```js
Array.prototype.reduceRgiht = function(cb, init) { // init是初始值
    let acc = init ?? this[this.length - 1]; // ??是es2020新特性 和 || 不同的是??返回一个已定义的值 || 返回的是第一个真值 区别就是 ?? 可以返回0 ‘’
    for(let i = this.length - 1; i >= 0; i--) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}
```
## copyWithin
浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。但是会改变原数组。
todo...
## find
返回数组中满足提供的测试函数的第一个元素的值。
```js
arr.find(element => element > 3); // 4
```
```js
Array.prototype.find = function(cb, thisArg) {
    for(let i = 0, len = this.length; i < len; i++) {
        if(cb.call(thisArg, this[i], i, this)) {
            return this[i];
        }
    }
    return;
} 
```
## flat
按照一个可指定的深度递归遍历数组，默认值为1
todo...
## Array.isArray
用于确定传递的值是否是一个 Array。
```js
Array.isArray(obj);
```
```js
Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
}
```