import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';
// import Content from '@/layouts/GlobalContent/components/Content.vue';
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/Table/index.vue'),
      },
      {
        path: 'modal',
        name: 'modal',
        component: () => import('@/views/Modal/index.vue'),
      },
    ],
  },
  {
    //匹配无效路由
    path: '/:pathMatch(.*)*',
    name: 'not-found-page',
    component: Layout,
    children: [
      {
        path: '',
        name: '404',
        component: () => import('@/views/Error/404.vue'),
      },
    ],
  },
];
