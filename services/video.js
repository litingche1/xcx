import {requsetServices} from './index'
export function getTopMV(data){
  return requsetServices.get({
    url:'top/mv',
    data:data
  })
}