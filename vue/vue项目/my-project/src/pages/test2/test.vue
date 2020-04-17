<template>
  <div>
    <div>作业2-19</div>
    <div>-----------------------------</div>
    <div>排序前数组:{{arr}}</div>
    <div>排序后数组:{{sortArr}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[1,4,6,7,-9,4,0,-2,-1,8]
        };
    },

    computed:{
        sortArr(){
            let NewArr=[...this.arr];
           return NewArr.sort((a,b)=>a-b);
        }
    }
};
</script>

<style>
</style>