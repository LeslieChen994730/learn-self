[TOC]

## 函数分类

### 普通函数（函数声明、函数表达式）

```js
//函数声明
function test(){
    console.log("简单示例");
}

test(); //控制台输出:简单示例

//函数表达式
var fn = function(x){ return x+1} 
```

函数声明和函数表达式的区别：

==解释器会率先读取函数声明，并使其在执行之前可以访问，而使用表达式则必须等到解析器执行到它所在的代码行，才会真正被解释执行，函数声明会正常执行。==



### 匿名函数

1.  变量匿名函数等于函数表达式

2.  无名称匿名函数

    ```js
     //①先用()包起来,然后再后面跟 (参数) 
    (function(data){
      console.log(data);
    })("222");

    //②先后面跟(参数),然后再()包起来
    (function(data){
      console.log(data);
    }("333"));
    
    //③正常函数格式，前面加 !
    !function(data){
      console.log(data);
    }("444");
    ```
    
    

### 闭包函数

==假设，函数A内部声明了个函数B，函数B引用了函数B之外的变量，并且函数A的返回值为函数B的引用。那么函数B就是闭包函数。==

作用：私有化变量，做缓存。



```js
function funA() {
    var i = 0; 
    function funB() { //闭包函数funB
        i++;
        console.log(i)
    }
    return funB;
}
var allShowA = funA(); //全局变量引用：累加输出1,2,3,4等
 allShowA (); //输出1
  allShowA (); //输出2
   allShowA (); //输出3
function partShowA() {
    var showa = funA();//局部变量引用：只输出1
    showa();
}
```

执行函数partShowA(),因为内部只声明了局部变量showa来引用funA，执行完毕后因作用域的关系，释放showa占用的资源。

闭包的关键就在于作用域：全局变量占有的资源只有当页面变换或浏览器关闭后才会释放。var allShowA = funA() 时，相当于allShowA引用了funB()，从而使funB()里的资源不被GC回收，因此funA()里的资源也不会。



### 构造函数

```js
var fn=new Function('num1','num2','return num1+num2');
```



## call apply blind

1.  相同点：都是用来改变this指向的。

2.  call 和 apply的区别：

    call()的第一个参数是this要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window；

    apply()：第一个参数是this要指向的对象，第二个参数是数组。

3.  call（）和blind（）区别：

    call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数。

    ```js
    //例如：
    function f(){
    console.log("看我怎么被调用");
    console.log(this) //指向this
    }
    var obj = {};
    f.call(obj) //直接调用函数
    var g = f.bind(obj); //bind()不能调用函数
    g();  //此时才调用函数
    
    //call()判断数据类型
    console.log(Object.prototype.toString.call("qq"))            // [Object String] 返回值都是字符串类型
    console.log(Object.prototype.toString.call(12))              // [object Number]
    console.log(Object.prototype.toString.call(false))           // [object Boolean]
    console.log(Object.prototype.toString.call(undefined))       // [object Undefined]
    console.log(Object.prototype.toString.call(null))            // [object Null]
    console.log(Object.prototype.toString.call(function(){}))    // [object Function]
    console.log(Object.prototype.toString.call([]))              // [object Array]
    console.log(Object.prototype.toString.call({}))              // [object Object]
    ```




## 隐含参数(arguments,callee,caller)

### arguments

arguments是一个类数组对象不是一个数组实例；arguments和命名参数共用同一块内存空间。

```js
function argumentsTest(arg1,arg2){
    console.log("arguments instanceof Array?",arguments instanceof Array);
    console.log("arguments instanceof Object?",arguments instanceof Object);
    console.log("arguments[0] === arg1?", arg1 === arguments[0]);
}
argumentsTest(1,2,3,4,5);
//输出结果为：
//arguments instanceof Array? false
//arguments instanceof Object? true
//arguments[0] === arg1? true
```

### caller

caller是函数的属性，代表调用当前函数的函数的引用。如果在全局作用域中调用，它的值为null。

```js
function func() {
     if (func.caller) {
         var a= func.caller.toString();
         console.log(a);
         console.log(func.caller === callerFunc);
     } else {
         console.log("this is not caller");
     }
}
function callerFunc() {
     func();
     if (callerFunc.caller) {
         var a= callerFunc.caller.toString();
         console.log(a);
     } else {
         console.log("this is not caller");
     }
}
callerFunc();
//输出为：
//function ...
//true
//this is not caller
```

### callee

callee是arguments的属性，代表当前正在执行的函数。

==arguments.callee== 代指函数本身，用于递归。

```js
function func() {
     if (arguments.callee) {
         var a= arguments.callee.toString();
         console.log(a);
         console.log(arguments.callee === func);
     } else {
         console.log("this is not callee");
     }
}
function Func() {
     func();
     if (arguments.callee) {
         var a= arguments.callee.toString();
         console.log(arguments.callee === Func)
         console.log(a);
     } else {
         console.log("this is not callee");
     }
}
Func();
//结果为:
//function ...
//true
//true
//function ...
```



## ES6箭头函数

### 基本用法

```js
let func=(...args)=>args; //默认返回
let func=(...args)=>({obj});

let func=(...args)=>{args};//不返回
let func=(...args)=>void args;
```

### 箭头函数this为父作用域的this，不是调用时的this

箭头函数的this永远指向其父作用域，任何方法都改变不了，包括call，apply，bind。
普通函数的this指向调用它的那个对象。

```js
let person = {
    name:'jike',
    init:function(){
        //为body添加一个点击事件，看看这个点击后的this属性有什么不同
        document.body.onclick = ()=>{
            alert(this.name);//jike      
        }
    }
}
person.init();

let person = {
    name:'jike',
    init:()=>{
        //为body添加一个点击事件，看看这个点击后的this属性有什么不同
        document.body.onclick = ()=>{
            alert(this.name);//undefined          
        }
    }
}
person.init();
```

### 箭头函数不能作为构造函数，不能使用new

==this必须是对象实例，而箭头函数是没有实例的。==

```js
//构造函数如下：
function Person(p){
    this.name = p.name;
}
//如果用箭头函数作为构造函数，则如下
var Person = (p) => {
    this.name = p.name;
}
```

### 箭头函数没有arguments，caller，callee

箭头函数中要想接收不定参数，应该使用rest参数...解决。

```js
let B = (b)=>{
  console.log(arguments);
}
B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined

let C = (...c) => {
  console.log(c);
}
C(3,82,32,11323);  // [3, 82, 32, 11323]
```

### 箭头函数通过call和apply调用，不会改变this指向，只会传入参数

```js
let obj2 = {
    a: 10,
    b: function(n) {
        let f = (n) => n + this.a;
        return f(n);
    },
    c: function(n) {
        let f = (n) => n + this.a;
        let m = {
            a: 20
        };
        return f.call(m,n);
    }
};
console.log(obj2.b(1));  // 11
console.log(obj2.c(1)); // 11
```

### 箭头函数没有原型属性

```js
var a = ()=>{
  return 1;
}

function b(){
  return 2;
}

console.log(a.prototype);  // undefined
console.log(b.prototype);   // {constructor: ƒ}
```

### 箭头函数在ES6 class中声明的方法为实例方法，不是原型方法

在class中尽量少用箭头函数声明方法。

```js
//deom1
class Super{
    sayName(){
        //do some thing here
    }
}
//通过Super.prototype可以访问到sayName方法，这种形式定义的方法，都是定义在prototype上
var a = new Super()
var b = new Super()
a.sayName === b.sayName //true
//所有实例化之后的对象共享prototypy上的sayName方法


//demo2
class Super{
    sayName =()=>{
        //do some thing here
    }
}
//通过Super.prototype访问不到sayName方法，该方法没有定义在prototype上
var a = new Super()
var b = new Super()
a.sayName === b.sayName //false
//实例化之后的对象各自拥有自己的sayName方法，比demo1需要更多的内存空间
```



[TOC]

