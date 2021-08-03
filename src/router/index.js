import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import AllCategories from "../pages/AllCategories.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import MainCart from "../pages/MainCart.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all-categories",
    name: "AllCategories",
    component: AllCategories,
  },
  {
    path: "/product/:product_id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/main-cart",
    name: "MainCart",
    component: MainCart,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

export default router;
