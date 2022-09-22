import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/form-klaim",
        name: "formklaim",
        component: () => import("./views/FormKlaim")
    },
    {
        path: "/foto-klaim",
        name: "fotoklaim",
        component: () => import("./views/FotoKlaim")
    },
    {
        path: "/display-klaim",
        name: "displayklaim",
        component: () => import("./views/DisplayKlaim")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router