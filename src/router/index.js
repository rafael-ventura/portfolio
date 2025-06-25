import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", redirect: "/" },
    { path: "/projects", redirect: "/" },
    { path: "/contact", redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
