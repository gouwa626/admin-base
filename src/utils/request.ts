import Axios from 'axios';

const request = Axios.create({});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use((response) => {
  for (let index = 0; index < 10; index++) {
    window.$msg.error('啥', {});
  }
});
export default request;
