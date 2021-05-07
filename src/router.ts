import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("@/pages/Faq.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/Contact.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    setTimeout(() => {
      document.getElementById("content").scrollTo(0, 0);
    }, 500);
  },
});
