<template>
  <div class="static-pages">
    <!-- START:: BREADCRUMB  -->
    <BreadCrumb
      :title="data.title"
      :image="data.background"
      :description="data.shortDesc"
    />
    <!-- END:: BREADCRUMB  -->

    <!-- START:: CONTACT -->
    <div class="contact-page">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="contact-info">
              <!-- START:: SINGLE INFO -->
              <div class="single-info">
                <div class="title-section">
                  <h3>Headquarters</h3>
                </div>
                <div class="content-section">
                  <p>1600 Amphitheatre Parkway New York WC1 1BA</p>
                </div>
              </div>
              <!-- START:: SINGLE INFO -->

              <!-- START:: SINGLE INFO -->
              <div class="single-info">
                <div class="title-section">
                  <h3>Phone Number</h3>
                </div>
                <div class="content-section">
                  <ul>
                    <li><a href="#">1.800.458.56</a></li>
                    <li><a href="#">1.800.458.56</a></li>
                    <li><a href="#">1.800.458.56</a></li>
                  </ul>
                </div>
              </div>
              <!-- START:: SINGLE INFO -->

              <!-- START:: SINGLE INFO -->
              <div class="single-info">
                <div class="title-section">
                  <h3>Support</h3>
                </div>
                <div class="content-section">
                  <ul>
                    <li><a href="#">support@your-domain.com</a></li>
                    <li><a href="#">support@your-domain.com</a></li>
                    <li><a href="#">support@your-domain.com</a></li>
                  </ul>
                </div>
              </div>
              <!-- START:: SINGLE INFO -->
            </div>
          </div>
          <div class="col-md-9">
            <div class="title-page-content">
              <h4>Let’s Connect</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <form class="form-style">
              <div class="row">
                <div class="col-12">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Message *"
                    v-model="contact.message"
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <div class="form-input">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Name *"
                      v-model="contact.name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-input">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email address *"
                      v-model="contact.email"
                    />
                  </div>
                </div>
              </div>

              <div class="btn-auth">
                <button type="button" @click="sendMessage">
                  <span class="sppinerAnimation" v-if="isWaiting"></span>
                  <span v-if="isWaiting == false">Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: CONTACT -->

    <!-- START:: BRANCHES -->
    <div class="branches-section">
      <div class="container">
        <div class="title-branches">
          <h4>Our Branches</h4>
        </div>
        <div class="all-branches">
          <div class="row">
            <!-- START:: SINGLE BRANCHES -->
            <div class="col-md-3">
              <div class="single-branch">
                <div class="image-branch">
                  <img
                    src="https://d-themes.com/vue/riode/demo-1/images/subpages/store-1.jpg"
                    alt="Branch"
                  />
                </div>
                <div class="overlay">
                  <h5>NEW YORK</h5>
                  <div class="hidden-part">
                    <p><a href="#">Email: mail@newyorkemail.com</a></p>
                    <p><a href="#">Mobile: 010 20 403283</a></p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- END:: SINGLE BRANCHES -->

            <!-- START:: SINGLE BRANCHES -->
            <div class="col-md-3">
              <div class="single-branch">
                <div class="image-branch">
                  <img
                    src="https://d-themes.com/vue/riode/demo-1/images/subpages/store-1.jpg"
                    alt="Branch"
                  />
                </div>
                <div class="overlay">
                  <h5>NEW YORK</h5>
                  <div class="hidden-part">
                    <p><a href="#">Email: mail@newyorkemail.com</a></p>
                    <p><a href="#">Mobile: 010 20 403283</a></p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- END:: SINGLE BRANCHES -->

            <!-- START:: SINGLE BRANCHES -->
            <div class="col-md-3">
              <div class="single-branch">
                <div class="image-branch">
                  <img
                    src="https://d-themes.com/vue/riode/demo-1/images/subpages/store-1.jpg"
                    alt="Branch"
                  />
                </div>
                <div class="overlay">
                  <h5>NEW YORK</h5>
                  <div class="hidden-part">
                    <p><a href="#">Email: mail@newyorkemail.com</a></p>
                    <p><a href="#">Mobile: 010 20 403283</a></p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- END:: SINGLE BRANCHES -->

            <!-- START:: SINGLE BRANCHES -->
            <div class="col-md-3">
              <div class="single-branch">
                <div class="image-branch">
                  <img
                    src="https://d-themes.com/vue/riode/demo-1/images/subpages/store-1.jpg"
                    alt="Branch"
                  />
                </div>
                <div class="overlay">
                  <h5>NEW YORK</h5>
                  <div class="hidden-part">
                    <p><a href="#">Email: mail@newyorkemail.com</a></p>
                    <p><a href="#">Mobile: 010 20 403283</a></p>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- END:: SINGLE BRANCHES -->
          </div>
        </div>
      </div>
    </div>
    <!-- END:: BRANCHES -->

    <!-- START:: GOOGLE MAP -->
    <div class="map-section">
      <GmapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 400px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap>
    </div>
    <!-- END:: GOOGLE MAP -->
  </div>
</template>

<script>
import BreadCrumb from "../../components/basics/BreadCrumb.vue";

export default {
  name: "About",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
  },

  // END:: COMPONENTS
  data() {
    return {
      isWaiting: false,
      lang: localStorage.getItem("ecommerce_lang"),
      contact: {
        message: "",
        name: "",
        email: "",
      },
      // START:: DATA
      data: {
        title: "Contct Us",
        background:
          "https://d-themes.com/vue/riode/demo-1/images/page-header/contact-us.jpg",
        shortDesc: "",
      },
      // END:: DATA

      // START:: MAP
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } },
      ],
      // END:: MAP
    };
  },
  methods: {
    // START:: VALID EMAIL
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // END:: VALID EMAIL

    // START:: SEND MESSAGE METHODS
    sendMessage() {
      this.isWaiting = true;
      if (this.contact.name == "") {
        this.$iziToast.error({
          message: "Name Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (this.contact.email == "") {
        this.$iziToast.error({
          message: "Email Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (!this.validEmail(this.contact.email)) {
        this.$iziToast.error({
          message: "The specified value for the email is incorrect",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      }
    },
    // END:: SEND MESSAGE METHODS
  },
  mounted() {},
};
</script>
