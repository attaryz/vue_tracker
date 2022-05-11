import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Create from "../views/Create.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },

        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/create",
            name: "CreatePage",
            component: Create
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
    ],
});

export default router;
