import { request } from '../../network/index.js'
Page({
  data: {
    swiperList: [],
    catesList:[]
  },
  onLoad() {
    this.getSwiperList(),
    this.getCatesList(),
    this.get
  },

  // 获取轮播图数据
  getSwiperList(){
    request('home/swiperdata').then((res) => {
      // console.log(res);
      this.setData({
        swiperList: res.data.message
      })
    })
  },
  // 获取首页四图数据
  getCatesList(){
    request('home/catitems').then((res) => {
      console.log(res);
      this.setData({
        catesList: res.data.message
      })
    })
  }
  // 获取展示信息
})