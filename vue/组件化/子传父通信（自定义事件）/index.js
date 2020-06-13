!(function () {
  const app = new Vue({
    el: '#app',
    data: {
      // movies: ['海王', '陈', 'sdasf'],
      // message: '我是父组件信息',
    },

    components: {
      cp: {
        template: '#cpn',
        data() {
          return {
            categories: [
              { id: 'aaa', name: '热门推荐' },
              { id: 'bbb', name: '手机数码' },
              { id: 'ccc', name: '家电家用' },
              { id: 'ddd', name: '电脑办公' },
            ],
          }
        },
        props: {
          movieInfo: Array,
          message: String,
        },
        methods: {
          itemClick(item) {
            // console.log(item)
            this.$emit('aaa', item)
          },
        },
      },
    },

    methods: {
      bbb(data) {
        console.log(data)
      },
    },
  })
})()
