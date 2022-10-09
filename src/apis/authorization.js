import { apiHelper } from './../utils/helpers'

export default {
  // 登入時帶入參數以傳給 API
  signIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  }
}