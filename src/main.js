// core
import Vue from "vue";
import App from "./App.vue";

// ui
import ElementUI from "element-ui";
Vue.use(ElementUI);

// store & router
import router from "./router";
import store from "./store";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
