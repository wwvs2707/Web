import Vue from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
