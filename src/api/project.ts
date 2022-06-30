import { ProjectRow } from '../typings/project';
import request from '@/utils/request';
import { PaginationInfo } from 'naive-ui';

//分页查询
export function projectList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/project/list?page=${
      pagination.page - 1
    }&size=${pagination.pageSize}`,
  });
}
export function projectAllList(pagination: PaginationInfo) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/project/list?page=${pagination.page}&size=${pagination.pageSize}`,
  });
}
// 获取项目下的资源
export function projectResource(ProjectId: string) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/project/resource/list?id=${ProjectId}&page=0&size=0`,
  });
}
export function projectDetail(id: string | number) {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/project/info?id=${id}`,
  });
}
export function projectAdd(data: ProjectRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/project/add`,
    data: data,
  });
}
export function projectUpdate(data: ProjectRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/project/update`,
    data: data,
  });
}
export function projectDelete(data: ProjectRow) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/project/delete`,
    data: data,
  });
}
