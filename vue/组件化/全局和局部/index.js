!(function () {
  const cp = Vue.extend({
    template: `
    <div>
    <h2>我是标题</h2>
    <p>我是p1</p>
    <p>我是p2</p>
    </div>`,
  })

  //全局组件
  // Vue.component('my-cp', cp)

  const app = new Vue({
    el: '#app',
    data: {},

    methods: {},

    //局部组件祖册
    comments: {
      cp,
    },
  })
})()
