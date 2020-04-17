<template>
  <div class="mine-loading" :class="{'mine-loading-inline':inline}">
    <span class="mine-loading-indicatior" v-if="indicator==='on'">
      <slot>
        <img src="./loading.gif" alt />
        <span class="mine-loading-text" v-if="loadingText">{{loadingText}}</span>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MeLoading",

  props: {
    indicator: {
      type: String,
      default: "on",
      validator(value) {
        return ["on", "off"].indexOf(value) > -1;
      }
    },
    text: {
      type: String,
      default: "加载中..."
    },

    inline: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loadingText: this.text
    };
  },

  watch: {
    text(text) {
      this.loadingText = text;
    }
  },

  //注册组件
  components: {},

  //计算属性
  computed: {},

  //事件函数
  methods: {
    setText(text) {
      this.text = text;
    }
  },

  //挂载
  mounted() {}
};
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

    .mine-loading-text {
      margin-top: 0;
      margin-left: 6px;
    }
  }
}

.mine-loading-text {
  margin-top: 6px;
}
</style>
