import { useCookies } from '@vueuse/integrations/useCookies';
import type {
  Router,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';
const whileRouterList = ['/login'];
export function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
  router: Router
) {
  const cookies = useCookies();
  const token = cookies.get('token') || '';
  if (whileRouterList.includes(to.path)) {
    if (token) {
      next('/home');
      return;
    } else {
      next();
      return;
    }
  } else if (token) {
    next();
    return;
  }
  next('/login');
}
