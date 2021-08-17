<template>
  <footer>
    <div class="container">
      <!-- START:: UPPRT FOOTER -->
      <div class="upper_footer">
        <div class="row justify-content-lg-between align-items-center">
          <div class="col-12 col-md-2 d-flex justify-content-center">
            <div class="logo_wraper">
              <router-link to="/">
                <img src="../../assets/media/logo/logo.png" alt="Site Logo" />
              </router-link>
            </div>
          </div>

          <div
            class="col-12 col-md-4 d-flex justify-content-center my-4 my-md-0"
          >
            <div class="subscribe_text_wraper">
              <h5>Subscribe To Our Newsletter</h5>
              <p>Get All The Latest Information, Sales And Offers.</p>
            </div>
          </div>

          <div class="col-12 col-md-5">
            <div class="subscribe_form_wraper">
              <form>
                <div class="group">
                  <input
                    type="email"
                    class="form-control"
                    id="subscribe_email"
                  />
                  <button>SUBSCRIBE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- END:: UPPRT FOOTER -->

      <!-- START:: MIDDLE FOOER -->
      <div class="middle_footer">
        <div class="row justify-content-lg-between align-items-center">
          <div class="col-12 col-md-3 my-4 mb-md-0">
            <h6>Contact Info</h6>
            <ul>
              <li>
                <span> PHONE: </span>
                <span> 01001010101 </span>
              </li>
              <li>
                <span> EMAIL: </span>
                <span> email@localhost.com </span>
              </li>
              <li>
                <span> ADDRESS: </span>
                <span> Address Will Go Here </span>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3 my-4 mb-md-0">
            <h6>Useful Links</h6>
            <ul>
              <li>
                <router-link to="/"> Home </router-link>
              </li>
              <li>
                <router-link to="/"> About Us </router-link>
              </li>
              <li>
                <router-link to="/"> Contact </router-link>
              </li>
              <li>
                <router-link to="/"> Sign In </router-link>
              </li>
            </ul>

            <ul>
              <li>
                <router-link to="/faqs"> FAQS </router-link>
              </li>
              <li>
                <router-link to="/"> Link Sample </router-link>
              </li>
              <li>
                <router-link to="/"> Link Sample </router-link>
              </li>
              <li>
                <router-link to="/"> Link Sample </router-link>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3 my-4 mb-md-0">
            <h6>Categories</h6>
            <ul>
              <li>
                <router-link to="/"> Cosmetia Services </router-link>
              </li>
              <li>
                <router-link to="/"> Social Media </router-link>
              </li>
              <li>
                <router-link to="/"> Professional </router-link>
              </li>
              <li>
                <router-link to="/"> Cosmetia Shop </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END:: MIDDLE FOOER -->

      <!-- START:: LOWER FOOTER -->
      <div class="lower_footer">
        <div class="row justify-content-lg-between align-items-center">
          <div class="col-12 col-md-6 mb-5 mb-md-0">
            <div class="copy_rights">
              Classic &copy; 2021. All Rights Reserved
            </div>
          </div>

          <div class="col-12 col-md-6">
            <ul class="social_links">
              <li>
                <a href="#" class="facebook" target="_blanck">
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </a>
              </li>

              <li>
                <a href="#" class="twitter" target="_blanck">
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                </a>
              </li>

              <li>
                <a href="#" class="linkedin" target="_blanck">
                  <span>
                    <i class="fab fa-linkedin-in"></i>
                  </span>
                </a>
              </li>

              <li>
                <a href="#" class="youtube" target="_blanck">
                  <span>
                    <i class="fas fa-play"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END:: LOWER FOOTER -->
    </div>

    <div id="floating_footer" class="floating_footer">
      <div class="container_fluid position-relative">
        <ul class="items_list">
          <li>
            <router-link to="/">
              <HomeIcon/>
              <span> Home </span>
            </router-link>
          </li>

          <li>
            <router-link to="/all-categories">
              <SlidersIcon/>
              <span> Categories </span>
            </router-link>
          </li>

          <li>
            <router-link to="/login" v-if="!this.$store.getters.token">
              <UserIcon/>
              <span> Sign In </span>
            </router-link>

            <router-link to="/dashboard" v-else>
              <UserIcon/>
              <span> Profile </span>
            </router-link>
          </li>

          <li>
            <transition mode="out-in" name="fade">
              <div class="search_bar_wraper" v-if="footerSearchBarIsOPen">
                <form>
                  <div class="group">
                    <input
                      type="text"
                      class="form-control"
                      id="search_value"
                      placeholder="Search...."
                      v-model="footerSearchInput"
                    />
                    <button class="btn">
                      <SearchIcon size="1.6x" class="search_icon" />
                    </button>
                  </div>
                </form>
              </div>
            </transition>

            <button class="btn" @click="toggleFooterSearchBar">
              <SearchIcon/>
              <span> Search </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {SearchIcon, HomeIcon, SlidersIcon, UserIcon} from "vue-feather-icons";

export default {
  name: "Footer",

  components: {
    SearchIcon,
    HomeIcon,
    SlidersIcon,
    UserIcon
  },

  data() {
    return {
      footerSearchBarIsOPen: false,

      footerSearchInput: "",
    }
  },

  methods: {
    // START:: HANDILLING STICKY FOOTER
    stickyFooter() {
      let header = document.querySelector("header");
      let footer = document.querySelector("#floating_footer");
      let headerHeight = header.clientHeight;
      let footerHeight = footer.clientHeight;
      window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
          footer.classList.add("sticky");
          document.querySelector("body").style.paddingBottom = footerHeight + "px";
        } else {
          footer.classList.remove("sticky");
          document.querySelector("body").style.paddingBottom = 0;
        }
      });
    },
    // END:: HANDILLING STICKY FOOTER

    // START:: TOGGLE FOOTER SEARCH BAR
    toggleFooterSearchBar() {
      this.footerSearchBarIsOPen = !this.footerSearchBarIsOPen;
    },
    // END:: TOGGLE FOOTER SEARCH BAR
  },

  mounted() {
    // START:: HANDILLING STICKY FOOTER
    this.stickyFooter();
    // END:: HANDILLING STICKY FOOTER
  },
};
</script>
