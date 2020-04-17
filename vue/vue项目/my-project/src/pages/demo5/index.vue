<template>
  <div>
    <div>class与style绑定</div>
    <div>------------------------------</div>
    <!-- 第一种绑定clss方式 (对象展开)-->
    <div class="static" :class="{ 'active': isActive, 'text-danger': hasError }">class1</div>
    <!-- 第二种绑定clss方式(绑定对象) -->
    <div :class="classObject">class2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: undefined,
      classObject: {
        'active': true,
        "text-danger": true
      }
    };
  }
};
</script>

<style></style>
