import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import UpCash from './modules/Upcash'
import EZCash from './modules/EZCash'
import MyWay from './modules/MyWay'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UpCash,
    EZCash,
    MyWay
  },
  mutations,
  actions,
  state,
  getters
})
