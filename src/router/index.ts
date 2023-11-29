import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../components/LogIn.vue";
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "./route-guards";
import {
  LOGIN_ROUTE_NAME,
  SERVER_STATUS_ROUTE_NAME,
} from "../constants/route-names.constants";

const pageTitlePrefix = "Vue3 workshop @ 2023";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: LOGIN_ROUTE_NAME,
    component: LogIn,
    beforeEnter: [isNotAuthenticatedGuard],
  },
  {
    path: "/status",
    name: SERVER_STATUS_ROUTE_NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ServiceStatus.vue"),
    beforeEnter: [isAuthenticatedGuard],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const title = to.name?.valueOf();
  if (typeof title === "string") {
    document.title = `${pageTitlePrefix} | ${title}`;
  }
});

export default router;
