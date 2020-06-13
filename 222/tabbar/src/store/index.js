import Vue from 'vue'
import Vuex from 'vuex'
import {moduleA} from './modules/module_A'
import {moduleB} from './modules/moduleB'
import {mutations} from './mutations'
import {actions} from './actions'
import {getters} from './getters'

Vue.use(Vuex)

const state = {
  counter: 10000,
  students: [
    { id: 110, name: 'chen', age: 30 },
    { id: 111, name: 'zu', age: 32 },
    { id: 112, name: 'ron', age: 10 },
    { id: 113, name: 'ling', age: 20 },
    { id: 114, name: 'cuo', age: 50 }
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store
