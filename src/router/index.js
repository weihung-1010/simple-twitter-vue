import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Profile from '../views/Profile.vue'
import Setting from '../views/Setting.vue'
import store from './../store'
import { Toast } from "./../utils/helpers";

Vue.use(VueRouter)


const routes = [
  // 根目錄頁面
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },

  // 前台頁面
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/main/',
    name: 'main',
    redirect: '/main/mainpage',
    component: Main,
    children: [
      {
        name: 'main-page',
        path: 'mainpage',
        component: () => import('../views/MainPage'),
      },
      // {
      //   name: 'reply-list',
      //   path: 'replylist/:id',
      //   component: () => import('../views/ReplyList'),
      // },
    ]
  },




  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        name: 'user-tweet',
        path: '/tweet',
        component: () => import('../components/UserTweet'),
      },
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },

  // 後台頁面
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue'),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },

  // not-found 頁面
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})



// 驗證：網址有變動時都重新拿取一次 currentUser 的資料
router.beforeEach(async (to, from, next) => {
  // 取出 localStorage 裡的 token
  const token = localStorage.getItem('token')

  // 不需要 token 即可進入的頁面
  const pathWithoutToken = ['login', 'sign-up', 'admin']

  // 管理員身分可以進入所有的頁面
  const pathAllForAdmin = ['login', 'sign-up', 'admin', 'admin-tweets', 'admin-users']

  // 只有管理員身分可以進入的頁面
  const pathOnlyForAdmin = ['admin-tweets', 'admin-users']


  // 在沒有登入的狀況下（沒有 token）, 若要進入需要驗證的頁面則轉址到登入頁
  if (!token && !pathWithoutToken.includes(to.name)) {
    Toast.fire({
      icon: 'warning',
      title: '無權查看該頁面，請先完成登入'
    })
    next('login')
    return


    // 在已登入的狀況下（有 token）
  } else if (token) {
    // 先取得目前登入者的資料，確認驗證狀態以及身分
    let { isAuthenticated, role } = await store.dispatch('fetchCurrentUser')

    // 在驗證無效的狀況下，若要進入需要驗證的頁面則轉址到登入頁
    if (!isAuthenticated && !pathWithoutToken.includes(to.name)) {
      Toast.fire({
        icon: 'warning',
        title: '無權查看該頁面，請先完成登入'
      })
      next('/login')
      return
    }


    // 在驗證有效的狀況下，使用者若要進入註冊或前台登入頁，則轉址到首頁
    if (isAuthenticated && role === 'user') {
      if (to.name === 'sign-up' || to.name === 'login') {
        next('/main')
        return

        // 使用者若要進入後台頁面，則跳出錯誤通知，並跳回原本的頁面
      } else if (pathOnlyForAdmin.includes(to.name)) {
        Toast.fire({
          icon: 'warning',
          title: '只有管理員可以查看後台，請先登出後再登入後台'
        })
        next(from)
        return
      }



      // 在驗證有效的狀況下，管理員若要進入後台登入頁，則轉址到推文清單頁
    } else if (isAuthenticated && role === 'admin') {
      if (to.name === 'admin') {
        next('/admin/tweets')
        return

        // 管理員若要進入前台的頁面, 則跳出錯誤通知，並跳回原本的頁面
      } else if (!pathAllForAdmin.includes(to.name)) {
        Toast.fire({
          icon: 'warning',
          title: '如欲查看前台頁面，請先登出後再登入前台'
        })
        next(from)
        return
      }
    }
    next()
  }

  next()
})


export default router
