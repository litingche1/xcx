// pages/main-music/main-music.js
import {
  geBanner,
  getPlaylist
} from "../../services/music"
import querySelect from "../../utils/query-select"
import throttle from '../../utils/throttle'
import recommendStore from '../../store/recommendStore'
import rankingStore from '../../store/rankingStore'
import playerStore from '../../store/playerStore'
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
    recMenuList: [], //推荐歌单
    // 巅峰榜数据
    isRankingData: false,
    rankingInfos: {},
       // 当前正在播放的歌曲信息
       currentSong: {},
       isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.geBannerData()
    recommendStore.onState('recommendSongInfo', this.getPlaylistDetailData)
    rankingStore.onState('newRanking', this.handleNewRanking)
    rankingStore.onState('originRanking', this.handleOriginRanking)
    rankingStore.onState('upRanking', this.handleUpRanking)
    rankingStore.dispatch("fetchRankingDataAction")
    recommendStore.dispatch('fetchRecommendSongsAction')
    this.fetchSongMenuList()
    playerStore.onStates(["currentSong", "isPlaying"], this.handlePlayInfos)
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
    wx.navigateTo({
      url: '/pages/detail-song/detail-song?type=recommend',
    })
  },
  handleNewRanking(val) {
    console.log(val)
    if (!val.name) return
    this.setData({
      isRankingData: true
    })
    console.log(this.data.isRankingData)
    const newRankingInfos = {
      ...this.data.rankingInfos,
      newRanking: val
    }
    this.setData({
      rankingInfos: newRankingInfos
    })
  },
  handleOriginRanking(val) {
    if (!val.name) return
    this.setData({
      isRankingData: true
    })
    const newRankingInfos = {
      ...this.data.rankingInfos,
      originRanking: val
    }
    this.setData({
      rankingInfos: newRankingInfos
    })
  },
  handleUpRanking(val) {
    if (!val.name) return
    this.setData({
      isRankingData: true
    })
    const newRankingInfos = {
      ...this.data.rankingInfos,
      upRanking: val
    }
    this.setData({
      rankingInfos: newRankingInfos
    })
  },
  handlePlayInfos({ currentSong, isPlaying }) {
    if (currentSong) {
      this.setData({ currentSong })
    }
    if (isPlaying !== undefined) {
      this.setData({ isPlaying })
    }
  },

  onSongItemTap(event) {
    const index = event.currentTarget.dataset.index
    playerStore.setState("playSongList", this.data.recommendSongs)
    playerStore.setState("playSongIndex", index)
  
  },
  onPlayBarAlbumTap() {
    wx.navigateTo({
      url: '/pages/music-player/music-player',
    })
  },
  onPlayOrPauseBtnTap() {
    playerStore.dispatch("changeMusicStatusAction")
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
    recommendStore.offState('recommendSongInfo', this.getPlaylistDetailData)
    rankingStore.offState('newRanking', this.handleNewRanking)
    rankingStore.offState('originRanking', this.handleOriginRanking)
    rankingStore.offState('upRanking', this.handleUpRanking)
    playerStore.offStates(["currentSong", "isPlaying"], this.handlePlayInfos)
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