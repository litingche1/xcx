// pages/detail-video/detail-video.js
import {
  getMvDetail,
  getMvUrl,
  getRelatedList
} from '../../services/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvid:'',
    mvInfo:{},
    mvUrl:'',
    relatedMV:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.mvid=options.id
    this.getMvDetailData()
    this.getMvUrlData()
    this.getRelatedData()
  },
  //页面网络请求
   async getMvDetailData(){
     let res= await getMvDetail({mvid:this.data.mvid})
     this.setData({
      mvInfo:res.data.data
     })
   },
   async getMvUrlData(){
    let res= await getMvUrl({id:this.data.mvid})
    console.log(res.data.data.url)
    this.setData({
      mvUrl:res.data.data.url
    })
   },
   async getRelatedData(){
     let res= await getRelatedList({id:this.data.mvid})
     this.setData({
      relatedMV:res.data.data
     })
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