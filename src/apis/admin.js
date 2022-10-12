import { apiHelper } from './../utils/helpers'
// const getToken = () => localStorage.getItem('token')

export default {
  tweets: {
    // 取得所有推文
    get() {
      return apiHelper.get('/admin/tweets')
    },
    // 刪除特定推文
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    }
  },


  users: {
    // 取得所有使用者
    get() {
      return apiHelper.get('/admin/users')
    }
  }
}
