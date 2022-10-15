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


    // 按喜歡推文
    addLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/like`)
    },

    // 按刪除喜歡
    deleteLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/unlike`)
    },


    // getOneTweet({ tweetId }) {
    //   return apiHelper.get(`/tweets/${tweetId}`)
    // },

    // getUsersTweets({ userId }) {
    //   return apiHelper.get(`/users/${userId}/tweets`)
    // },


    // createReply({ tweetId, comment }) {
    //   return apiHelper.post(`tweets/${tweetId}/replies`, { tweetId, comment })
    // },
  },


  // replies: {
  //   getReplies({ tweetId }) {
  //     return apiHelper.get(`/tweets/${tweetId}/replies`)
  //   },
  // }
}