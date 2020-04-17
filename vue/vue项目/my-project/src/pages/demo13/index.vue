<template>
  <div>
      <div>路由router-link</div>
      <div>------------------------------------</div>
      <!-- 跳转 -->
      <!-- <router-link to="/demo9">demo9</router-link> -->
     <router-link :to="{name:'demo9',params:{userId:123,useName:'chen'}}">params</router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{

        };
    },
    methods:{
        toURL(){
            this.$router.push();
        }
    }
}
</script>

<style>

</style>