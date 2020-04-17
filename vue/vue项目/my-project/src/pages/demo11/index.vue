<template>
  <div>
    <div>vue中的DOM操作</div>
    <div>-------------------------------</div>

    <div ref="head" id="head"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    //DOM生成
    this.$refs.head.innerHTML = "helloworld";
  }
};
</script>

<style>
</style>