import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";
import "./assets/scss/media.scss";
import store from "./store";
import Sidebar from "./components/sidebar/Sidebar";
import List from "./components/topics-list/TopicsList";


Vue.config.productionTip = false;

Vue.component("Sidebar", Sidebar);
Vue.component("List", List);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
