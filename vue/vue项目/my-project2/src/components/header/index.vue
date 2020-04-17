<template>
  <div class="c-header">
    <ul class="header-ul">
      <li>推荐</li>
      <li>课程</li>
      <li>实战</li>
      <li>职业路线</li>
      <li class="header-search">
        <img src="../../assets/search.png" alt />
      </li>
      <li class="header-history">
        <img src="../../assets/history.png" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.c-header {
  position: fixed;
  z-index: 3;
  width: 375px;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.header-ul {
  display: flex;
  align-items: center;
  height: 44px;
}
.header-ul li {
  margin-left: 20px;
  font-size: 16px;
  color: #71777d;
}

.header-ul .header-search {
  margin-left: 60px;
}

.header-ul img {
  width: 18px;
  vertical-align: -4px;
}
</style>>
</style>