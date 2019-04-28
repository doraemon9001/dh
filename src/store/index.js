import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import UpCash from './modules/Upcash'
import EZCash from './modules/EZCash'
import ICan from './modules/ICan'
import IWell from './modules/IWell'
import MyWay from './modules/MyWay'
import IGoing from './modules/IGoing'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UpCash,
    EZCash,
    ICan,
    IWell,
    MyWay,
    IGoing
  },
  mutations,
  actions,
  state,
  getters
})
