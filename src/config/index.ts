import axios from 'axios';
export function getConfig() {
  console.log(process.env);
  if (process.env.NODE_ENV == 'development') {
    // return require('./dev.json');
    axios.get('./prod.json').then((res) => {
      console.log(res);
    });
  } else {
    axios.get('/config.json').then((res) => {
      console.log(res);
    });
  }
}
