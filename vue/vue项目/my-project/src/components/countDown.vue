<template>
  <p :style="{color:col,backgroundColor:bgColor,fontSize:fsize}">{{time}}</p>
</template>

<script>
export default {
  data() {
    return {
      time: 10
    };
  },

  mounted() {
    let t = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        clearInterval(t);
        this.$emit("end");
      }
    }, 1000);
  },

  props: ["col", "bgColor", "fsize"]
};
</script>

<style lang="scss" scoped>
</style>
