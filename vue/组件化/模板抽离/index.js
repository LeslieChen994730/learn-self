!(function () {
  // 1创建组件构造器 2注册组件 3使用组件

  // const cp = Vue.extend({
  //   template: ` <div>
  //       <h2>我是标题</h2>
  //       <p>我是内容1</p>
  //       <p>我是内容2</p>
  //     </div>`,
  // })

  //q全局组件
  Vue.component('my-cp', {
    template: '#cpn',
    data() {
      return {
        title: '我是标题',
        p1: '我是p1',
        p2: '我是p2',
      }
    },
  })
  const app = new Vue({
    el: '#app',
    data: {},

    methods: {},

    components: {
      // myCp: my - cp,
    },
  })
})()
