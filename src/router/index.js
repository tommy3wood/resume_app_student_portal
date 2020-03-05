import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

import Show from '../views/StudentShow.vue'
import Edit from '../views/StudentEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'login',component: Login},
  {path: '/logout', name: 'logout',component: Logout},
  {path: '/show', name: 'show',component: Show},
  {path: '/edit', name: 'edit',component: Edit}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
