import request from '@/utils/request'


export function add(standardInputListJson) {
  return request({
    url: '/vertify/input/add',
    method: 'post',
    data: standardInputListJson
  })
}

export function list(page, pageSize) {
  return request({
    url: '/vertify/input/list',
    method: 'get',
    params: {
      page, pageSize
    }
  })
}

export function deleteBatch(idList){
  return request({
    url: '/vertify/input/delete',
    method: 'post',
    data: idList
  })
}


