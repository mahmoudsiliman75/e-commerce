import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import AllCategories from "../pages/AllCategories.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import MainCart from "../pages/MainCart.vue";
// START:: Auth
import Auth from "../pages/Auth.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
// END:: Auth
// START:: STATIC PAGES
import About from "../components/basics/staticPages/About.vue";
import Contact from "../components/basics/staticPages/Contact.vue";
import Faqs from "../components/basics/staticPages/Faqs.vue";
// END:: STATIC PAGES
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
  // START:: AUTH
  {
    path: "/login",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
  // END:: STATIC PAGES
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: Faqs,
  },
  // END:: STATIC PAGES
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
    ],
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
