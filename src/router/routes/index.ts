import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';
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
        path: 'about',
        name: 'about',
        component: () => import('@/views/About/index.vue'),
      },
    ],
  },
];
