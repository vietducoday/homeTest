import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import Home from "./components/pages/Home.vue";
import MyImages from "./components/pages/MyImages.vue";
import Login from "./components/pages/Login.vue";
import Signup from "./components/pages/Signup.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },
      { path: "/images", name: "MyImages", component: MyImages },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
