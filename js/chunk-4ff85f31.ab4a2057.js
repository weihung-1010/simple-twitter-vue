(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ff85f31"],{"3a75":function(t,e,s){},"3aa3":function(t,e,s){"use strict";s("3a75")},be6c:function(t,e,s){"use strict";var a=s("2fa3");e["a"]={tweets:{get(){return a["b"].get("/admin/tweets")},delete({tweetId:t}){return a["b"].delete("/admin/tweets/"+t)}},users:{get(){return a["b"].get("/admin/users")}}}},d86a:function(t,e,s){},e87e:function(t,e,s){"use strict";s("d86a")},fa6a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("Navbar")],1),e("div",{staticClass:"col-10"},[e("div",{staticClass:"list-wrapper"},[e("h4",{staticClass:"list-title"},[t._v("推文清單")]),t.isLoading?e("Spinner",{staticClass:"spinner"}):e("AdminTweetsList",{attrs:{"initial-tweets":t.tweets},on:{"after-delete-tweet":t.afterDeleteTweet}})],1)])])])},i=[],n=(s("d9e2"),s("d178")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tweets-container"},[e("div",{staticClass:"tweets"},t._l(t.initialTweets,(function(s){return e("div",{key:s.id,staticClass:"tweet"},[e("div",{staticClass:"img-container"},[e("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(s.avatar),alt:"avatar"}})]),e("div",{staticClass:"detail-container"},[e("div",{staticClass:"tweet-owner"},[e("span",{staticClass:"owner-name"},[t._v(t._s(s.name))]),e("span",{staticClass:"owner-account-datetime"},[t._v("@"+t._s(s.account)+"・"+t._s(t._f("fromNow")(s.createdAt)))])]),e("div",{staticClass:"tweet-content"},[t._v(" "+t._s(t._f("first50Letters")(s.description))+" ")]),e("button",{staticClass:"delete-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleDeleteBtnClick(s.id)}}},[t._v(" ✕ ")])])])})),0)])},c=[],o=s("2708"),l=s("2fa3"),d=s("be6c"),w={name:"AdminTweetsList",mixins:[o["f"],o["d"],o["e"]],props:{initialTweets:{type:Array,required:!0}},methods:{async handleDeleteBtnClick(t){try{const{data:e}=await d["a"].tweets.delete({tweetId:t});if("error"===e.status)throw new Error(e.message);this.$emit("after-delete-tweet",t),l["a"].fire({icon:"success",title:"推文已成功刪除"})}catch(e){console.error(e.message),l["a"].fire({icon:"error",title:"無法刪除此推文，請稍後再試"})}}}},u=w,f=(s("e87e"),s("2877")),v=Object(f["a"])(u,r,c,!1,null,"4506238d",null),m=v.exports,h=s("2375"),p={name:"AdminTweets",components:{Navbar:n["a"],AdminTweetsList:m,Spinner:h["a"]},data(){return{tweets:[],isLoading:!0}},created(){this.fetchTweets()},methods:{async fetchTweets(){try{this.isLoading=!0;const{data:t}=await d["a"].tweets.get();if("error"===t.status)throw new Error(t.message);this.tweets=t,this.isLoading=!1}catch(t){this.isLoading=!1,console.error(t.message),l["a"].fire({icon:"error",title:"無法取得推文清單，請稍後再試"})}},afterDeleteTweet(t){this.tweets=this.tweets.filter(e=>e.id!==t)}}},C=p,g=(s("3aa3"),Object(f["a"])(C,a,i,!1,null,"122eb3e5",null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-4ff85f31.ab4a2057.js.map