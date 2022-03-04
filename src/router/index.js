import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

const Index = () => import("../views/Index.vue");

const routes = [
    { name: "index", path: "/", component: Index },
];

const router = new VueRouter({
    // mode: "history",
    // base: '/team',
    routes,
});

export default router;
