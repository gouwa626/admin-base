import { ResourceRow } from '../typings/resource';
import request from '@/utils/request';
import { PaginationInfo } from 'naive-ui';

//分页查询
export function resourceList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/resource/list?page=${
      pagination.page - 1
    }&size=${pagination.pageSize}`,
  });
}
export function resourceAllList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/resource/list?page=${pagination.page}&size=${pagination.pageSize}`,
  });
}
export function resourceDetail(id: string | number) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/resource/info?id=${id}`,
  });
}
export function resourceAdd(data: ResourceRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/resource/add`,
    data: data,
  });
}
export function resourceUpdate(data: ResourceRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/resource/update`,
    data: data,
  });
}
export function resourceDelete(data: ResourceRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/resource/delete`,
    data: data,
  });
}
