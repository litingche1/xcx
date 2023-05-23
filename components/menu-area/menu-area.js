// components/menu-area/menu-area.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      default:""
    },
    musicList:{
      type:Array,
      default:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    screenWidth:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRecommendMoreClick(){
      wx.navigateTo({
        url: '/pages/detail-menu/detail-menu',
      })
    }
  },
  attached(){
    this.setData({ screenWidth: app.globalData.screenWidth })
  }
})
