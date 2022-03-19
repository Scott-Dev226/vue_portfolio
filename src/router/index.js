import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import SkillsView from "../components/SkillsView.vue";
import ProjectsView from "../components/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/AboutView.vue"),
      component: () => import("../components/SkillsView.vue"),
    },
  ],
});

export default router;
