import request from '@/utils/request'


export function addOrUpdate(data) {
  return request({
    url: '/vertify/cert/addOrUpdate',
    method: 'post',
    data: data
  })
}

export function getCertificationList(data) {
  return request({
    url: '/vertify/cert/getCertificationList',
    method: 'post',
    params:{certification:data}
  })
}

export function getOne(data) {
  return request({
    url: '/vertify/cert/getCertificationById',
    method: 'get',
    params:{certificationId:data}
  })
}

export function deleteCertification(data) {
  return request({
    url: '/vertify/cert/delete',
    method: 'post',
    params:{certificationId:data}
  })
}

