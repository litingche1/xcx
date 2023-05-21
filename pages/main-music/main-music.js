// pages/main-music/main-music.js
import {
  geBanner,
  getPlaylist
} from "../../services/music"
import querySelect from "../../utils/query-select"
import throttle from '../../utils/throttle'
import recommendStore from '../../store/recommendStore'
const querySelectThrottle = throttle(querySelect)
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    bannerHeight: 100,
    value: "",
    recommendSongs: [], //推荐歌曲
    hotMenuList: [], //热门歌单
    recMenuList:[]//推荐歌单
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.geBannerData()
    recommendStore.onState('recommendSongInfo', this.getPlaylistDetailData)
    recommendStore.dispatch('fetchRecommendSongsAction')
    this.fetchSongMenuList()
    // 
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
  //推荐歌曲
  getPlaylistDetailData(val) {
    this.setData({
      recommendSongs: val.tracks?.slice(0, 6)
    })
  },
  //热门歌单
  //推荐歌单
  async fetchSongMenuList() {
    let res = await getPlaylist()
    this.setData({
      hotMenuList: res.data.playlists
    })

    let resData = await getPlaylist("华语")
    this.setData({
      recMenuList: resData.data.playlists
    })

  },
  //事件监听
  async onBannerImageLoad() {
    let res = await querySelectThrottle(".banner-image")
    this.setData({
      bannerHeight: res[0]?.height
    })
  },
  onSearchClick() {
    wx.navigateTo({
      url: '/pages/detail-search/detail-search'
    })
  },
  onRecommendMoreClick() {
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