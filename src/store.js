import Vue from "vue";
import Vuex from "vuex";
import API_CONFIG from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    accessToken: window.localStorage.access_token || '',
    isLogin: false,
    userInfo: {
      avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',     // 头像
      id: '',             //用户id
      loginname: '',      //用户名
    },
    messageCount: 0,      //未读消息数
  },
  mutations: {
    //退出登录
    logout(state) {
      window.localStorage.removeItem('access_token');
      state.accessToken = '';
      state.isLogin = false;
    },
    //更新登录状态
    
  },
  actions: {

  }
});
