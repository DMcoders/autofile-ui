import request from '@/utils/request'


export function addOrUpdate(data) {
  return request({
    url: '/vertify/cert/addOrUpdate',
    method: 'post',
    data: data
  })
}


