import { request } from '../../network/index.js'
import { http_api } from '../../network/network.js'

Page({
  data: {
    a: 1,

    swiperList: [],
    catesList: [],
    detailList: [],
    videoContext: '',
    list: [],
    a: 1,
    person1: {
      name: 'king',
      age: 25,
      hobby: ['篮球'],
    }
  },
  clissk() {
    // 浅拷贝
    const person3 = this.data.person1 // lodash函数库中 clone 是一个浅拷贝方法
    person3.name = 'maoxiaoxing'
    person3.hobby.push('读书')
    console.log(person3)
    console.log(this.data.person1)

  },
  onLoad() {



    this.getSwiperList(),
      this.getCatesList(),
      this.getDetailList()

    this.data.videoContext = wx.createVideoContext('aaa', this)
  },

  // 获取轮播图数据
  getSwiperList() {
    request('home/swiperdata').then((res) => {
      // console.log(res);
      this.setData({
        swiperList: res.data.message
      })
    })
  },
  // 获取首页四图数据
  getCatesList() {
    request('home/catitems').then((res) => {
      // console.log(res);
      this.setData({
        catesList: res.data.message
      })
    })
  },
  // 获取展示信息
  getDetailList() {
    http_api.get('home/floordata', {}).then((res) => {
      this.setData({
        detailList: res.data.message
      })
      console.log(this.data.detailList);
    })
  }
})