import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from "./../apis/user"
import { Toast } from './../utils/helpers'


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
    token: '',
    topPopular: []
  },
  getters: {
  },
  // 以 commit 來發動，用來修改 state 的函式
  mutations: {
    // 登入時記錄目前的使用者
    setCurrentUser(state, currentUser) {
      // 1. 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      // 2. 將驗證狀態改為 true
      state.isAuthenticated = true
      // 3. 將 token 從 localStorage 取並儲在 state 中
      state.token = localStorage.getItem('token')
    },

    // 登出時移除目前使用者的資料
    revokeAuthentication(state) {
      // 1. 清空 currentUser 的資料
      state.currentUser = {}
      // 2. 將驗證狀態改為 false
      state.isAuthenticated = false
      // 3. 清空 state 裡的 token
      state.token = ""
      // 4. 移除 localStorage 的 token 記錄
      localStorage.removeItem('token')
    },

    // 設定前十名的人氣用戶
    setTopPopular(state, topPopular) {
      state.topPopular = [...topPopular]
    }
  },
  // 以 dispatch 來發動，用來設定其他的非同步函式：透過 API 請求資料等
  actions: {
    // 透過 API 請求目前登入者的資料
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 成功取得資料，代表有確實登入
        // 重新設定 currentUser 的資料
        const { id, name, account, email, avatar, role } = data
        commit('setCurrentUser', {
          id, name, account, email, avatar, role
        })
        return { isAuthenticated: true, role: this.state.currentUser.role }
        // 無法取得資料，代表沒有確實登入
      } catch (error) {
        console.error(error.message)
        commit('revokeAuthentication');
        return { isAuthenticated: false, role: '' };
      }
    },

    // 透過 API 請求前十名的人氣用戶
    async fetchPopular({ commit }) {
      try {
        const response = await userAPI.getTopUsers();
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        commit('setTopPopular', data)
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推薦追蹤名單",
        });
      }
    },
  },
  modules: {
  }
})
