<template>
  <div>
      <div>slot插槽</div>
      <div>----------------------------</div>

      <slotName>
          <div>123</div>
          <p>234</p>

          <p>6666</p>
          <p slot="bottom">555555555</p>
      </slotName>
  </div>
</template>

<script>
import slots from "@/components/slot"
export default {
    data(){
        return{

        };
    },

    components:{
        slotName:slots
    }
}
</script>

<style>

</style>