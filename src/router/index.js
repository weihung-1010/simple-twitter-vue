import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Profile from '../views/Profile.vue'
import Setting from '../views/Setting.vue'
import store from './../store'

Vue.use(VueRouter)

//To-do: 比 router.beforeEach 的 fetchCurrentUser 先執行，導致目前雖然可以阻止沒有權限的使用者進入後台頁，但是在後台時重新整理頁面後，會先抓不到 currentUser 的資料，而直接轉址到 not-found 頁面！
// 避免沒有權限的使用者進入後台頁
// 網址有變換時，會先確目前使用者的身份是否為 admin，不是即轉到 not-found 頁面
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser;
  //以下測試用
  // console.log("router currentUser is", currentUser);
  // console.log("routercurrentUser.role is ", currentUser.role);
  if (currentUser && currentUser.role !== 'admin') {
    next('not-found')
    return
  }
  next()
}


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
    name: 'sign-in',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
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
    // 進入前先驗證是否為 admin 身分 
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    // 進入前先驗證是否為 admin 身分
    beforeEnter: authorizeIsAdmin
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



// 每次切換路由都拉取一次 currentUser資料
router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})
// router.beforeEach(async (to, from, next) => {
//   // 拿出token
//   const token = localStorage.getItem('token')
//   // 無須驗證即可瀏覽的頁面
//   const pathWithoutToken = ['login', 'sign-up', 'admin-login']
//   // 管理員可以去的頁面(包含無須驗證即可瀏覽的頁面)
//   const pathAdminCanEnter = ['login', 'sign-up', 'admin-login', 'admin-tweets', 'admin-users']
//   // 如果沒有token(沒有登入), 並且要去的頁面是其他需要驗證的頁面, 直接導向登入頁
//   if (!token && !pathWithoutToken.includes(to.name)) {
//     Toast.fire({
//       icon: 'warning',
//       title: '您無權訪問該頁面，請先進行登入'
//     })
//     next('login')
//     return
//     //如果有token
//   } else if (token) {
//     // fetchCurrentUser時, 取得是否通過驗證, 以及是user還是admin
//     let { isAuthenticated, role } = await store.dispatch('fetchCurrentUser')
//     // 驗證無效, 要去的地方是需驗證的頁面, 直接導向登入頁
//     if (!isAuthenticated && !pathWithoutToken.includes(to.name)) {
//       Toast.fire({
//         icon: 'warning',
//         title: '您無權訪問該頁面，請先進行登入'
//       })
//       next('/login')
//       return
//     }
//     // 驗證有效, 且身分是user: 如果要去註冊或前台登入頁, 轉址到首頁
//     if (isAuthenticated && role === 'user') {
//       if (to.name === 'login' || to.name === 'sign-up') {
//         next('/main/mainpage')
//         return
//       }
//       // 驗證有效, 且身分是admin: 如果要去後台登入頁, 轉址到後台推文清單
//     } else if (isAuthenticated && role === 'admin') {
//       if (to.name === 'admin-login') {
//         next('/admin/tweets')
//         return
//         // 如果要去管理員無權瀏覽的頁面, 轉址登入頁
//       } else if (!pathAdminCanEnter.includes(to.name)) {
//         Toast.fire({
//           icon: 'warning',
//           title: '您無權訪問該頁面，請先進行登入'
//         })
//         next('/login')
//         return
//       }
//     }
//     next()
//   }

//   next()
// })


export default router
