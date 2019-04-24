import Url from '../../../utils/constUrl'
import stateTypes from './Types/UpCashStateTypes'
import getterTypes from './Types/UpCashGetterTypes'
import functionTypes from './Types/UpCashFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.UPCASHISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetUpCashIsInit]: state => state.UPCASHISINIT,
  [getterTypes.GetUpCashPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncUpCashIsInit]({ commit }, MYWAYISINIT) {
    commit(functionTypes.FuncUpCashIsInit, { result: MYWAYISINIT })
  },
  /**
   * UpCash 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncUpCashInit]({ commit }) {
    rootState.Http.axios.post(`${Url.UpCashInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncUpCashInit, { result: response.data })
    })
  },
  /**
   * UpCash 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncUpCashEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.UpCashEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncUpCashEstimate, { result: response.data })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncUpCashIsInit](state, { result }) {
    state.UPCASHISINIT = result
  },
  /**
   * UpCash 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncUpCashInit](state, { result }) {
    state.POSTDATA = result.Data.Result
  },
  /**
   * UpCash投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncUpCashEstimate(state, { result }) {
    state.POSTDATA = result.Data.Result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
