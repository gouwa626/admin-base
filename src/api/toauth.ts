import { ToAuthRow } from '../typings/toauth';
import request from '@/utils/request';
import { PaginationInfo } from 'naive-ui';

//分页查询
export function toauthList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/authorization/list?page=${
      pagination.page - 1
    }&size=${pagination.pageSize}`,
  });
}
export function toauthAllList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/authorization/list?page=${pagination.page}&size=${pagination.pageSize}`,
  });
}
export function toauthDetail(id: string | number) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/authorization/info?id=${id}`,
  });
}
export function toauthAdd(data: ToAuthRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/authorization/add`,
    data: data,
  });
}
export function toauthUpdate(data: ToAuthRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/authorization/update`,
    data: data,
  });
}
export function toauthDelete(data: ToAuthRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/authorization/delete`,
    data: data,
  });
}
