import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    //类似data的存储变量的数据池
  state: {
    count: 0,
    num: 1
  },

  //函数,方法(突变)
  mutations: {
    increment(state, num) {
      state.count++;

      state.num = num;
    }
  },

  //执行函数
  actions: {
    inc(context, obj) {
      context.commit("increment", obj);
    }
  }
});
