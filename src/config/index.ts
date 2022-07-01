import axios from 'axios';
/**
 * @description: 获取配置文件
 * @param {*}
 * @return 配置文件json
 */
export async function getConfig() {
  if (process.env.NODE_ENV == 'development') {
    return require('./dev.json');
  } else {
    await axios.get('/config.json').then((res) => {
      return res.data;
    });
  }
}
