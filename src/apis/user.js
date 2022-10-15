import { apiHelper } from './../utils/helpers'

export default {
  // 取得目前使用者的帳號資料
  getCurrentUser() {
    return apiHelper.get('/current_user')
  },

  // 編輯目前使用者的帳號資料
  update({ userId, newData }) {
    return apiHelper.put(`/current_user/${userId}`, newData)
  },

  // 取得人氣使用者資料
  getTopUsers() {
    return apiHelper.get('/top_followers')
  },
  // 取得個人資料
  getUser(userId) { // ClickedUser
    return apiHelper.get(`/users/${userId}`)
  },
}