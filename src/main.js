import Vue from "vue";
import App from "./App.vue";

// ======== Bootsrtap
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";

// ======== Font AweSome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// ======== ReSource
import VueResource from "vue-resource";

// ======== iziToast
import iziToast from "izitoast";

// ======== Axios
import axios from "axios";

// ======== Custom Style
import "./assets/css/iziToast.min.css";
import "./assets/sass/main.scss";

// ======== Vuex
import store from "./store";

// ======== Router File
import router from "./router/index.js";

// ======== I18N
import i18n from "./i18n";

// ======== VUETIFY
import vuetify from "./plugins/vuetify";

// ======== Vue Meta
import VueMeta from "vue-meta";

// ======== VUE SOCIAL SHARING
import VueSocialSharing from "vue-social-sharing";

// ======== AOS
import AOS from "aos";
import "aos/dist/aos.css";

// ======== VueLazyload
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

// ======== VueChatScroll

import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

// ======== VueChatScroll
import AudioRecorder from "vue-audio-recorder";
Vue.use(AudioRecorder);

// ============

// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })
// ======== Zoom Images

import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);

// START:: HANDLING SITE DIRECTION
let ecommerce_lang = localStorage.getItem("ecommerce_lang");
if (ecommerce_lang == "ar") {
  document.querySelector("body").setAttribute("dir", "rtl");
} else {
  document.querySelector("body").setAttribute("dir", "ltr");
}
// END:: HANDLING SITE DIRECTION

// START:: GOOGLE MAP
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc",
    libraries: "places",
  },
});
// END:: GOOGLE MAP

AOS.init();
Vue.use(iziToast);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);
Vue.use(VueSocialSharing);
Vue.prototype.$iziToast = iziToast;
Vue.config.productionTip = false;

// AXIOS BASE URL
axios.defaults.baseURL = "";

new Vue({
  router,
  i18n,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
