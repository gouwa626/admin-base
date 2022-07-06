import Axios from 'axios';
import { useCookies } from '@vueuse/integrations/useCookies';
import { router } from '@/router/index';

const request = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    AppKey: 'S-01001',
  },
});
// 按照axios官方提示需要引入这两步
const CancelToken = Axios.CancelToken;
const source = CancelToken.source();
const cookies = useCookies();
request.interceptors.request.use((config) => {
  config.headers!.token = cookies.get('token') || '';
  return config;
});
request.interceptors.response.use(
  (response) => {
    if (response.data.code == 1000) {
      return Promise.resolve(response.data.data);
    } else {
      // 登录页接口报错不提示
      if (window.location.href.indexOf('login') == -1) {
        window.$message.error(response.data.msg || `接口请求异常，请检查`);
      }
      if (response.data.code == 1005) {
        cookies.remove('token');
        router.push('/login');
      }
      return Promise.reject(response.data);
    }
  },
  (error) => {
    window.$message.error('系统错误');
    console.log(error);
  }
);
export default request;
