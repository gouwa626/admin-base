import Axios from 'axios';

const request = Axios.create({});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use(
  (response) => {
    console.log(response);
    for (let index = 0; index < 10; index++) {
      window.$message.error('系统错误');
    }
  },
  (error) => {
    window.$message.error('系统错误');
    console.log(error);
  }
);
export default request;
