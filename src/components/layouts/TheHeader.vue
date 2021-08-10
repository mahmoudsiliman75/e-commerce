<template>
  <header>
    <!-- START:: UPPER BAR -->
    <div class="upper_bar">
      <div class="container">
        <div class="wraper">
          <div class="header_message_wraper">Welcome To Our E-commerce</div>
          <!-- <marquee> Welcome To Our E-commerce </marquee> -->

          <div class="action_btns_wraper">
            <ul>
              <li>
                <router-link to="/" v-b-tooltip.hover title="Contact Us">
                  <MapPinIcon size="1.3x" class="map_pin_icon" />
                  <span> Contact </span>
                </router-link>
              </li>

              <li class="d-flex justify-center align-items-center">
                <router-link
                  to="/login"
                  v-b-tooltip.hover
                  title="Sign In"
                  class="mx-1"
                >
                  <UserIcon size="1.3x" class="user_icon" />
                  <span> Sign In </span>
                </router-link>

                <router-link
                  to="/dashboard"
                  v-b-tooltip.hover
                  title="Profile"
                  class="mx-1"
                >
                  <UserIcon size="1.3x" class="user_icon" />
                  <span> Profile </span>
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
                    <SearchIcon size="1.6x" class="search_icon" />
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
                  <router-link
                    to="/wishlist"
                    v-b-tooltip.hover
                    title="Wishlist"
                  >
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
                      <span> {{ this.$store.state.cartSubtotal }} EGP </span>
                    </div>

                    <ShoppingCartIcon size="2.3x" class="cart_icon" />
                    <span class="badge">
                      {{ this.$store.state.shoppingCart.length }}
                    </span>
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
    ></div>
    <div class="cart_menu">
      <div class="menu_header mb-3">
        <h6 class="m-0">Shopping Cart</h6>
        <button class="btn" @click="closeCartMenu">
          <XIcon size="1.3x" />
          Close
        </button>
      </div>

      <h5
        class="my-5 text-center"
        v-if="this.$store.state.shoppingCart.length == 0"
      >
        No Items Added To The Cart
      </h5>

      <div class="cart_body" v-else>
        <!-- START:: CART ITEM -->
        <div
          class="item my-4"
          v-for="item in this.$store.state.shoppingCart"
          :key="item.id"
        >
          <div class="row">
            <div class="col-3">
              <div class="img_wraper">
                <img :src="item.images[0].img" alt="Product Image" />
              </div>
            </div>

            <div
              class="
                col-9
                d-flex
                flex-column
                justify-content-between
                align-items-start
              "
            >
              <div class="title">
                <h5>
                  <router-link to="/">
                    {{ item.productName }}
                  </router-link>
                </h5>
                <button @click="removeFromCart(item)">
                  <XIcon size="1.1x" />
                </button>
              </div>
              <h5>
                <span class="count"> {{ item.quantity }} X </span>
                <span class="price" v-if="item.discount.length == 0">
                  {{ item.price }} EGP
                </span>
                <span class="price" v-else> {{ item.discount }} EGP </span>
              </h5>
            </div>
          </div>
        </div>
        <!-- END:: CART ITEM -->

        <!-- START:: SUBTOTAL -->
        <div class="subtotal_wraper">
          <h5>Subtotal:</h5>
          <h5>{{ this.$store.state.cartSubtotal }} EGP</h5>
        </div>
        <!-- END:: SUBTOTAL -->

        <!-- START:: GO TO MAIN CART ROUTE -->
        <div class="wraper">
          <router-link to="/main-cart"> View Cart </router-link>
        </div>
        <!-- END:: GO TO MAIN CART ROUTE -->

        <!-- START:: CHECKOUT ROUTE -->
        <router-link to="/" class="checkout"> GO TO CHECKOUT </router-link>
        <!-- END:: CHECKOUT ROUTE -->
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
            <router-link to="/all-categories"> All Categories </router-link>
          </li>

          <li>
            <router-link to="/about"> About Us </router-link>
          </li>

          <li>
            <router-link to="/contact"> Contact Us </router-link>
          </li>

          <li>
            <a href="javascript:;" class="dropdown">Mega Menu</a>
            <div class="dropdown_menu_wraper mega_menu">
              <div class="row">
                <div class="col-12 col-md-4">
                  <h6> Items Title 1 </h6>
                  <ul>
                    <li>  
                      <router-link to="/test"> Link Sample 1 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  2 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  3 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  4 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  5 </router-link>
                    </li>
                  </ul>   
                </div>

                <div class="col-12 col-md-4">
                  <h6> Items Title 2 </h6>
                  <ul>
                    <li>  
                      <router-link to="/test"> Link Sample  1 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  2 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  3 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  4 </router-link>
                    </li>

                    <li>  
                      <router-link to="/test"> Link Sample  5 </router-link>
                    </li>
                  </ul>  
                </div>

                <div class="col-12 col-md-4 p-0">
                  <div class="img_wraper">
                    <div class="overlay">
                      <h2>Sale.</h2>
                      <h2>70% Off</h2>
                    </div>
                    <img src="https://d-themes.com/vue/riode/demo-1/images/menu/banner-1.jpg">
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <router-link to="/sample"> Dropdown Menu </router-link>
            <div class="dropdown_menu_wraper">
              <ul>
                <li>  
                  <router-link to="/test"> Link Sample 1 </router-link>
                </li>

                <li>  
                  <router-link to="/test"> Link Sample  2 </router-link>
                </li>

                <li>  
                  <router-link to="/test"> Link Sample  3 </router-link>
                </li>

                <li>  
                  <router-link to="/test"> Link Sample  4 </router-link>
                </li>

                <li>  
                  <router-link to="/test"> Link Sample  5 </router-link>
                </li>
              </ul>  
            </div>
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
  SearchIcon,
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
    SearchIcon,
  },

  data() {
    return {
      // START:: CART MENU HANDLING DATA
      cartMenuIsOpen: false,
      // END:: CART MENU HANDLING DATA

      // START:: LANGUAGE DATA
      lang: localStorage.getItem("ecommerce_lang"),
      // END:: LANGUAGE DATA
    };
  },

  methods: {
    // START:: HANDLING APPLICATION LANGUAGE
    setAppLang(selected_lang) {
      if (selected_lang == "en") {
        localStorage.setItem("ecommerce_lang", "en");
        this.$i18n.locale = localStorage.getItem("ecommerce_lang");
        this.lang = localStorage.getItem("ecommerce_lang");
        location.reload();
      } else if (selected_lang == "ar") {
        localStorage.setItem("ecommerce_lang", "ar");
        this.$i18n.locale = localStorage.getItem("ecommerce_lang");
        this.lang = localStorage.getItem("ecommerce_lang");
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

    // START:: GETSUBTOTAL
    cartSubtotal() {
      this.$store.commit("getSubtotal");
    },
    // END:: GETSUBTOTAL

    // START:: REMOVE ITEM FROM CART
    removeFromCart(item) {
      this.$store.dispatch("removeItemFromCart", { item });
    },
    // END:: REMOVE ITEM FROM CART
  },

  mounted() {
    // START:: HANDILLING STICKY HEADER
    this.stickyHeader();
    // END:: HANDILLING STICKY HEADER

    // START:: GET CART SUBTOTAL
    this.cartSubtotal();
    // END:: GET CART SUBTOTAL
  },
};
</script>
