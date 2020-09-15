# 实现add满足以下功能
```js
add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

## 基本概念
### fn.toString()
```js
function fn() {
    console.log('fn');
}
fn // 直接获取返回的是fn.toString()
// fn()才会调用整个函数
```
### arguments
在函数执行时会生成两个参数 `this` 和 `arguments`，`this` 先不说，`arguments` 里面放的是对当前函数传的参数的引用。
```js
function fn() {
    console.log(arguments);
}
fn(1,2,3) // [1,2,3]
```

## 思路
总体来说，使用闭包对 `arguments` 参数缓存，然后修改闭包的 `toString`，返回对 `arguments` 的和。最后返回闭包函数。
```js
function add() {
    let args = [...arguments];
    let _adder = function(...arg) {
        args.push(...arg);
        return _adder;
    }
    _adder.toString = function() {
        return args.reduce((acc, cur) => acc + cur);
    }
    return _adder;
}
```
```js
add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```