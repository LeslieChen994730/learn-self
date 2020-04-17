<template>
  <div>
      <div>自定义组件</div>
      <div>------------------------------</div>
      <num @end='ending' col='red' fsize='14px' bgColor='blue'></num>
  </div>
</template>

<script>
import count from '@/components/countDown';
export default {
    data(){
        return{

        };
    },

//注册组件
    components:{
        num:count
    },

    methods:{
        ending(){
            alert('我是组件函数');
        }
    }
}
</script>

<style>

</style>