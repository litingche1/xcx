import {requsetServices} from './index'
export function getSongDetail(ids) {
  return requsetServices.get({
    url: "/song/detail",
    data: {
      ids
    }
  })
}

export function getSongLyric(id) {
  return requsetServices.get({
    url: "/lyric",
    data: {
      id
    }
  })
}
