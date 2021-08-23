import { request } from '../../network/index.js'
Page({
  data: {
    swiperList: []
  },
  onLoad() {
    request('home/swiperdata').then((res) => {
      this.setData({
        swiperList: res.data.message
      })
    })
  }
})