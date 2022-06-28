import request from '@/utils/request';
import { PaginationInfo } from 'naive-ui';
//分页查询
export function channelList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/application/list?page=${pagination.page - 1}&size=${
      pagination.pageSize
    }`,
  });
}
export function channelAllList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/application/list?page=${pagination.page}&size=${pagination.pageSize}`,
  });
}
