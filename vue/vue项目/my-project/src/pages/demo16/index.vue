<template>
  <div>
    <div>vue-resourse请求</div>
    <div>------------------------</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    //get 请求
    this.$http.get("/someUr1").then(
      Response => {
        //get body data
        console.log(Response.body);
      },
      Response => {
        //错误回调
      }
    );

    //post请求
    this.$http.post("/someUr1", { foo: "bar" }).then(
      Response => {
        //get body data
        console.log(Response.body);
      },
      Response => {
        //错误回调
      }
    );
  }
};
</script>

<style>
</style>