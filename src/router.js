import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/list-produk",
        name: "listproduk",
        component: () => import("./views/Produk/List.vue")
    },
    {
        path: "/add-produk",
        name: "addproduk",
        component: () => import("./views/Produk/Add")
    },
    {
        path: "/edit-produk/:id",
        name: "editproduk",
        component: () => import("./views/Produk/Add")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router