<template>
  <div>
    <div>条件渲染</div>
    <div>---------------------------------</div>

    <div v-if="type==='a'">A</div>
    <div v-else-if="type==='b'">B</div>
    <div v-else-if="type==='c'">C</div>
    <div v-else>false</div>

    <div v-show="true">aaaaaaaaaaaa</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'a',
      flag:false
    };
  }
};
</script>

<style>
</style>
