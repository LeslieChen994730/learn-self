[TOC]

## 基础

### 暂存死区

即无法预解析，在let声明变量之前，该变量都是不可用的。该区域成为一个封闭的作用域。

`let` 和 `const` 声明的变量不会被提升到作用域顶部，如果在声明前访问这些变量，会导致错误。

```js
var value = 'global'

// 例子1
(function() {
   console.log(value)
   let value = 'local'
}())

// 例子2
{
   console.log(value)
   const value = 'local'
}

//两个例子中，结果并不会打印 "gobal" 而是报错 ReferenceError: value is not defined，就是因为 TDZ 的缘故
```

### let和const

let与const都是只在声明所在的块级作用域内有效。

let声明的变量可以改变，值和类型都可以改变，没有限制。

`const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

对于复合类型的变量，如数组和对象，==变量名不指向数据，而是指向数据所在的地址。==`const`命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。

```js
const a ;//报错,一旦声明变量，应该立即赋值！！
 
const b = 2;
b = 3//报错，因为定义常量之后不能成重新赋值！！

const names = [];
names = [1,2,3] //出错，因为变量names指向的地址不能发生改变，应始终指向[]所在的地址！！！[1,2,3]与[]不是同一个地址

//不会报错，因为names指向的地址不变，改变的只是内部数据
const names = [];
names[0] = 1
names[1] = 2
names[2] = 3
```

### 模板字符串

${参数}；

{}里面可以插入任何js表达式，可以是一个对象、数组，甚至是一个函数。

**对象**，**数组**、**函数**会调用它们的tostring()方法。

```js
var s1 = `hello vue`;
`xxx ${s1} xxx` //xxx hello vue xxx

//对象
var obj = {a:1,b:2};
`xxx ${obj} xxx`//xxx [object Object] xxx

//数组
var arr = [1,2,3];
`xxx ${arr} xxx`//xxx 1,2,3 xxx

//函数，直接调用函数，则输出函数的返回值
var fn1 = function(){
console.log('hello vuex');
}
var fn2 = function(){
return 'hello vue-router'
}
`xxx ${fn1}`//xxx function fn(){....}
`xxx ${fn1()}`//xxx underfind
`xxx ${fn2()}`//xxx hello vue-router
```



## 解构赋值

**解构是:按照一定的模式，从数组或对象中提取值的过程。**
解构赋值就是：按照一定的模式从数组或对象中取值，对变量进行赋值的过程。

 ==数组(要位不要名)==　

 ==对象(要名不要位)==

### 数组

```js
let arr = [0,1,2]
let [a,b,c] = arr
console.log(a) // 0
console.log(b) // 1
console.log(c) // 2

let arr = [,1,2]
let [a='我是默认值',b,c] = arr
console.log(a) // '我是默认值'
console.log(b) // 1
console.log(c) // 2

var arr = [[11, 12], [21, 22], [31, 32]];
for (let [a, b] of arr) {
    console.log(a);
    console.log(b);
}
//11
//12
//21
//22
//31
//32

```

### 对象

对象的解构赋值是根据key值进行匹配。

嵌套对象属性重名，解构时需要更改变量名。

```js
let {name,age} = {name:"swr",age:28}
console.log(name) // 'swr'
console.log(age) // 28

let {name="swr",age} = {age:28}
console.log(name) // 'swr'
console.log(age) // 28
// 这里规则和数组的解构赋值一样，当name = undefined时，则会使用默认值

//嵌套对象属性重名，解构时需要更改变量名。
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        name: '大熊',
        sex: 'male',
        age: 1
    }
};
//赋值解构
var {name: fathername, son: {name, sex, age}} = obj;
console.log(fathername); //chris
console.log(name); //大熊

//传参解构
function fn3({sex, age, name, son: {name: sonname}}) {
    console.log(name + ' ' + sex + ' ' + age + ' ' + sonname);
}

fn3(obj);
//chris male 26 大熊
```

### 嵌套解构

```js
const arr=['a','b',['c','d',['e','f','g']]];
const [,,[,,[,,g]]]=arr;//‘g’

//对象
const obj={
    man:{
      student:{
           name:'小明',
           age:18
        }
   }
}
 
let {man:{student}} = obj //obj里面有个man,然后里面有个student,注意这一行代码里变量就只有一个student,并没有man
console.log(man,student) // undefined,{name:'小明',age:18}
let {man:{student:{name}}} = obj //同理,逐层拿到最后的name值,而且也只有name这一个属性
console.log(name) //小明
 
//如何同时拿到嵌套的每层的数据
let {man,man:{studengt},man:{student:{name}}} = obj
console.log(man,student,name) //{student:{name:'小明',age:18}},{name:'小明',age:18},18
```



## 拓展运算符(...)

好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);

// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
```

### 复制数组

```js
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]
//指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

//es5
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]

//es6
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

### 合并数组

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

### 复制对象（Object.assign）

```js
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
// 深拷贝
z.a = 7
console.log(z)  // {a: 7, b: 4}
console.log(n) // {a: 3, b: 4}

let aClone = { ...z };
// 等同于
let aClone = Object.assign({}, z);
```

### 合并对象

```js
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);

// 深拷贝
let z = { a: 3, b: 4 };
let n = { c: 5, d: 6 };
let test = {...z, ...n}
z.a = 5
console.log(test) // {a: 3, b: 4, c: 5, d: 6}
```



## 剩余参数（...rest）

...rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

==...rest必须为最后一个参数。==

```js
function func(a, ...rest) {
  console.log(a)
  console.log(rest)
}
func(1)//1 []
func(1, 2, 3, 4) //1 [2,3,4]

function func(a, b, ...rest) {
  console.log(a, b)
  console.log(rest)
}
func(1, 2) //1 2 []
func(1, 2, 3, 4) //1 2 [3,4]
```

### 前面无参数和argument区别

arguments是一个[伪数组](http://www.cnblogs.com/snandy/archive/2011/03/12/1981583.html)（Array-like）。

剩余参数是一个真正数组（Array），具有Array.prototype上的所有方法。

==rest不能和arguments一起使用，会报错。==

```js
function func(...rest) {
  console.log(rest)
}
func(1) // [1]
func(1, 2, 3, 4) // [1,2,3,4]
```



## class基本用法

ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。类的数据类型就是函数，类本身就指向构造函数。

### 类的定义

类定义不会被提升，这意味着，必须在访问前对类进行定义，否则就会报错。

```js
// 匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}
// 命名类
let Example = class e {
    constructor(a) {
        this.a = a;
    }
}
```

### 类的方法

定义在类中的方法不需要添加function。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

#### constructor方法

constructor 方法是类的默认方法，创建类的实例化对象时被调用。

==一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。==

`constructor`方法默认返回实例对象（即`this`），完全可以指定返回另外一个对象。

```js
class Example{
    constructor(){
      console.log('我是constructor');
    }
}
new Example(); // 我是constructor


class Point {
}

// 等同于
class Point {
  constructor() {}
}
```

#### 静态方法和静态属性

静态方法和属性无需实例化对象，直接调用。类名.方法（）。

==该方法不会被实例继承。父类的静态方法，可以被子类继承==。

静态方法也是可以从`super`对象上调用的。

```js
//静态方法
class Example{
    static sum(a, b) {
        console.log(a+b);
    }
}
Example.sum(1, 2); // 3

//静态属性
class Example {
// 新提案
    static a = 2;
}
// 目前可行写法
Example.b = 2;

//公共属性
class Example{}
Example.prototype.a = 2;

//静态方法被子类调用
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```

#### 原型方法

```js
class Example {
    sum(a, b) {
        console.log(a + b);
    }
}
let exam = new Example();
exam.sum(1, 2); // 3
```

### getter和setter

对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```js
class Person {
    constructor(name,age) {
        this.name = name;// 执行这里 --- 1
        this.age = age;
    }
                
    set name(name) { // 进入到这里进行设置  -- 2
        console.log("setter");
        this._name = name;
    }
                
    get name() { // 在这里将对应的值返回 --- 3
        console.log("getter");
        return this._name;
    }
                
    sayName() { // 这里的调用，又从 1-2-3
        console.log(this.name);
    }
}
let p2 = new Person("lisi",22);
console.log(p2);// 真实的属性是 age  _name   而不是name
p2.sayName();
console.log(p2._name);// 如果你访问的是 p2.name  最后会执行 1-3 这两个步骤，会打印出getter

// 只要this.+属性名 和get 属性名/ set 属性名 中，属性名一致，
//　　  this.name 会去调用getter 和 setter ，也就是说 getter和setter是hock函数
 　//　 而真实存储的属性是 _name 我们可以在实例化后，直接获取
```

#### 只有getter定义只读属性

当一个属性只有getter没有setter的时候，我们是无法进行赋值操作的（第一次初始化也不行）。

当没有getter和setter时，就可以正常读写属性。

```js
// 只有getter定义只读属性
class foo {
    constructor(name) {
        this.name = name;
    }
                 
    get name() {
        console.log(`getter函数`);
        return this.name;
    }
}
//Cannot set property name of #<foo> which has only a getter
 let p3 = new foo("李四");
```

#### new.target属性

这个属性可以用来确定构造函数是怎么调用的。确保构造函数只能通过`new`命令调用。

子类继承父类时，`new.target`会返回子类。

```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
```

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length, width) {
    super(length, width);
  }
}

var obj = new Square(3,5); // 输出 false
```

利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。

```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```



## class继承（extends）

子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。

只有调用`super`之后，才可以使用`this`关键字，否则会报错。

父类的静态方法，也会被子类继承。

```js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

### Object.get/setPrototypeOf()

`Object.getPrototypeOf`方法可以用来从子类上获取父类。

``Object.setPrototypeOf(obj, prototype)`设置obj的原型。

```js
Object.getPrototypeOf(ColorPoint) === Point
// true
```

### super

既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

#### 作为函数使用

代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数。

作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。

`super`虽然代表了父类`A`的构造函数，但是返回的是子类`B`的实例，即`super`内部的`this`指的是`B`的实例，因此`super()`在这里相当于`A.prototype.constructor.call(this)`。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B
```

#### 作为对象

`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

定义在父类实例上的方法或属性，是无法通过`super`调用的。

如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的原型对象。

==super.p()=A.prototype.p()==

```js
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();

//super调用父类实例上的方法和属性
class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined
```

```js
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```

```js
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```

### ES5模拟class

1.  创建空对象；create Object（fn.prototype）
2.  构造函数的prototype属性指向空对象原型。
3.  this赋值空对象。
4.  无返回值，则默认返回this创建的对象。

```js
function Constructor(fn,args){
    let _this=Object.create(fn.prototype);
    let res=fn.apply(_this,args);
    return res?res:_this;
}
```



## Promise异步

### 特点

1.  对象的状态不受外界影响。有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
2.  一旦状态改变，就不会再变，任何时候都可以得到这个结果。只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 ==resolved（已定型）==。



### 一个函数参数（new Promise(resolve,reject)）

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value){...成功回调的函数},function(error){...失败后的回调})
```

### 实现Ajax

```js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

### 三个原型方法

#### Promise.then(fn1,fn2)

`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）是`rejected`状态的回调函数。

`then`方法返回的是一个新的`Promise`实例（注意，不是原来那个`Promise`实例）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法。

```js
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
```

#### Promise.catch(fn)

`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

==catch和reject不同的是,catch可以捕获resolve运行时的程序错误。==

```js
// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```

一般来说，不要在`then()`方法里面定义 Reject 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。

```js
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

#### Promise finally(fn)

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

### 五个普通方法

#### Promise.all([promise1,promise2...])

1.Promise.all方法可以把多个promise实例包装成一个新的promise实例；
Promise.all([promise1,promise2]):Promise---最终返回Promise实例；

2.全部加载成功 则返回所有promise实例中resolve（）回来带的参数，按数组中一一对应的顺序所集合的数组
若任意有一个失败 ，立即决议失败，将失败的promise实例（reject()中参数）传递给我们；
3.若Promise.all([ ])中，数组为空数组，则立即决议为成功执行resolve( )；

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
//上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

//如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
```

#### Promise.race([promise1,promise2...])

Promise.race([ ])---race竞赛，只要有一个决议了，就返回一个promise实例（对应resolve()或reject( )中参数值；

1、与Promise.all()对应的，还有一个 Promise.race()方法，接受的也是个数组，里面也都是Promise实例。
---数组中有一个promise实例决议为成功或失败，Promise.race()也会决议为成功或失败，将对应的值（参数）传递过来；
2、Promise.race([ ])中数组为空数组，就不会执行，永远挂起；*******与all方法相反。

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})


Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```

#### Promise.allSettled([promise1,promise2...])

只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束。

`Promise.allSettled()`的返回值`allSettledPromise`，状态只可能变成`fulfilled`。它的监听函数接收到的参数是数组`results`。该数组的每个成员都是一个对象，对应传入`Promise.allSettled()`的两个 Promise 实例。每个对象都有`status`属性，该属性的值只可能是字符串`fulfilled`或字符串`rejected`。`fulfilled`时，对象有`value`属性，`rejected`时有`reason`属性，对应两种状态的返回值。

```js
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```

#### Promise.any([promise1,promise2...])

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

```js
var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);

Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
  console.log(result); // 42
});

Promise.any([rejected, alsoRejected]).catch(function (results) {
  console.log(results); // [-1, Infinity]
});
```

#### Promise.resolve()

.resolve()方法，用于返回一个状态为 fulfilled 的Promise对象。

.rejecct()方法，用于返回一个状态为 rejected 的Promise对象。

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```



[TOC]

