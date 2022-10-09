import { apiHelper } from './../utils/helpers'

export default {
  // user 註冊時帶入參數以傳給 user signup API
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    }
    )
  },

  // user 登入時帶入參數以傳給 user sign-in API
  signIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },

  // admin 登入時帶入參數以傳給 admin sign-in API
  adminSignIn({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  }
}