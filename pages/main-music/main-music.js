// pages/main-music/main-music.js
import {
  geBanner,
  getPlaylistDetail
} from "../../services/music"
import querySelect from "../../utils/query-select"
import throttle  from '../../utils/throttle'

const querySelectThrottle = throttle(querySelect)
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    bannerHeight:100,
    value:"",
    recommendSongs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.geBannerData()
this.getPlaylistDetailData()
  },
  //页面网络请求
  async geBannerData() {
    let res = await geBanner({
      type: 0
    })
    this.setData({
      banners: res.data.banners
    })
  },
  async getPlaylistDetailData(){
  let res=await getPlaylistDetail({id:3778678})
  this.setData({ recommendSongs: res.data.playlist.tracks.slice(0, 6) })
  },
  //事件监听
  async onBannerImageLoad(){
    let res=await querySelectThrottle(".banner-image")
    this.setData({ bannerHeight: res[0]?.height })
  },
  onSearchClick(event){
console.log(event)
  },
  onRecommendMoreClick(){
console.log(999)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})