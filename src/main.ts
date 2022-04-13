import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { getConfig } from '@/config';
import { createPinia } from 'pinia';

(async function () {
  const conf = await getConfig();
  // 挂载配置文件
  window.$conf = conf;
  createApp(App).use(router).use(createPinia()).mount('#app');
})();
