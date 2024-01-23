import { createWebHistory, createRouter } from "vue-router";
import BindComponent from "@/components/BindComponent.vue";

const routes = [
    {
        path: "/BindComponent",  // TestComponent.vue로 이동할 Path
        name: "BindComponent",  // router name
        component: BindComponent,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;