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