[TOC]

## JSON

### 概念和格式

JSON的英文全称是JavaScript Object Notation，也就是**JS对象标记法**。

JSON是一种数据格式，载体是字符串，其实，JSON对象就是JS对象的子集而已。

![](图片\JSON格式要求.png)

![](图片\JSON数据类型.png)

### 方法

==JSON.parse():==用于将一个JSON字符串转换成JavaScript对象。

==JSON.stringify()==:用于将JavaScript转换成JSON字符串。



## Ajax

### 概念

"Asynchronous Javascript And XML"（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

优点：
1、通过异步模式，提升了用户体验 ；
2、优化了浏览器和服务器之间的传输，减少了不必要的数据往返，减少了宽带占用 ；
3、Ajax 引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载 ；

缺点：
1、不支持浏览器 back 按钮 ；
2、安全问题 Ajax 暴露了与服务器交互的细节；
3、对搜索引擎的支持比较弱 ；



### 原生JS步骤

#### 创建XMLHttpRequest对象

==XMLHttpRequest 是一种支持异步请求的技术，它是 Ajax 的核心 。==

```js
// 获取ajax开发核心对象
function getXHR() {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
```

#### 注册回调函数

```js
xmlhttp.onreadystatechange = function(){//设置回调函数
	if(xmlhttp.readyState == 4)//这里的4是请求的状态码，代表请求已经完成
		if(xmlhttp.status == 200 || xmlhttp.status == 304)//这里是获得响应的状态码，200代表成功，304代表无修改可以直接从缓存中读取
			var result = xmlhttp.responseText;//这里获取的是响应文本，也可以获得响应xml或JSON
			alert("获取了响应文本" + result);
}

```

#### 创建请求信息

==XHR.open(post/get,url,async)==

```js
 //get请求下参数加在url后，.ashx?methodName = GetAllComment&str1=str1&str2=str2
    xmlHttp.open("post", "/ashx/myzhuye/Detail.ashx?methodName=GetAllComment", true);

    //post请求下需要配置请求头信息
    //xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

#### 发送请求

```js
xmlhttp.send(data);//POST请求
xmlHttp.send("methodName = GetAllComment&str1=str1&str2=str2");

xmlhttp.send();//GET请求
```

### jQuery下的Ajax

#### 请求方式

![](图片\jQuery下的Ajax请求方式.png)



#### get和post请求方式

```js
$.get("test.cgi", { name: "John", time: "2pm" },
  function(data){
    alert("Data Loaded: " + data);
  },"json");

 $.post("/Resources/addfriend.ashx", { "fid": fids, "fname": fnames, "tuid": tuids, "tuname": tunames }, function (data) {
        if (data == "ok") {
            alert("添加成功！");
        }
    },"json")
```

#### Ajax请求

![](图片\Ajax请求.png)

```js
         $.ajax({
                        //type默认为get
                        type:"post",
                        url:"searchServlet",
                        data:{name:"data"},
                        dataType:"json",
                        success:function (result) {
                            //判断数据是否为空,result返回的是一个列表数据，就是js数组
                            if(result.length>0){
                                //result为json数组例如 [{id:1,name:aa,password:123},...]
                                //每一个用户名就是一个div
                                var html="";//用于拼接结果
                                for(var i=0;i<result.length;i++){
                                    var user = result[i];
                                    html+="<div>"+user.name+"</div>";
                                }
                                //将html更新到show里面并显示出来
                                $(".show").html(html).show();
                            }
                        },
                        error:function () {
                            alert("没有成功获取数据");
                        }
                     });                 
```

## JSONP

ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加。

==ajax无法跨域请求，可以用多种请求 方法；jsonp可以跨域请求，但只能用get请求。==

==同源策略，只有协议+端口+域名 一模一样的才允许发AJAX请求==。
因为AJAX可以读取响应内容，浏览器必须保证同源策略。

### jQuery实现jsonp调用

```js
$.ajax({
             type: "get",
             async: false,
             url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
             dataType: "jsonp",
             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
             success: function(json){
                 alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
             },
             error: function(){
                 alert('fail');
             }
         });
```





[TOC]

