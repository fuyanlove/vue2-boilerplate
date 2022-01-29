Vue.config.productionTip = false;

// 第三方UI组件
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 数据与路由
import router from "./router";
import store from "./store";

import App from "./App.vue";
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
