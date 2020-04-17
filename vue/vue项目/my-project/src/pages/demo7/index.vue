<template>
  <div>
    <div>列表渲染</div>
    <div>------------------------------------</div>
    <ul id="example-1">
      <li v-for="(item,index) of items" :key="index">{{item.message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ message: "son" }, { message: "son2" }]
    };
  }
};
</script>

<style>
</style>