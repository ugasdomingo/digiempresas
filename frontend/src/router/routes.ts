import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'servicios', component: () => import('pages/ServicesPage.vue') },
      { path: 'portafolio', component: () => import('pages/PortfolioPage.vue') },
      { path: 'cursos', component: () => import('pages/CoursesPage.vue') },
      /* PAGINAS DE CURSOS */
      { path: 'ads-profesional', component: () => import('pages/AdsProCoursePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
