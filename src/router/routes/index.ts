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
        path: 'channel',
        name: 'channel',
        component: () => import('@/views/Channel/index.vue'),
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/Resource/index.vue'),
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/Project/index.vue'),
      },
      {
        path: 'toauth',
        name: 'toauth',
        component: () => import('@/views/Toauth/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
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
