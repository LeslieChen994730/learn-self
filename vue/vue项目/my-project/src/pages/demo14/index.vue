<template>
  <div>
      <div>vuex管理</div>
      <div>-------------------------</div>

      <div>{{msg}}</div>
      <button @click="change">change</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'123'
        };
    },

    methods:{
        change(){
            //取数据
            // this.msg=this.$store.state.count;

            //修改数据
            this.$store.dispatch('inc',1000);
            this.msg=this.$store.state.num;
        }
    }
}
</script>

<style>

</style>