import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import User from './user/user'
import Article from './article/article'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.token || null,
    userName: localStorage.userName || null
  },
  mutations: {
    SAVE_DATA(state, info) {
      state.token = localStorage.token = info.token
      state.userName = localStorage.userName = info.userName
    },
    LOGOUT(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('userName')

      state.token = null
      state.userName = null
    }
  },
  actions: {
    async login(content, vm) {
      // /admin/login 服务端登录接口
      const result = await axios.post('/api/admin/login', vm.ruleForm)
      console.log(result)

      if (result.data.errno !== 0) {
        vm.$message.error('登录失败，用户名或者密码错误')
        return
      }
      content.commit('SAVE_DATA', { token: result.data.message, userName: vm.ruleForm.userName })
      vm.$message({
        type: "success",
        message: "恭喜，登录成功"
      })
      vm.$router.push('/')
    }
  },
  modules: {
    User,
    Article
  }
})

// 同源策略 : 浏览器的安全机制。

// 同源  非同源

// url : 协议  域名  端口

// 跨域

// http://localhost:8080
// http://localhost:3000



