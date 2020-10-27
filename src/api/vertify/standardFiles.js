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


export function list(fileName) {
  return request({
    url: '/vertify/file/list',
    method: 'post',
    params:{fileName:fileName}
  })
}

export function deleteFile(id){
  return request({
    url: '/vertify/file/delete',
    method: 'post',
    params:{standardFileId:id}
  })
}


