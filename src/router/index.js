import Vue from "vue";
import VueRouter from "vue-router";
import BlankLayout from "@/views/BlankLayout.vue";
import PageLayout from "@/views/PageLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: BlankLayout,
    children: [
      {
        path: "home",
        name: "레이아웃",
        component: PageLayout,
        children: [
          {
            path: "main",
            name: "대시보드",
            component: () => import("@/views/main/Main.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
