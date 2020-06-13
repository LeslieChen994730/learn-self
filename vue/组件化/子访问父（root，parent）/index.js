!(function () {
  const app = new Vue({
    el: '#app',
    data: {
      name: 'wofsfsf',
    },

    methods: {
      show() {
        console.log(this.name)
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
          btnClick() {
            console.log(this.$parent)
            this.$parent.show()
            console.log(this.$root)
            this.$root.show()
          },
        },
      },
    },
  })
})()
