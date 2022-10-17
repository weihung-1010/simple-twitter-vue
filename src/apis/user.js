import { apiHelper } from './../utils/helpers'

export default {
  // 取得目前使用者的帳號資料
  getCurrentUser() {
    return apiHelper.get('/current_user')
  },
  // 編輯目前使用者的帳號資料
  updateAccount({ userId, newData }) {
    return apiHelper.put(`/current_user/${userId}`, newData)
  },



  // 取得人氣使用者資料
  getTopUsers(userId) {
    return apiHelper.get(`/users/${userId}/top_followers`)
  },




  // 取得特定用戶的個人頁面資料
  getTheUser(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  // 編輯自己的個人頁面資料
  updateProfile({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },



  // 取得特定用戶的追蹤者
  getFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  // 加入追蹤
  addFollowed(userId) {
    return apiHelper.post(`/followships`, { userId })
  },
  // 取消追蹤
  deleteFollowed(userId) {
    return apiHelper.delete(`/followships/${userId}`)
  },
}