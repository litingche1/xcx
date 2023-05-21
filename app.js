// app.js
App({
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSystemInfo({
       success:(res)=>{
       this.globalData.screenWidth=res.screenWidth
       this.globalData.screenHeight=res.screenHeight
      }
    }
     
    )
  },
  globalData: {
    userInfo: null,
    screenWidth: 375,
    screenHeight: 667
  }
})
