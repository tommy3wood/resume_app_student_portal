import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

import NewEducation from '../views/NewEducation.vue';
import NewExperience from '../views/NewExperience.vue';
import NewProject from '../views/NewProject.vue';
import  NewSkill from '../views/NewSkill.vue';
import Show from '../views/StudentShow.vue';
import Edit from '../views/StudentEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'login',component: Login},
  {path: '/logout', name: 'logout',component: Logout},
  {path: '/neweducation', name: 'new-education',component: NewEducation},
  {path: '/newexperience', name: 'new-experience',component: NewExperience},
  {path: '/newproject', name: 'new-project',component: NewProject},
  {path: '/newskill', name: 'new-skill',component: NewSkill},

  {path: '/students/:id', name: 'student-show',component: Show},
  {path: '/students/:id/edit', name: 'student-edit',component: Edit}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
