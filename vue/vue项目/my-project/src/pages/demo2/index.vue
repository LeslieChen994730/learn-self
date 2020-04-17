<template>
  <div>
    <div>选项数据</div>
    <div>------------------------------------------</div>
    <div>{{title}}</div>
    <div>{{line1}}</div>
    <div>{{lin2}}</div>
    <div>------------------------------------------</div>
    <div>{{aDouble}}</div>
    <div>------------------------------------------</div>
    <div @click="say('hi')">点击我</div>
  </div>
</template>

<script>
export default {
    //定义全局变量到data
  data() {
    return {
     title:'《诗经国风 .周南》',
     line1:'关关雎鸠，在河之洲。',
     lin2:'窈窕淑女，君子好逑。',
     a:100
    };
  },

//绑定函数(对象中)
  computed: {
    aDouble() {
      return this.a * 2;
    }
  },

  //methods绑定事件函数
  methods:{
      say(h){
          alert(h);
      }
  }
};
</script>