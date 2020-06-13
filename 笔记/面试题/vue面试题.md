[TOC]

### （5）什么是 vue 生命周期？及作用？

Vue中实例或者组件从创建到消灭中间经过的一系列过程，从一个组件**创建、数据初始化、挂载、更新、销毁**，这就是一个组件所谓的生命周期。



### （1）<keep-alive></keep-alive>的作用是什么?

包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染。



### （2）怎么定义vue-router的动态路由以及如何获取传过来的动态参数？

1.  在router目录下的index.js文件中，对path属性加上/:id。
2.  使用router对象的params.id。



### （4）vue-router有哪几种导航钩子？ 

1.  前置导航：router.beforeEach(to,from,next)  跳转前进行判断拦截。
2.  后置钩子：router.afterEach(to,from) 
3.  组件内钩子：beforeRotuerEnter   beforeRotuerupdate  beforeRotuerLeave      
4.  单独路由独享钩子：==beforeEnter==



### （2）$route 和 $router 的区别？

1.  router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象。
2.  route相当于当前正在跳转的路由对象。可以从里面获取name,path,params,query等。



### （2）vue-loader是什么？使用它的用途有哪些？

解析.vue文件的一个加载器。
用途：js可以写es6、style样式可以scss或less、template可以加jade等



### （5）SPA首屏加载慢如何解决？

1.  路由懒加载
2.  cdn加速
3.  gzip压缩
4.  异步加载组件
5.  服务端渲染



### （3）自定义指令详解

1.  vue.directive()和directives:{}
2.  钩子函数：inserted，bind，update，componentUpdated，unbind
3.  钩子函数参数：el，binding（name，value），vnode



### （1）Vue-router跳转和location.href有什么区别？

1、使用location.href='/url'来跳转，简单方便，但是刷新了页面。

2、使用history.pushState('/url')，无刷新页面，静态跳转。



### （1）Vue.set视图更新？

$set和Vue.set(target,key,value)



### （3）assets和static的区别?

1.  assets和static两个都是存放静态资源文件。
2.  assets中存放的静态资源文件在项目打包时会将assets中放置的静态资源文件进行打包上传。
3.  static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。



### （6）vue常用的修饰符

==.stop   .prevent   .capture  .self  .one==   .passive    .enter  .tab  .delete  



### （3）数组更新检测

1.  能检测的方法：push，pop，shift，unshift ，splice，sort，reserve；
2.  不能检测：利用索引直接设置一个项，修改数组的长度时；
3.  .==$set(target,index,value)==



### （2）RouterLink在IE和Firefox中不起作用（路由不跳转）的问题

1.  用a标签包裹
2.  ==使用`<button>`标签和Router.navigate方法==



### （4）请说下封装 vue 组件的过程?

1.使用 vue.extend 方法创建一个组件;

2.然后使用 vue.component 方法注册组件；

3.子组件需要数据，可以在 props 中接受定义;

4.子组件修改好数据后，采用 emit 传递给父组件;



### （3）vuex是什么?怎么使用?哪种功能场景使用它?

1.  Vuex是vue框架中状态管理工具。
2.  只用来读取的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的事物； 异步逻辑应该封装在action中。
    在main.js引入store，注入。新建了一个目录store，….. export 。
3.  场景：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车。



### （7）axios的特点有哪些？

1.从浏览器中创建XMLHttpRequests
2.node.js创建http请求
3.支持Promise API
4.拦截请求和响应
5.转换请求数据和响应数据
6.取消请求
7.自动换成json



### （2）Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中?

1.  简单的页面放在methods里面即可
2.  使用vuex或者重要的数据，放在vuex中，容易维护，代码清晰,并且调用简单。



### （7）vue登录携带token

1.  第一次登陆，调用后端接口，发送用户名和密码
2.  后端收到请求，对用户名和密码进行验证，成功就返回token；
3.  前端拿到token进行本地存储localStorage和vuex，并跳转路由；
4.  每次跳转路由都通过全局导航守卫判断localStorage是否有token，有就验证，成功就跳转，没有就跳转到登录页面；
5.  每次向后端请求数据，通过axiso拦截器向请求头中添加token；
6.  后端判断有无token，有就验证，成功就返回数据；没有或者token过期就返回状态码401；
7.  前端收到401，清除本地token，并跳转到登录页面；



