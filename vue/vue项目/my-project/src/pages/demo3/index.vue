<template>
  <div>
    <div>模板语法</div>
    <div>--------------------------------</div>
    <div>data:{{ msg }}</div>
    <div>--------------------------------</div>
    <div v-html="rawHtml" v-bind:class="red"></div>
    <div>--------------------------------</div>
    <div v-on:click="change">点击我,改变颜色</div>
    <div>--------------------------------</div>
    <div>{{ message | a }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello,world!",
      rawHtml: "<span>123</span>",
      red: "red",
      message:'message'
    };
  },

  methods: {
    change() {
      this.red = "blue";
    }
  },
  filters:{
      a(){
          return '123';
      }
  }
};
</script>

<style></style>
