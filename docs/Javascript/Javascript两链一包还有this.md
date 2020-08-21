# Javascript两链一包还有this
## 原型链
访问一个属性时，先在基本属性上找，如果没有，再沿着 `_proto_` 这条链往上找，这就是**原型链**。原型链的最后是 `null`。
构造函数可以设置 `prototype` 实现继承就是这个原理。

在创建对象时默认会把 `Object` 的原型指定到当前原型链上。
```js
// 创建对象
let obj = {name: 'abc'};
obj.hasOwnProperty('name') // hasOwnProperty是从Object原型上的方法
// 原型链的顺序为 obj -> Object -> null
// 如果不希望obj原型链上有Object
let obj = Object.create(null); // 创建纯{}
```

构造函数生成实例对象
```js
function Person(name) {
    this.name = name;
}

Person.prototype.foo = 'foo';

let abc = new Person('abc'); // 原型链 abc -> Person -> Object -> null
abc.name; // 'abc' 直接从实例对象上找到
abc.foo; // 'foo' 从Person找到
abc.hasOwnProperty; // 从Object找到

function Programmer(job) {
    this.job = job;
}

Programmer.prototype = new Person('bar');

let h5er = new Programmer('h5'); // // 原型链 h5er -> Programmer -> Person -> Object -> null
```

## 作用域链
当在函数中访问变量时会搜索作用域链查找，一层层就会形成**作用域链**。
```js
let name = 'window';
function getName() {
    console.log(name); // 这里是找不到name的，这里由于下面的定义会形成一个TDZ(暂时性死区) 如果用 var 将会输出 undefined 下面没有定义才会输出 window
    let name = 'getname';
    console.log(name); // getname
}
getName(); // getname 作用域链 getName -> window/global
```
## this
我们知道 `this` 对象是在运行时基于函数的执行环境绑定的：在全局函数中，`this` 等于 `window`， 而当函数作为某个对象的方法调用时，`this` 等于那个对象。
```js
console.log(this); // window
var name = 'the window';
function getName() {
    console.log(this.name); // 这里并没有指定this
}
var o = {
    name: 'abc'
}
function fn() {
    let name = 'fn';
    getName();
}
getName() // the window 执行的时候才会指定 this 现在 this指向了window
o.getName = getName;
o.getName(); // abc 当函数作为某个对象的方法调用时，`this` 等于那个对象
let a = o.getName.bind(this); // this被指定到了window 一经绑定就不能改变了
a(); // the window 
a.bind(o); // 这里已经不会改变指向了 所以还是输出 the window
o.getName.call(this); // the window this被指定到了window
o.getName.apply(this); // the window this被指定到了window
fn(); // the window 这里不输出 fn 是因为最终运行的环境还是window this最终的指向不是由定义的地方决定 而是由运行时基于函数的执行环境绑定的
```
## 闭包
闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常用方式是在一个函数内部创建另一个函数。简单说就是函数对内有引用，对外有返回。

```js
function calc() {
    let i = 0;
    function changeVal(val) {
        i+=val;
    }
    return {
        add: function() {
            changeVal(1);
            return this; // 支持链式调用
        },
        minus: function() {
            changeVal(-1);
            return this; // 支持链式调用
        },
        value: function() {
            return i;
        }
    }
}
let instance1 = calc();
instance1.add().add().minus().value(); // 1

let instance2 = calc(); // 第二个还是从0开始
instance2.add().add().value(); // 2

instance1 = null; // instance1 结束引用 触发垃圾回收
instance2 = null; // instance2 结束引用 触发垃圾回收

// 不结束引用 i会一直存在
```
### 闭包的作用
1. 私有变量：从上面可以看出来 `i` 只对外面暴漏一个查看方法，无法直接修改。如果不暴露`value` 查看也不能查看。只能通过暴漏的接口对它进行操作。
2. 不清除外部的引用，内部对外的变量会一直都存在。