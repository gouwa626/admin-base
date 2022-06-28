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
    return Promise.resolve(response.data);
  },
  (error) => {
    window.$message.error('系统错误');
    console.log(error);
  }
);
export default request;
