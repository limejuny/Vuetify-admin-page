import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
