import request from '@/utils/request'


export function add(standardAnnexListJson) {
  return request({
    url: '/vertify/annex/add',
    method: 'post',
    data: standardAnnexListJson
  })
}


export function update(standardAnnex) {
  return request({
    url: '/vertify/annex/update',
    method: 'post',
    data: standardAnnex
  })
}

export function getOne(id) {
  return request({
    url: '/vertify/annex/getOneResult',
    method: 'get',
    params:{id}
  })
}


export function list(params) {
  return request({
    url: '/vertify/annex/list',
    method: 'post',
    data:params
  })
}

export function deleteBatch(idList){
  return request({
    url: '/vertify/annex/delete',
    method: 'post',
    data: idList
  })
}
