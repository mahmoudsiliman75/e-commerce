<template>
  <header>
    <!-- START:: UPPER BAR -->
    <div class="upper_bar">
      <div class="container">
        <div class="wraper">
          <div class="header_message_wraper">Welcome To Our E-commerce</div>
          <marquee scrollamount="5"> Welcome To Our E-commerce </marquee>

          <div class="action_btns_wraper">
            <ul class="actions">
              <li>
                <button
                  class="notifications_btn"
                  @click="toggleNoificationMenu"
                >
                  <span class="badge notification_count"> 5 </span>
                  <BellIcon size="1.5x" />
                </button>

                <transition mode="out-in" name="fade">
                  <div
                    class="notifications_menu_wrapper"
                    v-if="notificationsIsOpen"
                  >
                    <ul>
                      <li>TestTestTestTestTestTestTestTestTestTest</li>
                      <li>TestTestTestTestTestTestTestTestTestTest</li>
                      <li>TestTestTestTestTestTestTestTestTestTest</li>
                    </ul>
                  </div>
                </transition>
              </li>

              <li class="contact_list_item">
                <router-link to="/" v-b-tooltip.hover title="Contact Us">
                  <MapPinIcon size="1.3x" class="map_pin_icon" />
                  <span> {{ $t("contact_us") }} </span>
                </router-link>
              </li>

              <li class="d-flex justify-center align-items-center auth_link">
                <router-link
                  to="/login"
                  v-b-tooltip.hover
                  title="Sign In"
                  class="mx-1"
                  v-if="!this.$store.getters.token"
                >
                  <UserIcon size="1.3x" class="user_icon" />
                  <span> {{ $t("sign_in") }} </span>
                </router-link>

                <router-link
                  to="/dashboard"
                  v-b-tooltip.hover
                  title="Profile"
                  class="mx-1"
                  v-else
                >
                  <UserIcon size="1.3x" class="user_icon" />
                  <span> {{ $t("profile") }} </span>
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
                  <img
                    src="../../assets/media/icons/langs/en.png"
                    width="27"
                    height="27"
                  />
                </button>

                <button
                  class="btn ar"
                  v-b-tooltip.hover
                  title="العربية"
                  @click="setAppLang('en')"
                  v-if="lang == 'ar'"
                >
                  <img
                    src="../../assets/media/icons/langs/ar.png"
                    width="27"
                    height="27"
                  />
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
          <!-- START:: NAVBAR SIDE MENU BUTTON -->
          <div class="col-3 col-md-1 navBar_menu_btn_wraper">
            <div class="navBar_menu_btn">
              <button class="btn" @click="openNavbarMenu">
                <AlignLeftIcon size="1.9x" />
              </button>
            </div>
          </div>
          <!-- START:: NAVBAR SIDE MENU BUTTON -->

          <!-- START:: SIDE NAVBAR MENU -->
          <div
            class="navbar_sticky_menu_wraper"
            :class="{ show: navbarMenuIsOpen }"
            @click="closeNavbarMenu"
          ></div>
          <div class="navbar_menu">
            <div class="menu_header">
              <button class="btn close_btn" @click="closeNavbarMenu">
                <XIcon size="1.8x" />
              </button>
            </div>

            <ul class="navbar_menu_list">
              <li @click="closeNavbarMenu">
                <router-link to="/" class="side_navbar_menu_list_link">
                  {{ $t("home") }}
                </router-link>
              </li>

              <li @click="closeNavbarMenu">
                <router-link
                  to="/all-categories"
                  class="side_navbar_menu_list_link"
                >
                  {{ $t("all_categories") }}
                </router-link>
              </li>

              <li @click="closeNavbarMenu">
                <router-link to="/about" class="side_navbar_menu_list_link">
                  {{ $t("about_us") }}
                </router-link>
              </li>

              <li @click="closeNavbarMenu">
                <router-link to="/contact" class="side_navbar_menu_list_link">
                  {{ $t("contact_us") }}
                </router-link>
              </li>

              <li @click="closeNavbarMenu">
                <router-link
                  to="/login"
                  class="side_navbar_menu_list_link"
                  v-if="!this.$store.getters.token"
                >
                  {{ $t("sign_in") }}
                </router-link>
                <router-link
                  to="/dashboard"
                  class="side_navbar_menu_list_link"
                  v-else
                >
                  {{ $t("profile") }}
                </router-link>
              </li>

              <li>
                <!-- START:: MEGA MENU ACCORDION -->
                <div
                  class="accordion dropdown_menu_accordion mega_menu"
                  id="mega_menu_accordion"
                >
                  <div class="accordion-item">
                    <h5 class="accordion-header" id="mega_menu_heading">
                      <button
                        class="
                          accordion-button
                          collapsed
                          dropdown_menu_accordion_btn
                        "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mega_menu_collapse"
                        aria-expanded="true"
                        aria-controls="mega_menu_collapse"
                      >
                        Mega Menu
                      </button>
                    </h5>
                    <div
                      id="mega_menu_collapse"
                      class="accordion-collapse collapse"
                      aria-labelledby="mega_menu_heading"
                      data-bs-parent="#mega_menu_accordion"
                    >
                      <div class="accordion-body">
                        <!-- START:: MEGA MENU ITEM -->
                        <div
                          class="accordion dropdown_menu_item_accordion mb-5"
                          id="mega_menu_item_1"
                        >
                          <div class="accordion-item">
                            <h6
                              class="accordion-header"
                              id="mega_menu_item_header_1"
                            >
                              <button
                                class="
                                  accordion-button
                                  collapsed
                                  dropdown_menu_item_item_button
                                "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#mega_menu_item_collapse_1"
                                aria-expanded="true"
                                aria-controls="mega_menu_item_collapse_1"
                              >
                                Items Title 1
                              </button>
                            </h6>
                            <div
                              id="mega_menu_item_collapse_1"
                              class="accordion-collapse collapse"
                              aria-labelledby="mega_menu_item_header_1"
                              data-bs-parent="#mega_menu_item_1"
                            >
                              <div class="accordion-body">
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 1
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 2
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 3
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 4
                                  </router-link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- END:: MEGA MENU ITEM -->

                        <!-- START:: MEGA MENU ITEM -->
                        <div
                          class="accordion dropdown_menu_item_accordion mb-5"
                          id="mega_menu_item_2"
                        >
                          <div class="accordion-item">
                            <h6
                              class="accordion-header"
                              id="mega_menu_item_header_2"
                            >
                              <button
                                class="
                                  accordion-button
                                  collapsed
                                  dropdown_menu_item_item_button
                                "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#mega_menu_item_collapse_2"
                                aria-expanded="true"
                                aria-controls="mega_menu_item_collapse_2"
                              >
                                Items Title 2
                              </button>
                            </h6>
                            <div
                              id="mega_menu_item_collapse_2"
                              class="accordion-collapse collapse"
                              aria-labelledby="mega_menu_item_header_2"
                              data-bs-parent="#mega_menu_item_2"
                            >
                              <div class="accordion-body">
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 1
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 2
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 3
                                  </router-link>
                                </button>
                                <button class="btn" @click="closeNavbarMenu">
                                  <router-link to="/test">
                                    Link Sample 4
                                  </router-link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- END:: MEGA MENU ITEM -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END:: MEGA MENU ACCORDION -->
              </li>

              <li>
                <!-- START:: DROPDOWN MENU ACCORDION -->
                <div
                  class="accordion dropdown_menu_accordion"
                  id="dropdown_menu_accordion_1"
                >
                  <div class="accordion-item">
                    <h5 class="accordion-header" id="dropdown_menu_heading_1">
                      <button
                        class="
                          accordion-button
                          collapsed
                          dropdown_menu_accordion_btn
                        "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#dropdown_menu_collapse_1"
                        aria-expanded="true"
                        aria-controls="dropdown_menu_collapse_1"
                      >
                        Dropdown Menu
                      </button>
                    </h5>
                    <div
                      id="dropdown_menu_collapse_1"
                      class="accordion-collapse collapse"
                      aria-labelledby="dropdown_menu_heading_1"
                      data-bs-parent="#dropdown_menu_accordion_1"
                    >
                      <div class="accordion-body">
                        <button class="btn" @click="closeNavbarMenu">
                          <router-link to="/test"> Link Sample 1 </router-link>
                        </button>

                        <button class="btn" @click="closeNavbarMenu">
                          <router-link to="/test"> Link Sample 2 </router-link>
                        </button>

                        <button class="btn" @click="closeNavbarMenu">
                          <router-link to="/test"> Link Sample 3 </router-link>
                        </button>

                        <button class="btn" @click="closeNavbarMenu">
                          <router-link to="/test"> Link Sample 4 </router-link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END:: DROPDOWN MENU ACCORDION -->
              </li>

              <li @click="closeNavbarMenu">
                <router-link to="/sample" class="side_navbar_menu_list_link">
                  Link Sample
                </router-link>
              </li>
            </ul>
          </div>
          <!-- END:: SIDE NAVBAR MENU -->

          <div class="col-2 d-flex justify-content-center">
            <div class="logo_wraper">
              <router-link to="/">
                <img
                  src="../../assets/media/logo/logo.png"
                  alt="Site Logo"
                  width="100"
                  height="100"
                />
              </router-link>
            </div>
          </div>

          <div class="col-5 search_bar_col">
            <div class="search_bar">
              <form @submit.prevent="searchForm(searchInput)">
                <div class="group">
                  <input
                    type="text"
                    class="form-control"
                    id="search_value"
                    :placeholder="$t('search')"
                    v-model="searchInput"
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
                <li class="contact_list_item">
                  <a
                    href="tel:01001010101010"
                    class="btn d-flex align-items-center"
                    v-b-tooltip.hover
                    title="Call Us"
                  >
                    <PhoneCallIcon size="2.3x" class="phone_icon" />
                    <div class="text">
                      <span> {{ $t("call_us") }} </span>
                      <span> 01001010101 </span>
                    </div>
                  </a>
                </li>

                <li>
                  <router-link
                    to="/wishlist"
                    v-b-tooltip.hover
                    title="Wishlist"
                    class="wishlist_btn"
                  >
                    <span
                      v-if="$store.state.wishlist.length > 0"
                      class="badge wishlist_counter"
                      >{{ $store.state.wishlist.length }}</span
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
                    <div class="text cart_details_text">
                      <span> {{ $t("cart") }} </span>
                      <span> {{ this.$store.state.cartSubtotal }} EGP </span>
                    </div>

                    <ShoppingCartIcon size="2.3x" class="cart_icon" />
                    <span
                      class="badge"
                      v-if="this.$store.state.shoppingCart.length > 0"
                    >
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
        <h6 class="m-0">{{ $t("cart") }}</h6>
        <button class="btn" @click="closeCartMenu">
          <XIcon size="1.3x" />
          {{ $t("close") }}
        </button>
      </div>

      <h5
        class="my-5 text-center"
        v-if="this.$store.state.shoppingCart.length == 0"
      >
        {{ $t("empty_cart_message") }}
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
                <img
                  :v-lazy="item.images[0].img"
                  alt="Product Image"
                  width="100"
                  height="100"
                />
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
          <button type="button" class="btn" @click="closeCartMenu">
            <router-link to="/main-cart"> View Cart </router-link>
          </button>
        </div>
        <!-- END:: GO TO MAIN CART ROUTE -->

        <!-- START:: CHECKOUT ROUTE -->
        <span @click="closeCartMenu" class="d-block">
          <router-link to="/checkout" class="checkout">
            GO TO CHECKOUT
          </router-link>
        </span>
        <!-- END:: CHECKOUT ROUTE -->
      </div>
    </div>
    <!-- END:: CART MENU -->

    <!-- START:: NAVBAR -->
    <div class="navbar_wraper">
      <div class="container">
        <ul>
          <li>
            <router-link to="/"> {{ $t("home") }} </router-link>
          </li>

          <li>
            <router-link to="/all-categories">
              {{ $t("all_categories") }}
            </router-link>
          </li>

          <li>
            <router-link to="/about"> {{ $t("about_us") }} </router-link>
          </li>

          <li>
            <router-link to="/contact"> {{ $t("contact_us") }} </router-link>
          </li>

          <li>
            <a href="javascript:;" class="dropdown">Mega Menu</a>
            <div class="dropdown_menu_wraper mega_menu">
              <div class="row">
                <div class="col-12 col-md-4">
                  <h6>Items Title 1</h6>
                  <ul>
                    <li>
                      <router-link to="/test"> Link Sample 1 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 2 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 3 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 4 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 5 </router-link>
                    </li>
                  </ul>
                </div>

                <div class="col-12 col-md-4">
                  <h6>Items Title 2</h6>
                  <ul>
                    <li>
                      <router-link to="/test"> Link Sample 1 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 2 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 3 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 4 </router-link>
                    </li>

                    <li>
                      <router-link to="/test"> Link Sample 5 </router-link>
                    </li>
                  </ul>
                </div>

                <div class="col-12 col-md-4 p-0">
                  <div class="img_wraper">
                    <div class="overlay">
                      <h2>Sale.</h2>
                      <h2>70% Off</h2>
                    </div>
                    <img
                      v-lazy="
                        'https://d-themes.com/vue/riode/demo-1/images/menu/banner-1.jpg'
                      "
                      width="100"
                      height="100"
                    />
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
                  <router-link to="/test"> Link Sample 2 </router-link>
                </li>

                <li>
                  <router-link to="/test"> Link Sample 3 </router-link>
                </li>

                <li>
                  <router-link to="/test"> Link Sample 4 </router-link>
                </li>

                <li>
                  <router-link to="/test"> Link Sample 5 </router-link>
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
  BellIcon,
  AlignLeftIcon,
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
    BellIcon,
    AlignLeftIcon,
  },

  data() {
    return {
      // START:: SEARCH INPUT DATA
      searchInput: "",
      // END:: SEARCH INPUT DATA
      // START:: CONTROL NOTIFICATION MENU DATA
      notificationsIsOpen: false,
      // END:: CONTROL NOTIFICATION MENU DATA

      // START:: CART MENU HANDLING DATA
      cartMenuIsOpen: false,
      // END:: CART MENU HANDLING DATA

      // START:: NAVBAR MENU HANDLING DATA
      navbarMenuIsOpen: false,
      // END:: NAVBAR MENU HANDLING DATA

      // START:: LANGUAGE DATA
      lang: localStorage.getItem("ecommerce_lang"),
      // END:: LANGUAGE
    };
  },

  methods: {
    // START:: CONTROL NOTIFICATIONS MENU
    toggleNoificationMenu() {
      this.notificationsIsOpen = !this.notificationsIsOpen;
    },
    // END:: CONTROL NOTIFICATIONS MENU

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

    // START:: SEARCH
    searchForm(text) {
      this.$store.commit("searchResult", { text });
    },
    // END:: SEARCH

    // START:: OPEN NAVBAR MENU
    openNavbarMenu() {
      this.navbarMenuIsOpen = true;
    },
    // END:: OPEN NAVBAR MENU

    // START:: CLOSE NAVBAR MENU
    closeNavbarMenu() {
      this.navbarMenuIsOpen = false;
    },
    // END:: CLOSE NAVBAR MENU

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
