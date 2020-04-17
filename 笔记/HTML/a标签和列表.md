[TOC]

***



#### a标签

1. <b>锚点用法(#,html5不支持)</b>

    ```html
    第一种：<a href="#app">跳转</a>
    <p id="app">锚点</p>
    
    第二种：
    <a href="#app">跳转</a>
    <a href="" name="app">跳转</a>
    这种方式只能用a标签的name属性定义才生效
    ```

2. <b>target属性</b>

    ​    [_blank]()：在新窗口中打开被链接文档。
    　[_self]()：默认。在相同的框架中打开被链接文档。
    　_parent：在父框架集中打开被链接文档。
    　_top：在整个窗口中打开被链接文档。
    　framename：在指定的框架中打开被链接文档。

    

3. <b>空链接和死链接</b>

    ```html
    <a href="#">...</a>  回到顶端,不刷新页面
    <a href="#">...</a>  刷新页面
    <a href="javascript:viod(0)">...</a>  不跳转
    ```



#### 列表

![](C:\Users\chenz\Desktop\git\笔记\HTML\图片\列表.jpg)



#### 转义字符和小标签

1. 小标签:

    ```html
     <b>  <i>  <em>   <strong>   <sup>   <sub>   <ins>   <pre>
    ```

2. 转义字符:

    [https://tool.oschina.net/commons?type=2 ]()

