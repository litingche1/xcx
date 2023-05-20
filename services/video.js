import {requsetServices} from './index'
export function getTopMV(data){
  return requsetServices.get({
    url:'/top/mv',
    data:data
  })
}
export function getMvDetail(data){
  return requsetServices.get({
    url:'/mv/detail',
    data:data
  })
}
export function getMvUrl(data){
  return requsetServices.get({
    url:'/mv/url',
    data:data
  })
}
export function getRelatedList(data){
  return requsetServices.get({
    url:`/related/allvideo`,
    data:data
  })
}