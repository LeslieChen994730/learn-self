!(function () {
  // 1创建组件构造器 2注册组件 3使用组件

  //第一个组件
  const cp1 = Vue.extend({
    template: ` <div>
        <h2>我是标题1</h2>
        <p>我是内容1</p>
        <p>我是内容1</p>
      </div>`,
  })

  //第二个组件
  const cp2 = Vue.extend({
    template: ` <div>
        <h2>我是标题2</h2>
        <p>我是内容2</p>
        <p>我是内容2</p>
        <cp1></cp1> 
      </div>`,
    components: {
      cp1,
    },
  })

  const app = new Vue({
    el: '#app',
    data: {},

    methods: {},

    components: {
      // cp1,
      cp2,
    },
  })
})()
