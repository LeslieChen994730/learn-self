<template>
  <div class="home">
    <!-- header -->
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <!-- 幻灯片slider -->
    <scroll :data="recommends"
            pullDown
            @pull-down='pullToRefresh'>
      <home-slider />
      <home-nav />
      <home-recommend @loaded="getRecommends" />
    </scroll>
    <div class="g-backtop-container"></div>
    <router-view />
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import scroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'

export default {
  name: 'Home',

  components: {
    HomeHeader,
    HomeSlider,
    scroll,
    HomeNav,
    HomeRecommend
  },

  data () {
    return {
      recommends: []
    }
  },

  methods: {
    updateScroll () { },

    getRecommends (recommends) {
      this.recommends = recommends
    },

    pullToRefresh (end) {
      setTimeout(() => {
        console.log('下拉刷新')
        end()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
