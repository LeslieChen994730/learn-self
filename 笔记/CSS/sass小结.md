[TOC]

## 前言

SASS是一种CSS预处理器（css preprocessor）。它的基本思想是，用一种专门的编程语言，进行网页样式设计，然后再编译成正常的CSS文件。

SASS提供四个编译风格的选项：

*   nested：嵌套缩进的css代码，它是默认值。
*   expanded：没有缩进的、扩展的css代码。
*   compact：简洁格式的css代码。
*   compressed：压缩后的css代码。

## 导入文件

==@import==命令，用来导入外部文件。

　　@import "path/filename.scss";

如果导入的是.css文件，则等同于css的import命令。

默认情况是sass的@import，以下情况会用CSS的@import

*   如果文件的扩==展名是 .css==。
*   如果文件名==以 http:// 开头==。
*   如果==文件名是 url()==。
*   如果 @import 包含了任何==媒体查询（media queries）==

```scss
@import "foo.scss";
@import "foo"
//都会引入foo.scss文件
@import "rounded-corners", "text-shadow";
//引入多个文件
//如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线
在同一个目录不能同时存在带下划线和不带下划线的同名文件。 例如， _colors.scss 不能与 colors.scss 并存
```



**注释**

sass有两种注释方式，一种是标准的css注释方式/* */，==另一种则是//双斜杆形式的单行注释，不过这种单行注释不会被转译出来==。



## 变量

1.  **普通变量**：**$**
2.  **默认变量**：**！default**
3.  **插值变量**：**#｛$变量｝**
4.  **多值变量**：**list**:a,b,c,d,e,f         **map**:{a:b,c:d,e:f}
5.  **全局变量**：**！global**



## 嵌套

1.  **选择器嵌套**

    ```scss
    nav {
      a {
        color: red;
    
        header & {
          color:green;
        }
      }  
    }
    ```

    

2.  **属性嵌套**

    ```scss
    .box {
      border: {
       top: 1px solid red;
       bottom: 1px solid green;
      }
    }
    ```

    

3.  **伪类嵌套**

    ```scss
    .clearfix{
    &:before,
    &:after {
        content:"";
        display: table;
      }
    }
    ```

4.  **@at-root**:跳出根元素

    

## 混合宏（@mixin）

1.  #### 申明：==@mixin  名字｛｝==

    ```scss
    //一个参数时，可以指定默认值
    @mixin border-radius($radius:5px){//此时的5px为默认参数，传入其他值时覆盖该值
        -webkit-border-radius: $radius;
        border-radius: $radius;
    }
    //传2个参数
    @mixin center($width, $height){
    ...
    }
    //参数过多 ，一个特别的参数 （...）
    @mixin box-shadow($shadows...){
      @if length($shadows) >= 1 {
        -webkit-box-shadow: $shadows;
        box-shadow: $shadows;
      } @else {
        $shadows: 0 0 2px rgba(#000,.25);
        -webkit-box-shadow: $shadow;
        box-shadow: $shadow;
      }
    }
    ```

    

2.  #### 调用：==@include==

## 占位符%

==通过%声明的代码，如果不被@extend调用的话，不会产生任何代码==

```scss
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
```



## 继承（@extend）

1.  **普通继承**

    ```scss
    .btn {
      border: 1px solid #ccc;
      padding: 6px 10px;
      font-size: 14px;
    }
    
    .btn-primary {
      background-color: #f36;
      color: #fff;
      @extend .btn;
    }
    
    .btn-second {
      background-color: orange;
      color: #fff;
      @extend .btn;
    }
    ```

    

2.  **伪类继承**

    ```scss
    .a::hover{
        text-decration:through;
        font-size:2em;
    }
    
    第一种方式继承（继承所有到样式和伪类）
    .b{
        @extend .a;
    }
    
    第二种方式继承（只继承伪类里面的样式）
    .b{
         @extend .a::hover;
    }
    
    第三种继承（:hover）
    .b{
         @extend ::hover;
    }
    ```

    ```scss
    .a::hover,b::hover{
        text-decration:through;
        font-size:2em;
    }
    
    .a::hover,.b{
        text-decration:through;
        font-size:2em;
    }
    
    .a::hover,.a.b{
        text-decration:through;
        font-size:2em;
    }
    ```

    

## 条件控制

1.  ### @if @else @else if

    ```scss
    @mixin blockOrHidden($boolean:true) {
      @if $boolean {
          @debug "$boolean is #{$boolean}";
          display: block;
        }
      @else {
          @debug "$boolean is #{$boolean}";
          display: none;
        }
    }
    
    .block {
      @include blockOrHidden;
    }
    
    .hidden{
      @include blockOrHidden(false);
    }
    ```

    

2.  ### @for

    ```scss
    //2种方式
    @for $i from <start> through <end> //包括 end 这个值
    @for $i from <start> to <end> //不包括 end 这个数
    
    //$i 表示变量
    //start 表示起始值
    //end 表示结束值
    ```

    ```scss
    $grid-prefix: span !default;
    $grid-width: 60px !default;
    $grid-gutter: 20px !default;
    
    %grid {
      float: left;
      margin-left: $grid-gutter / 2;
      margin-right: $grid-gutter / 2;
    }
    @for $i from 1 through 12 {
      .#{$grid-prefix}#{$i}{
        width: $grid-width * $i + $grid-gutter * ($i - 1);
        @extend %grid;
      }
    }
    ```

    

3.  ### @each

    ```scss
    @each $value in <list>
    @each ($index,$value) in <map>
    
    //$value,$index 就是一个变量名，
    //<list> 是一个 SassScript 表达式，他将返回一个列表/map值。
    ```

4.  **三目判断**

    **==if($condition, $if_true, $if_false)==**

    

## 字符串函数

**（un）quote($string)**:删除、添加字符串中的引号

​	**str-length($string)**:长度

​	**str-insert($string,value,index)**插入字符串

​	**str-index($string,value)**查询字符串的位置

​	**str-slice($string,start,end)**截取一段字符串



## Math函数

![](图片\sass中的Math方法.png)

## 列表函数

![](图片\sass中的list函数.png)



## Map函数

![](图片\sass中的Map函数.png)



## RGB函数

![](图片\sass中的RGB函数.png)



## 处理函数

 **@debug   @warn   @error**   

```scss
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}
```

```scss
@mixin error($x){
  @if $x < 10 {
    width: $x * 10px;
  } @else if $x == 10 {
    width: $x;
  } @else {
    @error "你需要将#{$x}值设置在10以内的数";
  }

}

.test {
  @include error(15);
}
```



## 自定义函数

**@function name($变量名)｛@return  ~｝**



## 思维导图

<img src="图片\sass.jpg" style="zoom:200%;" />

[TOC]

