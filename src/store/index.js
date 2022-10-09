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
    // topPopular: []
  },
  getters: {
  },
  // 用來修改 state 的函式
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      // state.token = localStorage.getItem('token')

      console.log("有跑！")
    },
  },
  // 用來設定其他的非同步函式：
  actions: {
  },
  modules: {
  }
})
