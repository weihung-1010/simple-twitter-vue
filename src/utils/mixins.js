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


// 空白影像濾鏡：若無上傳頭像則套用此替代影像
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || require('./../assets/images/noImage@2x.png')
    }
  }
}