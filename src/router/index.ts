import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

const routes: Array<RouteRecordRaw> = [
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
        component: () => import('@/views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
