<template>

  <me-navbar class="header">
    <i class="iconfont icon-scan"
       slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg"
       slot="right"></i>
  </me-navbar>

</template>

<script>
import MeNavbar from 'base/navbar'

export default {
  name: 'HomeHeader',

  data () {
    return {

    }
  },

  // 注册组件
  components: {
    MeNavbar
  },

  // 计算属性
  computed: {

  },

  // 事件函数
  methods: {

  },

  // 挂载
  mounted () {

  }

}
</script>

<style scoped lang="scss">
@import "~assets/scss/mixins";

.header {
  &.mine-navbar {
    background-color: transparent;
    // background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
