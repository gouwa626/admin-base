import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { getConfig } from '@/config';
import { createPinia } from 'pinia';
import '@/style/index.scss';
(async function () {
  const conf = await getConfig();
  // 挂载配置文件
  window.$conf = conf;
  // 创建app
  const app = createApp(App);
  // 设置路由
  await setupRouter(app);
  //设置pinia
  app.use(createPinia());
  // 挂载App
  app.mount('#app');
})();
