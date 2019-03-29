import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name:'HomePage',
      path: '/',
      component: () => import('@/views/index/Index'),
    },
  ]
});
