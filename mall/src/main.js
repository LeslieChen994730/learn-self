// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'assets/scss/index.scss'
import 'swiper/css/swiper.css'
import vueLazyload from 'vue-lazyload'

Vue.use(vueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
