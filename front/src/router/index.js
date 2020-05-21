import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import User from './user/index'
import Article from './article/article'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
        ... User,
        ... Article
    ]
  },
    {
      path: '/login',
      name: 'Login',
      component: () => import("../views/Login")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
