import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route lazy loaded
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/what-i-do",
      name: "what-i-do",
      // route lazy loaded
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/what-i-do-for-fun",
      name: "what-i-do-for-fun",
      // route lazy loaded
      component: () => import("../views/HobbyView.vue"),
    },
  ],
});

export default router;
