[TOC]

### （2）JavaScript 定义了几种数据类型？哪些是原始类型？哪些是复杂类型？null 是对象吗？

1.  基本数据类型：Boolean、Null、Undefined、Number、String、Symbol
2.  引用数据类型：Array，Function，Object



### （2）null,undefined 的区别?

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义（对象属性，变量的赋值，函数没有返回值，参数没有提供）

null表示"没有对象"，即该处不应该有值（函数参数，对象原型的终点）



### （2）谈谈你对 JS 执行上下文栈和作用域链的理解？

1.  在一段script或一个函数内，代码运行编译的一种解析机制。全局：变量定义和函数声明提升（预解析） 函数：变量定义、函数声明、this、arguments。

    ==执行上下文用于描述运行Javascript代码的环境。当在代码执行阶段执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，就叫做"执行上下文"，也叫执行上下文环境，也叫执行环境。==

    当调用一个函数时，一个新的执行上下文就会被创建。而一个执行上下文的生命周期可以分为两个阶段：创建阶段和执行阶段。

    创建阶段：创建变量对象，建立作用域链，以及确定this的指向。

    执行阶段：创建完成之后，就会开始执行代码，这个时候，会完成变量赋值，函数引用，以及执行其他代码。

2.  自由变量的一种查找机制，函数内部的变量被调用时，首先在自己的作用域下查找是否有这个变量，有就使用，没有就向父级作用域查找，父级没有就以此继续向上查找直到全局作用域，有就使用没有就是undefined。



### （3）谈谈垃圾回收机制的方式及内存管理，内存泄漏？

1.  标记清除：当变量进入环境时，将变量标记"进入环境"，当变量离开环境时，标记为：“离开环境”。某一个时刻，垃圾回收器会过滤掉环境中的变量，以及被环境变量引用的变量，剩下的就是被视为准备回收的变量。
2.  引用计数是跟踪记录每个值被引用的次数。被引用一次则加1，当这个引用计数为0时，被视为准备回收的对象。
3.  ==闭包，对象的彼此引用，以外的全局变量，遗忘的定时器和回调函数==



### （6）JS 如何实现继承？

1.  原型链：引用类型的属性被所有实例共享
2.  构造函数：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
3.  混合继承：融合原型链继承和构造函数的优点。
4.  原型式： Object.create  对象作为创建的对象的原型。
5.  寄生式：创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
6.  寄生组合：会调用两次父构造函数。（call，a.prototype=new b()）

```js
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```



### （1）AJAX

```js
function ajax(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		// code for IE6, IE5
		xmlhttp = ActionXObject("Microsoft.XMLHTTP");
	}
	
	//判定执行状态
	xmlhttp.onreadystatechange = function(){
		/*
		readyState
			0: 请求未初始化
			1: 服务器连接已建立
			2: 请求已接收
			3: 请求处理中
			4: 请求已完成，且响应已就绪
		status
			200:请求成功
			404:未找到
			500:服务器内部错误
		*/
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;//获得字符串形式的响应数据，如果返回的是XML需要单独解析
			//responseXML		获得 XML 形式的响应数据
			var xmlDoc = xmlhttp.responseXML;
			var txt = "";
			var num = xmlDoc.getElementsByName("value");//获取节点name=value的值
			for(var i=0;i<num.length;i++){
				txt = txt+num[i].childNodes[0].nodeValue+"<br />";
			}
			document.getElementById("myDiv2").innerHTML = txt;
		}
  	}
	
	//@param 最后一个参数表示是否是异步提交，为了避免使用缓存我们加上一个时间戳
	xmlhttp.open("Get","url"+
		(function(){
			var date = new Date();
			return date.getSeconds();	
		})
	,true);
	
	//设置头信息
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	//将信息发送到服务器
	xmlhttp.send();	
	
}
```



### （2）什么是跨域？列举跨域有几种实现形式？

1.  ##### 跨域指的是跨过同源策略，实现不同域之间进行数据交互的过程叫跨域

2.  jsonp,CORS,postMessage



### （3）Promise 有几种状态？Promise 的特点是什么，分别有什么优缺点？

1.  pending、fulfilled、rejected，一旦状态改变，不可更改
2.  `Promise`也很好地解决了回调地狱的问题，链式调用
3.  无法取消`Promise`，错误需要通过回调函数捕获。





### （4）箭头函数与普通函数有什么区别？

1.  没有自己的this和arguments
2.  不能作为构造函数，new会出错
3.  没有自己的原型
4.  不能作为Genoration函数，不能用yield关键字



### （4）JS 延迟加载的方式有哪些？

1.  **defer**：(页面load后执行)   **脚本会被延迟到整个页面都解析完毕之后再执行**
2.  **async**属性:(页面load前执行)  只适用于**外部脚本文件**
3.  动态创建Dom
4.  es6中type=module



### （3）简述同步和异步的区别

1.  在js单线程上的任务运行机制不同，同步会阻塞程序运行，异步不会。
2.  同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返 回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；
3.  异步是指进程不需要一直等下去， 而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效 率。



### （2）数组去重和遍历

1.  去重：双重for循环（splice），indexof()，includes()，reduce，filter，对象的属性不能重复，set。
2.  遍历：for，forEach，map，filter，reduce，every，some，find，findIndex



### （3）模块化开发怎么做？

1.  封装细节，提供使用接口，彼此之间互不影响，每个模块都是实现某一特定的功能。模块化开发的基础就是函数。
2.  使用函数封装，对象封装。
3.  使用cmd，amd，es6，commonJS标准方式。



### （2）webpack如何实现打包的?

1.  安装webpack并配置webpack.config.js；
2.  配置module.exports里的entery，output，module，rules，test，loader，options



### （1）setTimeout倒计时为什么会出现误差？

setTimeout作为异步任务，在实现倒计时功能的时候，除了执行我们功能的实现代码，还会有主线程对任务队列的读取及执行等过程，这些过程也需要耗费一些时间，所以会因为event loop的机制出现些许误差。



### （3）如何判断img加载完成？

1.  onload事件
2.  img的complete属性
3.  onreadystatechange事件



### （2）json和jsonp的区别?

1.  json是一种轻量级的数据交换格式。
2.  jsonp是一种跨域请求的方式，返回的数据格式不一定是json。



### （4）javascript 代码中的”use strict”;是什么意思 ? 使用它区别是什么?

1.    消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2.    消除代码运行的一些不安全之处，保证代码运行的安全；
3.     提高编译器效率，增加运行速度；
4.     为未来新版本的Javascript做好铺垫。



### （3）深拷贝和浅拷贝？实现？

1.  浅拷贝：基于已有对象的操作，拷贝一层，复制已有对象的栈内存的引用；（=，）
2.  深拷贝：拷贝多层，拷贝堆内存的数据到新开辟的一块堆内存中。
3.  extend，json，递归拷贝，Object.create(obj)，Object.assign()，concat，扩展运算符





### （4）列举几个前端性能方面的优化？

1.  减少http请求（合并文件，雪碧图，base64）
2.  减小资源体积：（js，css，图片压缩）
3.  缓存：（DNS，CDN，http）
4.  减少DOM操作：（事件代理，fragment，css动画，canvas）



### （2）如何实现同一个浏览器多个标签页之间的通信？

1.  localStorage：localStorage.setItem(key,value)和使用storage事件监听添加、修改、删除的动作
2.  cookie和setInterval（）:document.cookie和getKey（）



### （4）js用过哪些设计模式

1.  工厂模式：解决多个相似的问题

2.  单例模式：只能被实例化(构造函数给实例添加属性与方法)一次

3.  沙箱模式：将一些函数放到自执行函数里面,但要用闭包暴露接口,用变量接收暴露的接口,再调用里面的值,否则无法使用里面的值

4.  发布者订阅模式：用数组存贮订阅者, 发布者回调函数里面通知的方式是遍历订阅者数组,并将发布者内容传入订阅者数组

    

### （3）使用ES5实现一个继承?

1.  原型链：无法调用父类构造方法
2.  对象冒充：无法调用原型链方法（call）
3.  对象冒充和原型链



### （2）对前端路由的理解?前后端路由的区别？

1.  前端路由：很重要的一点是页面不刷新，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，每跳转到不同的URL都是使用前端的锚点路由. 随着（SPA）单页应用的不断普及，前后端开发分离，目前项目基本都使用前端路由，在项目使用期间页面不会重新加载。

2.  后端路由： 浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面, 意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。

    

### （2）XMLHttpRequest.readyState;状态码的意思

1.  XMLHttpRequest：1，2，3，4，5
    1.  readyState：0: 请求未初始化
        			          1: 服务器连接已建立
        		          	2: 请求已接收
        		          	3: 请求处理中
        			          4: 请求已完成，且响应已就绪



### （）谈谈你对AMD、CMD的理解

1.  AMD：AMD是预加载，在并行加载js文件同时，还会解析执行该模块
2.  CMD：CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。







