import { apiHelper } from './../utils/helpers'

export default {
  // 取得目前使用者的帳號資料
  // getCurrentUser() {
  //   return apiHelper.get('/current_user')
  // },

  // 編輯目前使用者的帳號資料
  update({ userId, formData }) {
    return apiHelper.put(`/current/${userId}`, formData)
  },
}