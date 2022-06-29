import Axios from 'axios';

const request = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    AppKey: 'S-01001',
  },
});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use(
  (response) => {
    if (response.data.code == 1000) {
      return Promise.resolve(response.data);
    } else {
      window.$message.error(`接口请求异常，请检查`);
      return Promise.reject(response.data);
    }
  },
  (error) => {
    window.$message.error('系统错误');
    console.log(error);
  }
);
export default request;
