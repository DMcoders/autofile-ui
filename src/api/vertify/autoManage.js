import request from '@/utils/request'

export function addAndUpload (data) {
  return request({
    method: 'post',
    url: '/vertify/auto/addAndUpload',
    timeout: 20000,
    data: data
  })
}

export function list(params) {
  return request({
    url: '/vertify/auto/list',
    method: 'post',
    data:params
  })
}

export function getAutoCascader() {
  return request({
    url: '/vertify/auto/getAutoCascader',
    method: 'post'
  })
}

export function getOne(id) {
  return request({
    url: '/vertify/auto/getOne',
    method: 'get',
    params:{id}
  })
}


export function deleteSingle(id){
  return request({
    url: '/vertify/auto/delete',
    method: 'get',
    params:{id}
  })
}
