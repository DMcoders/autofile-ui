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

export function getWriteDetail(data) {
  return request({
    url: '/vertify/certFileInput/getWriteDetail',
    method: 'post',
    data: data,
  })
}

export function sumbitWriteTextDetail(data) {
  return request({
    url: '/vertify/certFileInput/sumbitWriteTextDetail',
    method: 'post',
    data: data
  })
}

export function sumbitWriteAnnexDetail(data) {
  return request({
    url: '/vertify/certFileInput/sumbitWriteAnnexDetail',
    method: 'post',
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
    timeout: 20000
  })
}

export function homePageReview() {
  return request({
    url: '/vertify/certFileInput/homePageReview',
    method: 'get'
  })
}

export function getReviewDetail(data) {
  return request({
    url: '/vertify/certFileInput/getReviewDetail',
    method: 'post',
    data:data,
    timeout: 20000
  })
}

export function submitReviewDetail(data) {
  return request({
    url: '/vertify/certFileInput/submitReviewDetail',
    method: 'post',
    data: data
  })
}

export function homePageModify(data) {
  return request({
    url: '/vertify/certFileInput/homePageModify',
    method: 'post',
    data: data
  })
}

export function getModifyDetail(data) {
  return request({
    url: '/vertify/certFileInput/getModifyDetail',
    method: 'post',
    data: data,
    timeout: 20000
  })
}

export function homePageFinish() {
  return request({
    url: '/vertify/certFileInput/homePageFinish',
    method: 'get'
  })
}

export function getFinishDetail(data) {
  return request({
    url: '/vertify/certFileInput/getFinishDetail',
    method: 'post',
    data: data,
    timeout: 20000
  })
}

export function getWritedCertifications(data) {
  return request({
    url: '/vertify/certFileInput/getWritedCertifications',
    method: 'post',
    data: data,
    timeout: 20000
  })
}

export function getWritedInputs(data) {
  return request({
    url: '/vertify/certFileInput/getWritedInputs',
    method: 'post',
    data: data
  })
}

export function getAllWritedInputs(data) {
  return request({
    url: '/vertify/certFileInput/getAllWritedInputs',
    method: 'get',
    params:{certificationId:data}
  })
}

export function getCertificationFilesByCertificationId(data) {
  return request({
    url: '/vertify/certFileInput/getCertificationFilesByCertificationId',
    method: 'get',
    params:{certificationId:data}
  })
}

export const nodeServiceUrl = "http://47.96.124.139:8091"



