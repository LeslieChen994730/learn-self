[TOC]

### （3）CSS 加载方式有几种？

通过Link引用CSS，@import ，  style内联



### （4）页面导入样式时，使用link和@import有什么区别？

1.  link属于XHTML标签，除了加载CSS外，还能用于定义RSS
2.  @import是CSS提供的，只能用于加载CSS
3.  页面被加载时，link会同时被加载；而@import引用的CSS会等到页面被加载完成后再加载
4.  link是XHTML标签，没有兼容问题；而@import只有在IE5以上才能被识别



### （2）简述 src 和 href 的区别？

1.  src用于替换当前元素，指向外部资源的位置，==会暂停其他资源的下载和处理==
2.  href用于在当前文档和引用资源之间建立联系。==并行下载资源并且不会停止对当前文档的处理==



### （2）优雅降级和渐进增强

1.  一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。（向上兼容）
2.  一开始就构建站点的完整功能，然后针对浏览器测试和修复。（向下兼容）



### （2）伪类和伪元素的区别？

1.  css伪类用于向某些选择器添加特殊效果。（child  type  a标签，表单控件）
2.  伪元素用于创建一些不在文档树中的元素，并且为他添加样式。（before，after，frist、letter/line  selection）



### （2）什么是 CSS 继承？哪些属性能继承，哪些不能？

1.  可以继承：字体系列属性，文本系列属性，列表，表格。
2.  不能继承：display，文本，盒模型，背景，定位。



### （1，3）请解释什么是雪碧图（css sprites），以及如何实现？

雪碧图是把多张图片整合到一张上的图片。

1.  使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。
2.  每张图片都有相应的 CSS 类，该类定义了`background-image`、`background-position`和`background-size`属性。
3.  使用图片时，将相应的类添加到你的元素中。



### （3）圣杯布局和双飞翼布局

1.  使用float布局
2.  使用margin负值，以便和中间内容横向重叠
3.  防止中间内容被覆盖，用padding和margin



### （2，4）BFC

block format context 块级格式化上下文

 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素。

1、float的值不是none。
2、position的值不是static或者relative。
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible



### （3）CSS Reset 是什么?CSS 预编译器是什么?后编译器(PostCSS)是什么?

1.  重置浏览器标签的样式表
2.  css增强型语言，CSS 增加了一些编程的特性（maxins，函数，变量，嵌套）
3.  是一个使用JavaScript插件来转换CSS的工具。Autoprefixer



### （2）盒模型？

CSS盒子模型就是在网页设计中经常用到的一种思维模型。规定了元素是如何显示元素间相互关系。

盒模型的组成：content（内容区）+padding（填充区）+border（边框区）+margin（外边界区）



### （9）哪些操作会引起页面回流(Reflow)？

① 改变窗口大小

② font-size大小改变

③ 增加或者移除样式表

④ 内容变化（input中输入文字会导致）

⑤ 激活CSS伪类（:hover）

⑥ 操作class属性，新增或者减少

⑦ js操作dom

⑧ offset相关属性计算

⑨ 设置style的值



