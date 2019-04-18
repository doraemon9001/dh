// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import extension from './components/extension'
import store from './store'
import Lockr from 'lockr'
import filters from './filters'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(extension)

Object.keys(filters)
  .forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$http = axios
Vue.prototype.$RequestToken = 'dS1lLmt/KbPdjpS/ytAQilnbD3oS+oIVEV5MYQPsFJwVbLFPuEkEOcqOFfjBVLJ8PIFkPiZNU9I2ni+6ceuI8TcKGkXt101mW/IFc3wKIziNQz+zFGpvqCPTRBlxa9JIng6KZwnscSpnM8bD27UIYklhE/7rVj9MovYRnx+r+mKTMt/gKYwcOVdfFYd0R1ullruGeXhGGX1xmlMCblyeWdg0+8k5ChoWef6eNLLcjn4KUYai23ORfXdZ67LXW+lAdk09pEP7YL2ep5ggbzdBTLGjz1+HYV7pU43YFQOfxDA='

axios.interceptors.response.use(function(response) {
  store.dispatch('HideLoading')
  return response
}, function(error) {
  console.log('main.js')
  alert('請先登入!')
  store.state.login.auth = false
  // router.push('/Login')
  return Promise.reject(error)
})
window.Lockr = Lockr

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  created() {
    axios.interceptors.request.use(function (config) {
      config.headers['Authorization'] = 'Bearer ' + vm.$RequestToken
      return config
    }, function(error) {
      return Promise.reject(error)
    })
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
