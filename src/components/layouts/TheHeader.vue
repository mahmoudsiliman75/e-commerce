<template>
  <header>
    <!-- START:: UPPER BAR -->
    <div class="upper_bar">
      <div class="container">
        <div class="wraper">
          <div class="header_message_wraper">Welcome To Our E-commerce</div>

          <div class="action_btns_wraper">
            <ul>
              <li>
                <router-link to="/" v-b-tooltip.hover title="Contact Us">
                  <MapPinIcon size="1.3x" class="map_pin_icon" />
                  <span> Contact </span>
                </router-link>
              </li>

              <li>
                <router-link to="/" v-b-tooltip.hover title="Sign In">
                  <UserIcon size="1.3x" class="user_icon" />
                  <span> Sign In </span>
                </router-link>
              </li>

              <li class="language_wraper">
                <button
                  class="btn en"
                  v-b-tooltip.hover
                  title="English"
                  @click="setAppLang('ar')"
                  v-if="lang == 'en'"
                >
                  <img src="../../assets/media/icons/langs/en.png" />
                </button>

                <button
                  class="btn ar"
                  v-b-tooltip.hover
                  title="العربية"
                  @click="setAppLang('en')"
                  v-if="lang == 'ar'"
                >
                  <img src="../../assets/media/icons/langs/ar.png" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: UPPER BAR -->

    <!-- START:: MAIN BAR -->
    <div class="main_bar">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-2 d-flex justify-content-center">
            <div class="logo_wraper">
              <router-link to="/">
                <img src="../../assets/media/logo/logo.png" alt="Site Logo" />
              </router-link>
            </div>
          </div>

          <div class="col-6">
            <div class="search_bar">
              <form>
                <div class="group">
                  <input
                    type="text"
                    class="form-control"
                    id="search_value"
                    placeholder="Search...."
                  />
                  <button class="btn">
                    <img src="../../assets/media/icons/header/search.png" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="col-4">
            <div class="action_btns_wraper">
              <ul>
                <li>
                  <a
                    href="tel:01001010101010"
                    class="btn d-flex align-items-center"
                    v-b-tooltip.hover
                    title="Call Us"
                  >
                    <PhoneCallIcon size="2.3x" class="phone_icon me-3" />
                    <div class="text">
                      <span> Call Us Now: </span>
                      <span> 01001010101 </span>
                    </div>
                  </a>
                </li>

                <li>
                  <router-link to="/" v-b-tooltip.hover title="Wishlist">
                    <HeartIcon size="2.3x" class="heart_icon" />
                  </router-link>
                </li>

                <li>
                  <button
                    class="btn cart d-flex align-items-center"
                    v-b-tooltip.hover
                    title="Cart"
                    @click="openCartMenu"
                  >
                    <div class="text pe-1">
                      <span> Shopping Cart: </span>
                      <span> 0 EGP </span>
                    </div>

                    <ShoppingCartIcon size="2.3x" class="cart_icon" />
                    <span class="badge"> 0 </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: MAIN BAR -->

    <!-- START:: CART MENU -->
    <div
      class="cart_menu_wraper"
      :class="{ show: cartMenuIsOpen }"
      @click="closeCartMenu"
    >
      <div class="cart_menu">
        <div class="menu_header">
          <h6 class="m-0">Shopping Cart</h6>
          <button class="btn" @click="closeCartMenu">
            <XIcon size="1.3x" />
            Close
          </button>
        </div>
      </div>
    </div>
    <!-- END:: CART MENU -->

    <!-- START:: NAVBAR -->
    <div class="navbar_wraper">
      <div class="container">
        <ul>
          <li>
            <router-link to="/"> Home </router-link>
          </li>

          <li>
            <router-link to="/about"> About Us </router-link>
          </li>

          <li>
            <router-link to="/contact"> Contact Us </router-link>
          </li>

          <li>
            <button>Mega Menu</button>
          </li>

          <li>
            <router-link to="/sample"> Link Sample </router-link>
          </li>

          <li>
            <router-link to="/sample"> Link Sample </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- END:: NAVBAR -->
  </header>
</template>

<script>
import {
  XIcon,
  MapPinIcon,
  UserIcon,
  PhoneCallIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "vue-feather-icons";

export default {
  name: "Header",

  components: {
    XIcon,
    MapPinIcon,
    UserIcon,
    PhoneCallIcon,
    HeartIcon,
    ShoppingCartIcon,
  },

  data() {
    return {
      // START:: CART MENU HANDLING DATA
      cartMenuIsOpen: false,
      // END:: CART MENU HANDLING DATA

      // START:: LANGUAGE DATA
      lang: localStorage.getItem("dashboard_lang"),
      // END:: LANGUAGE DATA
    };
  },

  methods: {
    // START:: HANDLING APPLICATION LANGUAGE
    setAppLang(selected_lang) {
      if (selected_lang == "en") {
        localStorage.setItem("dashboard_lang", "en");
        this.$i18n.locale = localStorage.getItem("dashboard_lang");
        this.lang = localStorage.getItem("dashboard_lang");
        location.reload();
      } else if (selected_lang == "ar") {
        localStorage.setItem("dashboard_lang", "ar");
        this.$i18n.locale = localStorage.getItem("dashboard_lang");
        this.lang = localStorage.getItem("dashboard_lang");
        location.reload();
      }
    },
    // END:: HANDLING APPLICATION LANGUAGE

    // START:: HANDILLING STICKY HEADER
    stickyHeader() {
      let header = document.querySelector("header");
      let headerHeight = header.clientHeight;
      window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
          header.classList.add("sticky");
          document.querySelector("body").style.paddingTop = headerHeight + "px";
        } else {
          header.classList.remove("sticky");
          document.querySelector("body").style.paddingTop = 0;
        }
      });
    },
    // END:: HANDILLING STICKY HEADER

    // START:: OPEN CART MENU
    openCartMenu() {
      this.cartMenuIsOpen = true;
    },
    // END:: OPEN CART MENU

    // START:: CLOSE CART MENU
    closeCartMenu() {
      this.cartMenuIsOpen = false;
    },
    // END:: CLOSE CART MENU
  },

  mounted() {
    // START:: HANDILLING STICKY HEADER
    this.stickyHeader();
    // END:: HANDILLING STICKY HEADER
  },
};
</script>
