<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider :data='sliders'
               :direction='direction'
               :loop='loop'
               :interval='interval'
               :pagination='pagination'
               v-else>
      <swiper-slide v-for="(item,index) in sliders"
                    :key="index">
        <a :href="item.linkUrl"
           class="slider-link">
          <img :src="item.picUrl"
               class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from 'base/slider'
import MeLoading from 'base/loading'
import { SwiperSlide } from 'vue-awesome-swiper'
import { sliderOptions } from './config'
import { getHomeSlider } from 'api/home'

export default {
  name: 'HomeSlider',

  data () {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    }
  },

  // 注册组件
  components: {
    MeSlider,
    SwiperSlide,
    MeLoading
  },

  // 计算属性
  computed: {

  },

  // 事件函数
  methods: {
    getSliders () {
      getHomeSlider().then(data => {
        this.sliders = data
      })
    }
  },

  // 挂载
  mounted () {

  },

  created () {
    this.getSliders()
  }

}
</script>

<style scoped lang="scss">
.slider-wrapper {
  height: 183px;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  width: 100%;
  height: 100%;
}
</style>
