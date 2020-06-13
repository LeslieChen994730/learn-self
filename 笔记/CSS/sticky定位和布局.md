[TOC]

***

#### sticky定位

1.  **定义**:

    粘性定位可以被认为是相对定位（relative）和固定定位（fixed）的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
    也就是说sticky会让元素在页面滚动时如同在正常流中（relative定位效果），但当滚动到特定位置时就会固定在屏幕上如同 fixed ，这个特定位置就是指定 的top, right, bottom 或 left 四个阈值其中之一.

    

2.  **实例**

    ```html
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                *{margin: 0;padding: 0;}
            </style>
        </head>
    <body>
        <div style="height:300px;background:skyblue;">111111</div>
        <div style="position:sticky;top:0px;height:30px;background:pink;">没错，我就是sticky</div>
        <div style="height:300px;background:skyblue;">2222222</div>
        <div style="height:300px;background:skyblue;">3333333</div>
        <div style="height:300px;background:skyblue;">444444444</div>
        <div style="height:300px;background:skyblue;">55555555555</div>
    </body>
    </html>
    ```

    

#### css分类属性

| 属性           |                          值                          |                      description                       |
| :------------- | :--------------------------------------------------: | :----------------------------------------------------: |
| **clear**      |             left,right,both,none,inherit             |        设置一个元素的侧面是否允许其他的浮动元素        |
| **cursor**     |             crosshair,pointer,wait,help              |          规定当指向某元素之上时显示的指针类型          |
| **display**    | block,inline,inline-block,list-item,table,table-cell |                      如何显示元素                      |
| **float**      |               left,right,none,inherit                |                 定义元素在哪个方向浮动                 |
| **position**   |                  AB,FI,RE,ST,ST,IN                   | 把元素放置到一个静态的、相对的、绝对的、或固定的位置中 |
| **visibility** |                visible,hidden,inherit                |                设置元素是否可见或不可见                |



#### 清除浮动

1.  浮动元素后面使用一个空元素(div):**clear:both**

2.  给浮动元素的父容器添加:**overflow:hidden**

3.  after伪类:

    ```css
    ::after{
    	display:block;
    	content:'';
    	visibility:hidden;
    	height:0;
    	clear:both;
    }
    ```

    

#### table布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS 布局</title>
</head>
<style>
.container{
    height:200px;
    width: 200px;
}
.left{
    background-color: red
}
.right{
    background-color: green
}
</style>
<body>
    <table class=container>
        <tbody>
            <tr>
                <td class=left> 左 </td>
                <td class=right> 右 </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```



#### flexbox布局

![](.\图片\flex.jpg)



#### 响应式布局（栅格系统（flex））

1.  **尺寸详情和移动端Meta标签**

    |     xs      |   sm   |   md   |   lg   |     xl      |
    | :---------: | :----: | :----: | :----: | :---------: |
    | extra small | small  | medium | large  | extra large |
    |   ＜576px   | ≥576px | ≥768px | ≥992px |   ≥1200px   |

    

    **meta标签**

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    ```

    

2.  **媒体查询（@media）**

    ```css
    @media screen and (max-width: 980px) {
      #head { … }
      #content { … }
      #footer { … }
    }
    
    媒体监听引入对应的css
    <link rel="stylesheet" type="text/css" 
    media="screen and (min-width: 400px) and (max-device-width: 600px)" href="smallScreen.css"/>
    ```

    

3.  **栅格系统（grid）**

    1.  栅格系统的核心，规定了列的宽度，位置和间隔。而在此之前，我们需要规定所有的盒子模型为 `border-box` 类型，这样做的原因是避免繁琐的计算和更简单的分列。

        

    2.  **思维导图**

        ![](图片\栅格系统.jpg)

    3.  **实例**

        ```html
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>栅格系统html结构</title>
        </head>
        <body>
        
            <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <!-- col -->
                        <div class="col-4 d-md-none"></div>
                        <div class="col-8 col-md-3"></div>
                        <div class="col-md-9 d-none d-md-block"></div>
                    </div>
                </div>
        </body>
        </html>
        ```

        

#### H5布局

1.  新元素用于替换之前的div元素，保持**兼容性做法**

    ```html
    header,nav,section,aside,article,footer{display:block};
    ```

    

2.  **新元素**

    ```html
    <header>  <nav>  <section>  <article>  <aside>  <footer>  <figure>  <figurecaption>
    ```

    

3.  **实例**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>H5布局结构</title>
    </head>
    <body>
    	<header>
    		<nav></nav>
    	</header>
    	<aside>
    		<ul>
    			<li></li>
    		</ul>
    	</aside>
    	<section>
    		<article></article>
    	</section>
    	<section>
    		<div></div>
    	</section>
    	<section>
    		<figure>
    			<img src="">
    			<figcaption></figcaption>
    		</figure>
    	</section>
    	<footer></footer>
    </body>
    </html>
    ```

    

#### 圣杯布局

1.  三列布局，中间宽度自适应，两边定宽，==中间栏要优先展示渲染==

2.  **实例**

    ```html
    DOM结构，center要优先展示和渲染
    <div id="header"></div>
    <div id="container">
      <div id="center" class="column"></div>
      <div id="left" class="column"></div>
      <div id="right" class="column"></div>
    </div>
    <div id="footer"></div>
    ```

    ```css
    body {
      min-width: 550px;
    }
    
    #container {
      padding-left: 200px; 
      padding-right: 150px;
    }
    
    #container .column {
      float: left;
    }
    
    #center {
      width: 100%;
    }
    
    #left {
      width: 200px; 
      margin-left: -100%;
      position: relative;
      right: 200px;
    }
    
    #right {
      width: 150px; 
      margin-right: -150px; 
    }
    
    #footer {
      clear: both;
    }
    ```

    

#### 双飞翼布局

1.  双飞翼布局的DOM结构与圣杯布局的区别是用`container`仅包裹住`center`，另外将`.column`类从`center`移至`container`上。

2.  **实例*

    ```html
    <body>
      <div id="header"></div>
      <div id="container" class="column">
        <div id="center"></div>
      </div>
      <div id="left" class="column"></div>
      <div id="right" class="column"></div>
      <div id="footer"></div>
    <body>
    ```

    ```css
    body {
      min-width: 500px;
    }
    
    #container {
      width: 100%;
    }
    
    .column {
      float: left;
    }
            
    #center {
      margin-left: 200px;
      margin-right: 150px;
    }
            
    #left {
      width: 200px; 
      margin-left: -100%;
    }
            
    #right {
      width: 150px; 
      margin-left: -150px;
    }
            
    #footer {
      clear: both;
    }
    ```




#### 居中总结

##### 绝对定位（absolute）（3种）

```css
.father{position：relative};

.son{position：absolute;
		top:50%;
		left:50%;
        margin-top:-px;
		margin-left:-px;
    	transform:translate(-50%,-50%);
    	top:0;left:0;right:0;bottom:0;margin:auto;
};
```

##### 	flex布局（2种）

```css
.father{
	display:flex;
    just-content:center;
    align-items:center;
}

.fater{
    display:flex;
}

.son{
    margin:auto;
}
```

##### 		table布局

```css
.father{
	display:table-cell;
    vertical-aligin:middle;
}
.son{
    display:inline-block;
}
```



[TOC]