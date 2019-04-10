import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: () => import('@/views/index/Index'),
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/login/Login'),
    },
    {
      name: 'User',
      path: '/user/:loginname',
      component: () => import('@/views/user/User'),
    },
    {
      name: 'Collections',
      path: '/user/:loginname/collections',
      component: () => import("@/views/collections/Collections"),
    },
    {
      name: 'NotMatch',
			path: '*',
			component: () => import('@/views/404/404'),
    }
  ]
});
