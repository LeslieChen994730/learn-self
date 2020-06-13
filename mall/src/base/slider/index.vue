<template>
  <swiper :options='swiperOption'>
    <slot></slot>
    <div class="swiper-pagination"
         v-if="pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'

export default {
  name: 'MeSlider',

  data () {
    return {
      swiperOption: {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        sliderPerView: 1,
        loop: this.loop,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  },

  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value >= 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },

  // 注册组件
  components: {
    Swiper
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
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
