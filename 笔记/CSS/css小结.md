[TOC]

***

#### 选择器

1. **伪元素选择器(::)**

    | 选择器               | 描述                                          |
    | :------------------- | --------------------------------------------- |
    | **::first-letter**   | 文本的第一个单词或字（如中文、日文、 韩文等） |
    | **::first-line**     | 文本第一行                                    |
    | ::**selection**      | 可改变选中文本的样式                          |
    | **::before/::after** | 前后                                          |

    

2. **伪类选择器**(:)

    

    | 选择器        | 属性                               |
    | ------------- | :--------------------------------- |
    | :**link**     | 超链接点击之前(**仅超链接适用**)   |
    | **:visited**  | 链接被访问过之后(**仅超链接适用**) |
    | :**hover**    | 悬停                               |
    | **:active**   | 激活                               |
    | :**focus**    | 获得焦点(**标签,输入框**)          |
    |               | ==**UI元素状态伪类**==             |
    | **:enabled**  | 可用的                             |
    | **:disabled** | 不可用的                           |
    | :**checked**  | 选中的                             |

    ==在css中，这四种状态**必须按照固定的顺序写**：==

    ```html
    a:link 、a:visited 、a:hover 、a:active
    ```

    

3. **属性选择器**([])

![](C:\Users\chenz\Desktop\git\笔记\CSS\图片\属性选择器.png)



   4.**结构类选择器**

1. **child**

    | child选择器             | ==通过父元素找到对应的子元素，若该子元素为element标签，则为其设置样式== |
    | ----------------------- | :----------------------------------------------------------: |
    | **el:frist-child**      |                     其父元素的首个子元素                     |
    | **el:last-child**       |                   其父元素的最后一个子元素                   |
    | **el:nth-child()**      |                    其父元素的第n个子元素                     |
    | **el:nth-last-child()** |                  其父元素的倒数第几个子元素                  |
    | **el:only-child**       |                   其父元素的唯一一个子元素                   |

    

2. **type**

    | type选择器                     |                ==通过父元素找到对应的子元素==                |
    | :----------------------------- | :----------------------------------------------------------: |
    | **element:first-of-type**      |           element的父元素的首个子元素为element元素           |
    | **element:last-of-type**       |         element的父元素的最后一个子元素为element元素         |
    | **element:nth-of-type()**      |          element的父元素的第n个子元素为element元素           |
    | **element:nth-last-of-type()** |        element的父元素的倒数第n个子元素为element元素         |
    | **element:only-of-type**       | element的父元素仅有唯一的element元素，可以有其他非element元素 |

    

3. **其他**

    | 其他选择器        | 描述                                     |
    | ----------------- | ---------------------------------------- |
    | **element:empty** | 该元素没有任何子元素以及文本             |
    | **element:not()** | 指定除了选定的选择器或元素之外的其他元素 |




##### **选择器实例**

1. **通用兄弟元素选择器**(~)

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>Document</title>
    	<style type="text/css">
    		section > div ~ article {
    			color: #f00;
    		}
    	</style>
    </head>
    <body>
    	<section>
    		<article>section下的article</article>
    		<div>
    			<article>div下的article</article>
    		</div>
    		<article>section下的article</article>
    		<article>section下的article</article>
    	</section>
    </body>
    </html>
    ```

    

2. **否定选择器**(:not)

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
    p
    {
    color:#000000;
    }
    :not(p)
    {
    color:#ff0000;
    }
    </style>
    </head>
    <body>
    
    <h1>这是标题</h1>
    
    <p>这是一个段落。</p>
    
    <p>这是另一个段落。</p>
    
    <div>这是 div 元素中的文本。</div>
    
    <br>
    
    <a href="http://www.w3school.com.cn" target="_blank">访问 W3School ！</a>
    
    </body>
    </html>
    
    ```

    

3. **空选择器**(:empty)

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <style> 
    p:empty
    {
    width:100px;
    height:20px;
    background:#ff0000;
    }
    </style>
    </head>
    <body>
    
    <h1>这是标题</h1>
    <p>第一个段落。</p>
    <p></p>
    <p>第三个段落。</p>
    <p>第四个段落。</p>
    <p>第五个段落。</p>
    
    </body>
    </html>
    
    ```

    



#### 权值

![](C:\Users\chenz\Desktop\git\笔记\CSS\图片\权值.png)

==内联样式为直接写在元素上的style。权值最高==



#### 文本和字体

1. **文本阴影**

    ![](C:\Users\chenz\Desktop\笔记\CSS\图片\文本阴影.png)

    **实例**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    h1 {
    text-shadow:0 0 3px #FF0000;
    }
    </style>
    </head>
    <body>
    
    <h1>霓虹灯效果的文本阴影！</h1>
    
    </body>
    </html>
    ```

    

2. **换行**

    | **文本属性**       | **值**                         |
    | ------------------ | ------------------------------ |
    | **white-space**    | normal,==pre==,nowrap,inherit  |
    | **word-break**     | normal,break-all,keep-all      |
    | **word-wrap**      | normal,break-word              |
    | **word-spacing**   | 设置单词间距                   |
    | **letter-spacing** | 设置字符间距                   |
    | **text-overflow**  | ==ellipisis,string('>'),clip== |

    

3. **自定义字体**

    ==**@font-face=={**

    ​		==font-family==:"";

    ​		==src==:url(...),url(...),url(...);

    **}**

    

4. **字体样式和文本样式**

    ```css
    text-indent            text-transform(capitalize,uppercase,lowercase,none)    vartical-align(baseline,middle,sub,sup,top,bottom)    	
    ```

    

##### 文本和字体实例

1. **单行文本溢出**

    ```css
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    ```

2. **多行文本溢出**

    ```css
      display: -webkit-box;
      white-space:normal !impottant;  
      overflow: hidden;  
      text-overflow:ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    	word-wrap:break-word;
    ```



#### 盒阴影和圆角

1. ==**垂直方向上,两个相邻元素都设置外边距(margin-bottom和margin-top),会出现重合现象,外边距大的为准**==

2. **圆角率**:

    ```html
    border-radius={
    	border-top-left-radius;
        border-top-right-radius;
        border-bottom-right-radius;
    	border-bottom-left-radius;
    	
    	按顺时针来进行:左上,右上,右下,左下;
    	一个值:全部;
    	两个值:对角线(左上,右上);
    	三个值:顺时针(左上,右上,右下);
    }
    ```

    

3. **盒阴影:**

    ```html
    box-shadow: h-shadow v-shadow blur spread color inset;
    ```

    ![](C:\Users\chenz\Desktop\git\笔记\CSS\图片\盒阴影.png)

#### 背景与渐变

1. **背景**

    ```html
    background-clip:border-box,content-box,padding-box;  (从何处开始裁剪背景)
    background-origin:border-box,content-box,padding-box; (相对于内容框来定位背景图像)
    background-size:cover,content,px,%
    ```

    

2. **渐变**

    <img src="C:\Users\chenz\Desktop\git\笔记\CSS\图片\css渐变.jpg" style="zoom:200%;" />



**渐变实例**

```html
线性渐变
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
#grad1 {
    height: 200px;
    background-color: red; /* 不支持线性的时候显示 */
    background-image: linear-gradient(to bottom right, red , yellow);
}
</style>
</head>
<body>

<h3>线性渐变 - 对角</h3>
<p>从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到黄色：</p>

<div id="grad1"></div>

<p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>

</body>
</html>

泾变实例

background: radial-gradient(circle farthest-side at top left,#f00 0,#ff0 100%);

重复泾变
background: repeating-radial-gradient(circle at center,#f00 0,#f00 10%,#ff0 10%,#ff0 20%);
```



3.**IE滤镜**

```html
filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ff0000'); /* IE6,IE7 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ff0000')"; /* IE8 */
```



#### 过渡(transition)

|              属性              |                      值                      |   description   |
| :----------------------------: | :------------------------------------------: | :-------------: |
|    **transition-property**     |                  all,属性名                  | 过渡CSS属性名称 |
|    **transition-duration**     |                   time(ms)                   |  过渡持续时间   |
| **transition-timing-function** | linear,==ease==,ease-in,ease-out,ease-in-out |    动画函数     |
|      **transition-delay**      |                   time(ms)                   |    延迟时间     |

==**cubic-bezier 函数**:cubic-bezier(*n*,*n*,*n*,*n*)是指0-1之间的自定义函数(贝赛尔曲线)==



#### 动画(animation)

![](C:\Users\chenz\Desktop\git\笔记\CSS\图片\css3动画.png)

**步骤**

1.  **定义某个元素的animation属性**:(animation:==name== ==duration== function delay count direction)

2.  **==@keyframes name==** {

    ​		==from==(0%){css样式}

    ​		a%{css样式}

    ​		b%{css样式}

    ​		............

    ​		==to(100%)=={css样式}

    }

    

**实例**

```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:red;
position:relative;
animation:mymove 5s 2s  infinite;
-webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
}

@keyframes mymove
{
from {left:0px;background:red;height:100px;width:100px}
to {left:200px;background:green;height:10px;width:10px}
}
    
</style>
</head>
<body>

```



#### 转换(transform)

<img src="C:\Users\chenz\Desktop\git\笔记\CSS\图片\transform.jpg" style="zoom:200%;" />

#### 矩阵(matrix)

![](C:\Users\chenz\Desktop\git\笔记\CSS\图片\css3矩阵.png)

**常见几种变换矩阵**

```html
偏移:matrix(1,0,0,1,x,y)=>translate(x,y)
缩放:matrix(sx,0,0,sy,0,0)=>scale(sx,sy)
旋转:matrix(cos0,sin0,-sin0,cos0,0,0)=>rotate(0deg)
拉伸:matrix(1,tan0,tan0,1,0,0)=>skew(0deg,0deg)
```

**镜像对称**:==matrix((1-k^2^)/(1+k^2^),2k/(1+k^2^),2k/(1+k^2^),(k^2^-1)/(1+k^2^),0,0)==



#### 汉克狗作业



[TOC]