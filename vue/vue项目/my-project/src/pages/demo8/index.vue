<template>
  <div>
    <div>事件处理器</div>
    <div>----------------------------------------</div>
    <div class="example-1">
      <button @click="counter">点击增加1</button>
      <p>这个按钮被点击了{{num}}次</p>
      <div>------------------------------------</div>
      <div @click="dothis2">
        <button @click.stop.once="dothis1">点击我</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },

  methods: {
    counter() {
      this.num += 1;
    },
    dothis2() {
      alert("dothis2");
    },
    dothis1() {
      console.log("dothis1");
    }
  }
};
</script>

<style>
</style>
