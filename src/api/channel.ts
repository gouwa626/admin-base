import { ChannelRow } from './../typings/channel.d';
import request from '@/utils/request';
import { PaginationInfo } from 'naive-ui';

//分页查询
export function channelList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/application/list?page=${
      pagination.page - 1
    }&size=${pagination.pageSize}`,
  });
}
export function channelAllList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/application/list?page=${pagination.page}&size=${pagination.pageSize}`,
  });
}
export function channelDetail(id: string | number) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/application/info?id=${id}`,
  });
}
export function channelAdd(data: ChannelRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/application/add`,
    data: data,
  });
}
export function channelUpdate(data: ChannelRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/application/update`,
    data: data,
  });
}
export function channelDelete(data: ChannelRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/application/delete`,
    data: data,
  });
}
