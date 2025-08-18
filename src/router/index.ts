import { createRouter, createWebHistory } from "vue-router";
const lazyLoad = (componentPath: string): (() => Promise<any>) => {
  return () => import(`../components/${componentPath}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: "/", redirect: "/Home" },
    {
      path: "/Login",
      name: "Login",
      component: lazyLoad("Login"),
    },
    {
      path: "/Signup",
      name: "Signup",
      component: lazyLoad("Signup"),
    },
    {
      path: "/Home",
      name: "Home",
      component: lazyLoad("Home"),
    },
    {
      path: "/Home_Login",
      name: "Home With Login",
      component: lazyLoad("Home_Login"),
    },
    {
      path: "/Right_window",
      name: "Right Window",
      component: lazyLoad("Right_window"),
    },
  ],
});
export default router;
