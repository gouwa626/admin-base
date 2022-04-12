import request from '@/utils/request';
//获取用户信息
export function userInfo() {
  return request({
    method: 'get',
    url: `${window.$conf.baseUrl}/usercenter-service/lanPersonalCenter/_search`,
  });
}
