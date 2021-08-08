import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import AllCategories from "../pages/AllCategories.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import MainCart from "../pages/MainCart.vue";
import Wishlist from "../pages/Wishlist.vue";
import Profile from "../pages/UserProfile.vue";
import Dashboard from "../components/profile/Dashboard.vue";
import Orders from "../components/profile/Orders.vue";
import Address from "../components/profile/Address.vue";
import AccountDetails from "../components/profile/AccountDetails.vue";
import ChangePassword from "../components/profile/ChangeAccountPassword.vue";
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
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "/dashboard",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "/address",
        name: "Address",
        component: Address,
      },
      {
        path: "/account-details",
        name: "AccountDetails",
        component: AccountDetails,
      },
      {
        path: "/change-password",
        name: "ChangePassword",
        component: ChangePassword,
      },
    ]
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
