<template>
  <mine class="header">
    <i class="iconfont icon-scan" slot="left"></i>
    <!-- <div slot="center"></div> -->
    <input type="text" slot="center" class="input" placeholder="请输入要搜索的内容" />
    <i class="iconfont icon-msg" slot="right"></i>
  </mine>
</template>

<script>
import mine from "base/navbar";
export default {
  name: "HomeHeader",

  data() {
    return {};
  },

  //注册组件
  components: {
    mine
  },

  //计算属性
  computed: {},

  //事件函数
  methods: {},

  //挂载
  mounted() {}
};
</script>

<style scoped lang="scss">
@import "~assets/scss/mixins";
.header {
  &.mine-navbar {
    background-color: transparent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }

  input {
    display: block;
    height: 25px;
    width: 90%;
    border-radius: 12px;
    text-indent: 10px;
    margin: 0 auto;
    background-color: rgba($color: #fff, $alpha: .5);

    &::placeholder {
      text-indent: 10px;
    }
  }
}
</style>
