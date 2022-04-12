import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { getConfig } from '@/config';

(async function () {
  const conf = await getConfig();
  const APP = createApp(App);
  // 挂载配置文件
  window.$conf = conf;
  APP.use(store).use(router).mount('#app');
})();
