import type { Router } from 'vue-router';
import { createPermissionGuard } from './permission';
//全局路由守卫
export function createRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    window.$loadingBar?.start();
    // 处理路由权限
    createPermissionGuard(to, from, next, router);
  });
  router.afterEach(() => {
    window.$loadingBar?.finish();
  });
}
