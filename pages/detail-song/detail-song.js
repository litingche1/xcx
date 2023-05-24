import recommendStore from "../../store/recommendStore"
import rankingStore from "../../store//rankingStore"
import {
  getPlaylistDetail
} from "../../services/music"
// pages/detail-song/detail-song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "ranking",
    key: "newRanking",
    id: "",
    songInfo: {

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      type
    } = options
    this.setData({
      type
    })
    // 1.确定获取数据的类型
    // type: ranking -> 榜单数据
    // type: recommend -> 推荐数据
    console.log(options.type)
    if (type === "ranking") {
      const {
        key
      } = options
      this.data.key = key
      rankingStore.onState(key, this.handleRanking)
    } else if (type === "recommend") {
      recommendStore.onState("recommendSongInfo", this.handleRanking)
    } else if (type === "menu") {
      const {
        id
      } = options
      this.data.id = id
      this.fetchMenuSongInfo()
    }
  },
  handleRanking(val) {
    this.setData({
      songInfo: val
    })
    wx.setNavigationBarTitle({
      title: 'val.name',
    })
  },
  async fetchMenuSongInfo() {
    const res = await getPlaylistDetail({
      id: this.data.id
    })
    this.setData({
      songInfo: res.data.playlist
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
    if (this.data.type === "ranking") {
      rankingStore.offState(this.data.key, this.handleRanking)
    } else if (this.data.type === "recommend") {
      recommendStore.offState("recommendSongInfo", this.handleRanking)
    }
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