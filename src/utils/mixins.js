import moment from 'moment'

// 至今時間濾鏡：將日期轉換為至今多少時間
export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      moment.locale('zh-tw');
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}


// 
export const accurateTimeFilter = {
  filters: {
    accurateTime(datetime) {
      moment.locale('zh-tw');
      return datetime ? moment(datetime).format('a hh:mm ⋅ YYYY年M月D日') : '-'
    }
  }
}

// 空白影像濾鏡：若無上傳頭像則套用此替代影像
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || "https://i.imgur.com/hAKcS3E.jpg"
    }
  }
}

// 空白背景濾鏡：若無上傳背景則套用此替代影像
export const emptyCoverFilter = {
  filters: {
    emptyCover(src) {
      // return src || require("../assets/images/Night.jpg")
      return src || "https://i.postimg.cc/nLwNk2CD/unsplash-c-O9-jo-Z1-Fd-A.png"
    }
  }
}

// 前 50 字濾鏡：若字數大於 50 字，則只會回傳前 50 個字
export const first50LettersFilter = {
  filters: {
    first50Letters(string) {
      return string.length >= 50 ? string.slice(0, 50) + "..." : string
    }
  }
}

// 數字轉換顯示濾鏡
export const countConvertFilter = {
  filters: {
    countConvert(number) {
      // 百萬以 M 比表示，千以 K 表示，取到小數第一位
      if (number >= 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
      } else if (number > 1000) {
        return `${(number / 1000).toFixed(1)}K`;
        // 一千以下的數字保持原樣顯示
      } else {
        return number;
      }
    },
  },
}