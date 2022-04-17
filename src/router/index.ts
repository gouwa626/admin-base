import { constantRoutes } from './routes/index';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { App } from 'vue';
import { createRouterGuard } from './guard';

const routes: Array<RouteRecordRaw> = constantRoutes;

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
}
