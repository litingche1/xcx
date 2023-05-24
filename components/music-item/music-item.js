// components/music-item/music-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMenuItemTap(){
      const {id} = this.properties.itemData
     wx.navigateTo({
       url: `/pages/detail-song/detail-song?type=menu&id=${id}`,
     })
    }
  }
})
