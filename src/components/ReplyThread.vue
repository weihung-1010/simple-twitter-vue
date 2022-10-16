<template>
  <div>
    <!-- 要回覆的 tweet -->
    <div class="thread-container">
      <div class="tweet-sec">
        <div class="thread">
          <div class="d-flex">
            <div class="avatar-container">
              <img
                class="avatar"
                src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
                alt="avatar"
              />
            </div>

            <div class="thread-info">
              <div class="line1">Name A</div>
              <div class="line4">@accountA</div>
            </div>
          </div>
          <div class="description-sec">
            comments!commentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscomments
          </div>
          <div class="date">上午 022/10/16</div>
        </div>
      </div>

      <div class="num-sec d-flex">
        <div class="replyNum"><span class="number">34</span> 回覆</div>
        <div class="likedNum"><span class="number">808</span> 喜歡次數</div>
      </div>
      <div class="icon-sec">
        <img src="~@/assets/images/tweetReply@2x.png" alt="reply-icon" />
        <img
          src="~@/assets/images/tweetLike@2x.png"
          alt="heart-icon"
          class="heart-icon"
        />
      </div>
    </div>

    <!-- 回覆串 thread -->
    <div class="thread-container">
      <div class="thread d-flex">
        <div class="avatar-container">
          <img
            class="avatar"
            src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
            alt="avatar"
          />
        </div>

        <div class="thread-info">
          <div class="line1">
            Name <span class="line1--little">@accountB‧13小時</span>
          </div>

          <div class="line2">
            回覆<span class="line2--little">@accountA</span>
          </div>

          <div class="line3">
            comments!commentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscomments
          </div>
        </div>
      </div>
    </div>

    <!-- 回覆串 thread -->
    <div class="thread-container">
      <div class="thread d-flex">
        <div class="avatar-container">
          <img
            class="avatar"
            src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
            alt="avatar"
          />
        </div>

        <div class="thread-info">
          <div class="line1">
            Name <span class="line1--little">@accountB‧13小時</span>
          </div>

          <div class="line2">
            回覆<span class="line2--little">@accountA</span>
          </div>

          <div class="line3">
            comments!commentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscomments
          </div>
        </div>
      </div>
    </div>
    <!-- 回覆串 thread -->
    <div class="thread-container">
      <div class="thread d-flex">
        <div class="avatar-container">
          <img
            class="avatar"
            src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
            alt="avatar"
          />
        </div>

        <div class="thread-info">
          <div class="line1">
            Name <span class="line1--little">@accountB‧13小時</span>
          </div>

          <div class="line2">
            回覆<span class="line2--little">@accountA</span>
          </div>

          <div class="line3">
            comments!commentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscommentscomments
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import {
  fromNowFilter,
  accurateTimeFilter,
  emptyImageFilter,
} from "./../utils/mixins";

export default {
  name: "ReplyThread",
  mixins: [fromNowFilter, accurateTimeFilter, emptyImageFilter],
};
</script>




<style scoped lang="scss">
@import "../assets/scss/replyThread.scss";
</style>