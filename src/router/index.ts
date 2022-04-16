import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: 'about',
    component: Layout,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
