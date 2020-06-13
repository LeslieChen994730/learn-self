!(function () {
  // 1创建组件构造器 2注册组件 3使用组件

  // const cp = Vue.extend({
  //   template: ` <div>
  //       <h2>我是标题</h2>
  //       <p>我是内容1</p>
  //       <p>我是内容2</p>
  //     </div>`,
  // })

  //语法糖（全局组件注册）
  Vue.component('my-cp', {
    template: ` <div>
        <h2>我是标题</h2>
        <p>我是内容1</p>
        <p>我是内容2</p>
      </div>`,
  })
  const app = new Vue({
    el: '#app',
    data: {},

    methods: {},

    //语法糖（局部组件注册）
    comments: {
      cp: {
        template: ` <div>
            <h2>我是标题</h2>
            <p>我是内容1</p>
            <p>我是内容2</p>
          </div>`,
      },
    },
  })
})()
