import request from '@/utils/request'


export function addOrUpdate(data) {
  return request({
    url: '/vertify/file/addOrUpdate',
    method: 'post',
    data: data
  })
}

export function update(standardFileJson,fileInputListJson) {
  return request({
    url: '/vertify/input/update',
    method: 'post',
    params: {
      standardFileJson:standardFileJson,
      fileInputListJson:fileInputListJson
    }
  })
}

export function get(id) {
  return request({
    url: '/vertify/file/detail',
    method: 'post',
    params:{standardFileId:id}
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


