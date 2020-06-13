!(function () {
  const app = new Vue({
    el: '#app',
    data: {},

    methods: {
      btnClick() {
        // console.log(this.$children)
        // console.log(this.$children[0].name)
        console.log(this.$refs.aaa.name)
        this.$refs.aaa.showData()
      },
    },

    components: {
      cp: {
        template: '#cpn',
        data() {
          return {
            name: 'wo',
          }
        },

        methods: {
          showData() {
            console.log(this.name)
          },
        },
      },
    },
  })
})()
