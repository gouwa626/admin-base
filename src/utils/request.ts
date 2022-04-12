import Axios from 'axios';

const request = Axios.create({});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use((response) => {
  for (let index = 0; index < 10; index++) {
    window.$message.error('啥');
    window.$message.success('啥');
  }
});
export default request;
