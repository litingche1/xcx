import {requsetServices} from './index'
export function geBanner(data){
  return requsetServices.get({
    url:'/banner',
    data:data
  })
}
export function getPlaylistDetail(data) {
  return requsetServices.get({
    url: "/playlist/detail",
    data:data
  })
}
//歌单
export function getHotList(data) {
  return requsetServices.get({
    url: "/playlist/hot",
    data:data
  })
}
export function getPlaylist(cat = "全部", limit = 6, offset = 0) {
  return requsetServices.get({
    url: "/top/playlist",
    data: {
      cat,
      limit,
      offset
    }
  })
}
export function getSongMenuTag() {
  return requsetServices.get({
    url: "/playlist/hot"
  })
}
// //歌单详情
// export function getHotList(id) {
//   return requsetServices.get({
//     url: "/playlist/detail",
//     data:{
//       id:id
//     }
//   })
// }