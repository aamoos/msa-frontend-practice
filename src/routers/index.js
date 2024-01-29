import { createWebHistory, createRouter } from "vue-router";
import BindComponent from "@/components/started/BindComponent.vue";
import IfComponent from "@/components/started/IfComponent.vue";
import ForComponent from "@/components/started/ForComponent.vue";
import ClickComponent from "@/components/started/ClickComponent.vue";
import ListComponent from "@/components/axios/ListComponent.vue";
import InsertComponent from "@/components/axios/InsertComponent.vue";

const routes = [
    //started 탭
    {
        path: "/",
        component: BindComponent
    },
    {
        path: "/started",  // TestComponent.vue로 이동할 Path
        name: "BindComponent",
        component: BindComponent,  // Path로 이동될 Component
    },
    {
        path: "/started/IfComponent",
        name: "IfComponent",
        component: IfComponent,
    },
    {
        path: "/started/ForComponent",
        name: "ForComponent",
        component: ForComponent,
    },
    {
        path: "/started/ClickComponent",
        name: "ClickComponent",
        component: ClickComponent,
    },

    //axios 탭
    {
        path: "/axios/ListComponent",
        name: "ListComponent",
        component: ListComponent,
    },
    {
        path: "/axios/InsertComponent",
        name: "InsertComponent",
        component: InsertComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;