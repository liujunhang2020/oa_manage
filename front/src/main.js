import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false

axios.interceptors.request.use(config => {
  console.log(111)
  // url
  if (config.url.includes('/admin/login')) {
    return config
  }

  config.headers.token = localStorage.token

  return config

})

axios.interceptors.response.use(response => {
  console.log(response)
  if (response.data.errno === -2) {
    return Promise.reject('登录过期，请重新登录')
  }
  return response
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
