<template>
  <div id="app">
    <h2>{{messsge}}</h2>
    <!-- 获取state数据 -->
    <h1>{{$store.state.counter}}</h1>

    <!-- 获取getters数据 -->
    <h1>{{$store.getters.getMore20(20)}}</h1>

    <!-- 获取mutations数据 -->
    <h1>{{$store.commit('mutation里的方法名','参数')}}</h1>
    <h1>{{$store.commit({
      type:'mutation里的方法名',
      name:'cjen'
      })}}</h1>

      <!-- 获取actions数据  -->
 <h1>{{$store.dispatch('mutation里的方法名','参数')}}</h1>
    <button @click='btnclick'>点击我</button>
    <span>{{$store.state.counter}}</span>
    <my-tabbar></my-tabbar>
    <router-view />
  </div>
</template>
<script>
import MyTabbar from './components/tabbar/myTabbar'
export default {
  name: 'App',
  data () {
    return {
      messsge: 'chen',
      count: 0
    }
  },

  methods: {
    btnclick () {
      this.$store.dispatch('UpdateInfo', '我是挂载').then(res => {
        alert(1111)
      })
    }
  },

  components: {
    MyTabbar
  }
}
</script>

<style>
@import "./assets/css/reset.css";
</style>
