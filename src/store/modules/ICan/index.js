import Url from '../../../utils/constUrl'
import stateTypes from './Types/ICanStateTypes'
import getterTypes from './Types/ICanGetterTypes'
import functionTypes from './Types/ICanFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.ICanElecFormIsRead]: false,
  [stateTypes.ICanISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetICanElecFormIsRed]: state => state.ICanElecFormIsRead,
  [getterTypes.GetICanIsInit]: state => state.ICanISINIT,
  [getterTypes.GetICanPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * ICan 是否已同意電子保單
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncICanElecFormIsRead]({ commit }, ICanElecFormIsRead) {
    commit(functionTypes.FuncICanElecFormIsRead, { result: ICanElecFormIsRead })
  },
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncICanIsInit]({ commit }, ICanISINIT) {
    commit(functionTypes.FuncICanIsInit, { result: ICanISINIT })
  },
  /**
   * ICan 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncICanInit]({ commit }) {
    rootState.Http.axios.post(`${Url.ICanInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncICanInit, { result: response.data })
    })
  },
  /**
   * ICan 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncICanEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.ICanEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncICanEstimate, { result: response.data })
    })
  },
  /**
   * ICan 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncICanSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.ICanSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncICanSubmitQuote, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * ICan 是否已同意電子保單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncICanElecFormIsRead](state, { result }) {
    state.ICanElecFormIsRead = result
  },
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncICanIsInit](state, { result }) {
    state.ICanISINIT = result
  },
  /**
   * ICan 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncICanInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    state.POSTDATA.QusAns = [{ Answar: false }, { Answar: false }, { Answar: false },
      { Answar: false }, { Answar: false }
    ]
  },
  /**
   * ICan 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncICanEstimate(state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
  },
  /**
   * ICan 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncICanSubmitQuote](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}