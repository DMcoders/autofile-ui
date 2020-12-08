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
    data:data
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

export function certificationDispatch(data) {
  return request({
    url: '/vertify/certFileInput/certificationDispatch',
    method: 'get',
    params:{certificationId:data}
  })
}

export function homePageWrite(data) {
  return request({
    url: '/vertify/certFileInput/homePageWrite',
    method: 'post',
    data: data
  })
}

export function homePageReview() {
  return request({
    url: '/vertify/certFileInput/homePageReview',
    method: 'get'
  })
}

export function homePageModify(data) {
  return request({
    url: '/vertify/certFileInput/homePageModify',
    method: 'post',
    data: data
  })
}

export function homePageFinish() {
  return request({
    url: '/vertify/certFileInput/homePageFinish',
    method: 'get'
  })
}



