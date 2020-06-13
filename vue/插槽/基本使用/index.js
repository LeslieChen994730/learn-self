!(function () {
  const app = new Vue({
    el: '#app',
    data: {},

    methods: {},

    //语法糖（局部组件注册）
    components: {
      cp: {
        template: '#cpn',
      },
    },
  })
})()
