import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//Import bootstrap and bootstrapVue css files (Order is important)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";

//Make both available through the project

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
