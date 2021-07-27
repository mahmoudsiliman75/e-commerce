<template>
  <header>
    <!-- START:: UPPER BAR -->
    <div class="upper_bar">
      <div class="container">
        <div class="wraper">
          <div class="header_message_wraper">
            Welcome To Our E-commerce 
          </div>

          <div class="action_btns_wraper">
            <ul>
              <li>
                <router-link to="/" v-b-tooltip.hover title="Contact Us">
                  <img src="../../assets/media/icons/header/location.png">
                  <span> Contact </span>
                </router-link>
              </li>

              <li>
                <router-link to="/" v-b-tooltip.hover title="Sign In">
                  <img src="../../assets/media/icons/header/user.png">
                  <span> Sign In </span>
                </router-link>
              </li>

              <li class="language_wraper">
                <button class="btn en" v-b-tooltip.hover title="English">
                  <img src="../../assets/media/icons/langs/en.png">
                </button>

                <!-- <button class="btn ar" v-b-tooltip.hover title="العربية">
                  <img src="../../assets/media/icons/langs/ar.png">
                </button> -->
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
                <img src="../../assets/media/logo/logo.png" alt="Site Logo">
              </router-link>
            </div>
          </div>

          <div class="col-6">
            <div class="search_bar">
              <form>
                <div class="group">
                  <input type="text" class="form-control" id="search_value" placeholder="Search....">
                  <button class="btn"> 
                    <img src="../../assets/media/icons/header/search.png">
                  </button>
                </div>
              </form>
            </div>
          </div> 

          <div class="col-4">
            <div class="action_btns_wraper">
              <ul>
                <li>
                  <a href="tel:01001010101010" class="btn d-flex align-items-center" v-b-tooltip.hover title="Call Us">
                    <img src="../../assets/media/icons/header/phone.png" class="me-3">
                    <div class="text">
                      <span> Call Us Now: </span>
                      <span> 01001010101 </span>
                    </div>
                  </a>
                </li>

                <li>
                  <router-link to="/" v-b-tooltip.hover title="Wishlist">
                    <img src="../../assets/media/icons/header/heart.png">
                  </router-link>
                </li>

                <li>
                  <button class="btn cart d-flex align-items-center" v-b-tooltip.hover title="Cart">
                    <div class="text pe-1">
                      <span> Shopping Cart: </span>
                      <span> 0 EGP </span>
                    </div>

                    <img src="../../assets/media/icons/header/cart.png">
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

    <!-- START:: NAVBAR -->
    <div class="navbar_wraper">
      <div class="container">
        <ul>
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>

          <li>
            <router-link to="/about">
              About Us
            </router-link>
          </li>

          <li>
            <router-link to="/contact">
              Contact Us
            </router-link>
          </li>

          <li>
            <button>
              Mega Menu
            </button>
          </li>

          <li>
            <router-link to="/sample">
              Link Sample
            </router-link>
          </li>

          <li>
            <router-link to="/sample">
              Link Sample
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- END:: NAVBAR -->
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    // START:: HANDILLING STICKY HEADER
    stickyHeader() {
      let header = document.querySelector("header");
      let headerHeight = header.clientHeight;
      window.addEventListener("scroll", () => {
        if(  window.scrollY > headerHeight ) {
          header.classList.add("sticky");
          document.querySelector("body").style.paddingTop = headerHeight+"px";
        } else {
          header.classList.remove("sticky");
          document.querySelector("body").style.paddingTop = 0;
        }
      })
    }
    // END:: HANDILLING STICKY HEADER 
  },

  mounted() {
    // START:: HANDILLING STICKY HEADER
    this.stickyHeader();
    // END:: HANDILLING STICKY HEADER 
  },
};
</script>