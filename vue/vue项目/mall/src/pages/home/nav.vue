<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list-item" v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-list-item-link">
          <img :src="item.picUrl" class="nav-list-item-link-pic" />
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navItems } from "./config";

export default {
  name: "HomeNav",

  data() {
    return {
       
    };
  },

  //注册组件
  components: {},

  //计算属性
  computed: {},

  //事件函数
  methods: {},

  //挂载
  mounted() {},

  created(){
      this.navs=navItems;
  }
};
</script>

<style scoped lang="scss">
@import "~assets/scss/mixins";

.nav {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap;

    &-item {
      width: 20%;
      margin-bottom: 15px;

      &-link {
        @include flex-center(column);

        &-pic {
          width: 60%;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
