import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Profile from '../views/Profile.vue'
import Setting from '../views/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'sign-in',
    component:() => import ('../views/SignUp.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
