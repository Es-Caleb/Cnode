import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "HomePage", //主页
      path: "/",
      component: () => import("@/views/index/Index")
    },
    {
      name: "Login", //登录页
      path: "/login",
      component: () => import("@/views/login/Login")
    },
    {
      name: "User", //个人主页
      path: "/user/:loginname",
      component: () => import("@/views/user/User")
    },
    {
      name: "Collections", //收藏页
      path: "/user/:loginname/collections",
      component: () => import("@/views/collections/Collections")
    },
    {
      name: "Messages", //未读消息
      path: "/messages",
      component: () => import("@/views/messages/Messages")
    },
    {
      name: "Release", //发布话题
      path: "/release/:id",
      component: () => import("@/views/release/Release")
    },
    {
      name: "NotMatch", //404
      path: "*",
      component: () => import("@/views/404/404")
    }
  ]
});
