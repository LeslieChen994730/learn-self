<template>
  <div>
    <div>路由router-link</div>
    <div>------------------------------------</div>
    <!-- 跳转 -->
    <router-link to="/demo9">demo9</router-link>
    <router-link :to="{name:'demo9',params:{userId:123,useName:'chen'}}">params</router-link>
    <router-link :to="{name:'demo9',params:{userId:123,useName:'chen'},qurey:{plan:'xxx'}}">qurey</router-link>

    <div>---------------------------------</div>

    <button @click="toUrl">跳转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    alert(this.$route.params.id);
    alert(this.$route.qurey.plan);
  },

  methods: {
    toUrl() {
      this.$router.push({ path: "/demo8" });
      this.$router.push({name:'demo9',params:{userId:123,useName:'chen'}});
      this.$router.push({name:'demo9',params:{userId:123,useName:'chen'},qurey:{plan:'xxx'}});
    }
  }
};
</script>

<style>
</style>
