import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/joblist',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "about" */ '../views/JobList.vue'),
  },
  {
    path: '/jobdetail/:id',
    name: 'JobDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/JobDetail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
