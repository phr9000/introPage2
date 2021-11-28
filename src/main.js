import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

// import { Empty } from "ant-design-vue";

Vue.use(Antd);
Vue.use(VueFullPage);
Vue.config.productionTip = false;

// 슬라이드 플러그인
Vue.use(VueGlide);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
