<template>
  <swiper :options='swiperOption'
          ref="swiper">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <!-- 滚动条 -->
    <div class="swiper-scrollbar"
         v-if="scrollbar"
         slot='scrollbar'></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'MeScroll',

  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        }
      }
    }
  },

  // 注册组件
  components: {
    Swiper,
    SwiperSlide
  },

  // pros属性定义
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    }
  },

  // 计算属性
  computed: {

  },

  // 事件函数
  methods: {
    update () {
      this.$refs.swiper && this.$refs.swiper.updateSwiper()
      console.log(this.$refs.swiper)
    }
  },

  // 挂载
  mounted () {

  },

  watch: {
    data () {
      this.update()
    }
  }

}
</script>

<style scoped lang="scss">
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}
</style>
