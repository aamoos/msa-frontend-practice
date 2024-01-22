import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/MainComponent.vue";

const routes = [
    {
        path: "/",  // TestComponent.vue로 이동할 Path
        name: "Main",  // router name
        component: Main,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;