import { apiHelper } from './../utils/helpers'

export default {
  tweets: {
    // 取得所有的推文資料
    getTweets() {
      return apiHelper.get(`/tweets`)
    },

    // 新增推文
    create({ description }) {
      return apiHelper.post(`/tweets`, { description })
    },


    // 按喜歡這則推文
    addLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/like`)
    },

    // 按刪除喜歡推文
    deleteLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/unlike`)
    },


    // 留言回覆推文
    createReply({ tweetId, comment }) {
      return apiHelper.post(`/tweets/${tweetId}/replies`, comment)
    },


    // 顯示特定推文內容
    getOneTweet({ tweetId }) {
      return apiHelper.get(`/tweets/${tweetId}`)
    },


    // getUsersTweets({ userId }) {
    //   return apiHelper.get(`/users/${userId}/tweets`)
    // },


  },

  // 顯示特定推文的回覆串
  replies: {
    getReplies({ tweetId }) {
      return apiHelper.get(`/tweets/${tweetId}/replies`)
    },
  }
}