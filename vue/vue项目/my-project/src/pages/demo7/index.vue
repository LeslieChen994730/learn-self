<template>
  <div>
    <div>列表渲染</div>
    <div>------------------------------------</div>
    <ul id="example-1">
      <li v-for="(item,index) in items" :key="index">{{index}}:{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10]
    };
  }
};
</script>

<style>
</style>
