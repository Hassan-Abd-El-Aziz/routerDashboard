import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../pages/master/DashBoard.vue";
import home from "../pages/Home.vue";
import profile from "../pages/Profile.vue";
const routes = [
  {
    name: "DashBoard",
    path: "/",
    component: DashBoard,
    children: [
      {
        name: "Home",
        path: "/home",
        component: home,
      },
      {
        name: "Profile",
        path: "/profile",
        component: profile,
      },
    ],
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
