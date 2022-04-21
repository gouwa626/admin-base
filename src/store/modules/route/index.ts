import { defineStore } from 'pinia';
import { mockRouters } from '@/mock/menuData';
type routeState = Route.RouterInfos;
export const useRouteStore = defineStore('route-store', {
  state: (): routeState => {
    return {
      routerInfos: mockRouters,
    };
  },

  actions: {},
});
