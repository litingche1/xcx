class services{
  constructor(baseURL){
    this.baseURL=baseURL
  }
  request(options){
    let {url}=options
    return new Promise((resolve,reject)=>{
      wx.request({
        ...options,
        url: this.baseURL+url,
        success:res=>{
          resolve(res)
        },
        fail:reject
      })
    })
  }
  get(option){
   return this.request({...option,method:'get'})
  }
  post(option){
    return this.request({...option,method:'post'})
  }

}
export const requsetServices=new services('https://coderwhy-music.vercel.app/')