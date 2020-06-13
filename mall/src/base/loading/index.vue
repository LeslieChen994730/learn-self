<template>
  <div class="mine-loading"
       :class="{'mine-loading-inline':inline}">
    <span class="mine-loading-indicator"
          v-if="indicator==='on'">
      <slot><img src="./loading.gif"
             alt="">
      </slot>
    </span>
    <span class="mine-loading-text"
          v-if="text">{{text}}</span>
  </div>
</template>

<script>

export default {
  name: 'MeLoading',

  data () {
    return {

    }
  },

  props: {
    indicator: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中。。。'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },

  // 注册组件
  components: {

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
.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  @include flex-center(column);

  &.mine-loading-inline {
    flex-direction: row;

    .mine-loading-indicator ~ .mine-loading-text {
      margin-top: 0px;
      margin-left: 6px;
    }
  }
}

.mine-loading-indicator ~ .mine-loading-text {
  margin-top: 6px;
}
</style>
