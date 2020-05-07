<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination"
         v-if="pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script>
// 引入swiper组件
import { swiper } from 'vue-awesome-swiper'

export default {
  name: 'MeSlider',

  data () {
    return {
      swiperOption: {
        watchOverflow: true, // 只有一个slider,会失效
        direction: this.direction,
        autoplay: this.interval
          ? {
            delay: this.interval,
            disableOnInteraction: false
          }
          : false,
        sliderPerView: 1, // 设置slider容器能够同时显示的slider数量
        loop: this.loop,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  },

  props: {
    // 方向
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      }
    },

    // 时长
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value >= 0
      }
    },

    // loop循环
    loop: {
      type: Boolean,
      default: true
    },

    // pagination
    pagination: {
      type: Boolean,
      default: true
    }
  },

  // 注册组件
  components: {
    swiper
  }

}
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
