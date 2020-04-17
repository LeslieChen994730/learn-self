<template>
  <div>
    <div v-html="Btn" :class="btn" @click="Alert"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Btn: `<button>我是按钮</button>`,
      btn: 'btn'
    };
  },
  methods: {
    Alert() {
      alert("我出来了!");
    }
  }
};
</script>

<style>
</style>