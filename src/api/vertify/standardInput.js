import request from '@/utils/request'


export function add(standardInputListJson) {
  return request({
    url: '/vertify/input/add',
    method: 'post',
    data: standardInputListJson
  })
}

export function update(standardInput) {
  return request({
    url: '/vertify/input/update',
    method: 'post',
    data: standardInput
  })
}

export function getOne(id) {
  return request({
    url: '/vertify/input/getOneResult',
    method: 'get',
    params:{id}
  })
}

export function getMaxUniqueKey() {
  return request({
    url: '/vertify/input/getMaxUniqueKey',
    method: 'get',
  })
}


export function list(params) {
  return request({
    url: '/vertify/input/list',
    method: 'post',
    data:params
  })
}

export function deleteBatch(idList){
  return request({
    url: '/vertify/input/delete',
    method: 'post',
    data: idList
  })
}


