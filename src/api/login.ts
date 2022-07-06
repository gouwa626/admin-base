import { loginType } from '@/typings/login';
import request from '@/utils/request';
//登入
export function loginIn(data: loginType) {
  return request({
    method: 'post',
    url: `${window.$conf.baseUrl}/manager/gatewaylogin`,
    data: data,
  });
}
//登入
export function loginOut() {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/manager/gatewayloginout`,
  });
}
