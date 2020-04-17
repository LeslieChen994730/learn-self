<template>
  <div>
      <div>移动组件库Mint UI</div>
      <div>---------------------------</div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Toast} from 'mint-ui'
import {MessageBox} from 'mint-ui'
import {Tabbar,TabItem} from 'mint-ui'

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
    data(){
        return{

        };
    },

    mounted(){
        // Toast({
        //     message:'提示信息',
        //     position:'center',
        //     duration:5000
        // });
        // MessageBox('提示,操作成功!');
    }
}
</script>

<style>

</style>