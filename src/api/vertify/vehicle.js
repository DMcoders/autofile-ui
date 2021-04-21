import request from '@/utils/request'


export function saveVehicleInfo(params) {
  return request({
    url: '/certificate/vehicle/saveVehicleInfo',
    method: 'post',
    data:params
  })
}

export function queryVehicleTree() {
  return request({
    url: '/certificate/vehicle/queryVehicleTree',
    method: 'post'
  })
}

export function getVehicleFiles(params) {
  return request({
    url: '/certificate/vehicle/getVehicleFiles',
    method: 'get',
    params:params
  })
}

export function delVehicleFile(params) {
  return request({
    url: '/certificate/vehicle/delVehicleFile',
    method: 'get',
    params:params
  })
}

export function updateVehicleFileInfo(params) {
  return request({
    url: '/certificate/vehicle/updateVehicleFileInfo',
    method: 'get',
    params:params
  })
}

export function submitUpload(data) {
  return request({
    url: '/certificate/vehicle/submitUpload',
    method: 'post',
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
    timeout: 20000
  })
}

export function getFile(url) {
  return request({
    url: url,
    method: 'get',
    responseType: 'arraybuffer',
    timeout: 20000
  })
}


