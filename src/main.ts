import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { getConfig } from '@/config';
import { createPinia } from 'pinia';
import '@/style/index.scss';
import { importSvgIcons } from '@/utils/icon';

importSvgIcons();
import 'uno.css';
(async () => {
  // 挂载配置文件
  window.$conf = await getConfig();
  // 创建app
  const app = createApp(App);
  // 设置路由
  await setupRouter(app);
  //设置pinia
  app.use(createPinia());
  // 挂载App
  app.mount('#app');
})();
