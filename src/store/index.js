import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用來放置資料的地方
  state: {
    currentUser: {
      id: - 1,
      name: '',
      account: '',
      email: '',
      avatar: '',
      role: ''
    },
    isAuthenticated: false,
    token: ''
    // topPopular: []
  },
  getters: {
  },
  // 以 commit 來發動，用來修改 state 的函式
  mutations: {
    // 登入時記錄目前的使用者
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }

      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true

      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')

    },
    // 登出時移除目前使用者的資料
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  // 以 dispatch 來發動，用來設定其他的非同步函式：透過 API 請求資料等
  actions: {
  },
  modules: {
  }
})
