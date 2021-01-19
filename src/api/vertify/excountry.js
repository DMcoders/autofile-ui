import request from '@/utils/request'

export function getWorld() {
  return request({
    url: '/vertify/excountry/getAllCountry',
    method: 'get',
    params: {}
  })
}

export function fuzzyQueryExCountryByPage(params) {
  return request({
    url: '/vertify/excountry/fuzzyQueryExCountryByPage',
    method: 'post',
    data: params
  })
}

export function updateCountryFile(params) {
  return request({
    url: '/vertify/excountry/updateCountryFile',
    method: 'post',
    data: params
  })
}

export function queryCountryFile(params) {
  return request({
    url: '/vertify/excountry/queryCountryFile',
    method: 'post',
    data: params
  })
}
