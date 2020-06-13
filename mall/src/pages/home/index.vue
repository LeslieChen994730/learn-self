<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <header class="g-header-container">
      <home-header></home-header>
    </header>

    <!-- 组件 -->
    <me-scroll :data="recommends">
      <home-slider></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends"></home-recommend>
    </me-scroll>

    <!-- 返回顶部组件 -->
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import MeScroll from 'base/scroll'
import HomeHeader from './header'
import HomeSlider from './slider'
import HomeNav from './nav'
import HomeRecommend from './recommend'

export default {
  name: 'Home',

  data () {
    return {
      recommends: []
    }
  },

  // 注册组件
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend
  },

  // 计算属性
  computed: {},

  // 事件函数
  methods: {
    updateScroll () {},
    getRecommends (recommends) {
      this.recommends = recommends
    }
  },

  // 挂载
  mounted () {}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/mixins";
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
