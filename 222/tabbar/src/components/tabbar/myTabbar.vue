<template>
  <div class="MyTabbar">
    <tab-bar>gjhgjg</tab-bar>
  </div>
</template>

<script>
import TabBar from './index'

export default {
  name: 'MyTabbar',

  data () {
    return {

    }
  },

  // 注册组件
  components: {
    TabBar
  },

  // pros属性定义
  props: {

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

<style scoped>

.MyTabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
