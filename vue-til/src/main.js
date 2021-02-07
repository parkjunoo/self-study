import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import axios from "axios"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  axios
}).$mount("#app");
