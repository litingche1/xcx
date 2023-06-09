// pages/main-video/main-video.js
import {
  getTopMV
} from '../../services/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    limit: 20,
    offset: 0,
    hasMore: true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getVideoList()
  },
  async getVideoList() {
    let res = await getTopMV({
      limit: this.data.limit,
      offset: this.data.offset
    })
    let data = [...this.data.videoList, ...res.data.data]
    this.setData({
      videoList: data
    })
    this.data.offset = this.data.videoList.length
    this.data.hasMore=res.data.hasMore
    wx.stopPullDownRefresh()
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
    this.data.hasMore=true,
    this.data.videoList=[]
    this.data.offset=0
    this.getVideoList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.hasMore){
      this.getVideoList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})