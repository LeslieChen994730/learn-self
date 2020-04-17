[TOC]

## JS数据类型

1.  **基本数据类型**：string ， number ，null ，undefined ， boolean
2.  **复杂（引用）数据类型**：Object，Function,Array
3.  **区别**：**基本类型的变量是存放在栈区的**，**引用类型的值保存在堆内存中，地址放在栈内存中**



## 判断数据类型

1.  **typeof**

    返回数据类型，包含这7种： number、boolean、symbol、string、object、undefined、function。

    ==typeof null  返回类型错误，返回object==

    ==引用类型，除了function返回function类型外，其他均返回object==。

2.  **toString**

    ```js
    Object.prototype.toString.call('') ;   // [object String]
    Object.prototype.toString.call(1) ;    // [object Number]
    Object.prototype.toString.call(true) ; // [object Boolean]
    Object.prototype.toString.call(Symbol()); //[object Symbol]
    Object.prototype.toString.call(undefined) ; // [object Undefined]
    Object.prototype.toString.call(null) ; // [object Null]
    Object.prototype.toString.call(new Function()) ; // [object Function]
    Object.prototype.toString.call(new Date()) ; // [object Date]
    Object.prototype.toString.call([]) ; // [object Array]
    Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
    Object.prototype.toString.call(new Error()) ; // [object Error]
    Object.prototype.toString.call(document) ; // [object HTMLDocument]
    Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
    ```

3.  **constructor**

    ```js
    console.log(bool.constructor === Boolean);// true
    console.log(num.constructor === Number);// true
    console.log(str.constructor === String);// true
    console.log(arr.constructor === Array);// true
    console.log(obj.constructor === Object);// true
    console.log(fun.constructor === Function);// true
    
    //undefined和null没有contructor属性
    //constructor不能判断undefined和null，并且使用它是不安全的，因为contructor的指向是可以改变的
    ```

    

4.  **instanceof**

    ==instanceof 是用来判断 A 是否为 B 的实例==     A instanceof B

    ```js
    console.log(reg instanceof Object); //true
    console.log(reg instanceof RegExp); //true  因为根据规定，所用引用类型的值都是Object的实例，因此都是返回true
    
    console.log(bool instanceof Boolean);  //false 
    var bool2 = new Boolean();
    console.log(bool2 instanceof Boolean); //true  引用类型与基本包装类型的主要区别就是对象的生存期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都是一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁
    ```



## 逻辑操作符

1.  **与(&&)**

    1.  第一个操作数为true时，返回最后一个操作数

    2.  第一个为false，返回第一个操作数

        在回调中，`callback && callback()`，先判断callback是否存在，存在才执行。

        条件语句：`if (a == b) stop();`换成`(a == b) && stop();`。

        判断某个对象存在再取值：`p && p.x`。

2.  **或（||）**

    1.  第一个操作数为true，返回第一个数
    2.  ==如果为false，一直向后判断，到true返回，没后则返回最后一个值==



## JS内置对象（Date和Math）

Math不是一个构造函数，里面提供的是静态成员
Date是一个构造函数，首先要通过new Date() 来创建日期实例，基于1970年1月1日起的秒数

1.  **Date**

    ```js
                var date6 = new Date();
                //获取年份
                console.log(date6.getFullYear());
                //获取月
                console.log(date6.getMonth()+1);
                //获取日
                console.log(date6.getDate());
                //获取星期
                console.log(date6.getDay());
                //获取时
                console.log(date6.getHours());
                //获取分
                console.log(date6.getMinutes());
                //获取秒
                console.log(date6.getSeconds());
                //获取毫秒
                console.log(date6.getMilliseconds());
    
    weeks=['日','一','二','三','四','五','六'];
    week=date6.getDay();
    weeks[week]
    ```

    

2.  **Math**

```js
Math.PI //圆周率 （是属性）
Math.random()  //生成随机数
Math.floor() // 向下取整
Math.cell()  //向上取整
Math.round() //四舍五入
Math.abs()  //绝对值
Math.max/Math.min()// 取最大值/最小值
   // 返回给定的一组数字中最大值，如果给定的参数中至少有一个参数无法被转换成数字，则会返回NaN
Math.sin()/Math.cos() // 正弦余弦
Math.power()/Math.sqrt() //求指数次幂/求平方根

生成一个n到m的随机数
random=Math.floor(Math.random()*(m-n+1)+n);
```



## JS解析机制

遇到**script**标签就进行预解析，将变量**var**和**function**声明提升（==变量赋值为undefined==），但不会执行

fucntion里的内容，进入上下文，直到没有var和function，就开始执行解析。

使用匿名函数的方式不存在函数提升，因为其是使用变量提升的，只存在变量提升。

如果函数名与变量名冲突，那么预解析过程中会舍弃掉变量，保留函数。函数名与函数名冲突，预解析过程中会留下后面定义的函数。

```js
var a = 1;
function doSth () {
	alert(a);    //undefined
	var a = 2;
}
doSth(); 
```



## JS垃圾收集机制

1.  ***标记清除***

    1.**工作原理**：是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。

    2.**工作流程**：

    1.  垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。

    2.  去掉环境中的变量以及被环境中的变量引用的变量的标记。

    3.  再被加上标记的会被视为准备删除的变量。

    4.  垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。

2.  ***引用计数***

    1.  **工作原理**：跟踪记录每个值被引用的次数。

    2.  **工作流程**：

        1.  声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1。

        2.  同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1.

        3.  当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减1.

        4.  当引用次数变成0时，说明没办法访问这个值了。

        5.  当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。

### 引用计数方式的bug

但是==循环引用的时候就会释放不掉内存==。循环引用就是==对象A中包含另一个指向对象B的指针，B中也包含一个指向A的引用==。因为IE中的BOM、DOM的实现使用了COM，而COM对象使用的垃圾收集机制是引用计数策略。所以会存在循环引用的问题。

解决：==手工断开js对象和DOM之间的链接。赋值为null==。IE9把DOM和BOM转换成真正的JS对象了，所以避免了这个问题。



### 内存泄漏

1.  意外的全局变量引起的内存泄漏。

原因：全局变量，不会被回收。

解决：使用严格模式避免。

2.  闭包引起的内存泄漏

原因：闭包可以维持函数内局部变量，使其得不到释放。

解决：将事件处理函数定义在外部，解除闭包,或者在定义事件处理函数的外部函数中，删除对dom的引用。

3.  没有清理的DOM元素引用

原因：虽然别的地方删除了，但是对象中还存在对dom的引用

解决：手动删除。

4.  被遗忘的定时器或者回调

原因：定时器中有dom的引用，即使dom删除了，但是定时器还在，所以内存中还是有这个dom。

解决：手动删除定时器和dom。

5.  子元素存在引用引起的内存泄漏

原因：div中的ul li 得到这个div，会间接引用某个得到的li，那么此时因为div间接引用li，即使li被清空，也还是在内存中，并且只要li不被删除，他的父元素都不会被删除。

解决：手动删除清空。

[TOC]

