<template>
  <div>
    <div>表单控件</div>
    <div>-------------------------------</div>
    <input value="我是文本框到默认值" v-model="Message" placeholder="edit me" />
    <p>Message is:{{Message}}</p>
    <div>-------------------------------</div>
    <!-- 多选框 -->
    <input type="checkbox" name id value="Jack" v-model="checkedName" />
    <input type="checkbox" name id value="Green" v-model="checkedName" />
    <input type="checkbox" name id value="Alice" v-model="checkedName" />
    <input type="checkbox" name id value="Chen" v-model="checkedName" />
    <br />

    <span>Checked Names:{{checkedName}}</span>
    <div>----------------------------------</div>
    <!-- 单选框 -->
    <input type="radio"  id="" value="men" v-model="radioChecked">
    <input type="radio"  id="" value="women" v-model="radioChecked">
    <br>
    <span>radioChecked values:{{radioChecked}}</span>

    <div>--------------------------------</div>

    <!-- 列表选项 -->
    <div id="example-5">
      <select name id v-model="selected">
        <option value disabled>请选择</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <span>Seleced:{{selected}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Message: "",
      checkedName: [],
      selected:'',
      radioChecked:''
    };
  },

  mounted(){
    console.log(this.$route.params);
  }
};
</script>

<style>
</style>