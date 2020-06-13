!(function () {
  const app = new Vue({
    el: '#app',
    data: {
      movies: ['海王', '陈', 'sdasf'],
      message: '我是父组件信息',
    },

    components: {
      cp: {
        data() {
          return {}
        },
        template: '#cpn',
        props: {
          movieInfo: Array,
          message: String,
        },
      },
    },
  })
})()
