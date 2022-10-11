import { apiHelper } from './../utils/helpers'
// const getToken = () => localStorage.getItem('token')

export default {
  tweets: {
    // 取得推文清單
    get() {
      return apiHelper.get('/admin/tweets')
    },
    // // 刪除特定推文
    // delete({ tweetId }) {
    //   return apiHelper.delete(`/admin/tweets/${tweetId}`)
    // }
  },
}