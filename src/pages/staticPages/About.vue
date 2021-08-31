<template>
  <div class="static-pages">
    <!-- START:: BREADCRUMB  -->
    <BreadCrumb
      :title="data.title"
      :image="data.background"
      :description="data.shortDesc"
    />
    <!-- END:: BREADCRUMB  -->

    <!-- START:: ABOUT -->
    <div class="about-page">
      <div class="whatWeDo-section">
        <!-- START:: CONTAINER -->
        <div class="container">
          <div class="whatWeDo">
            <div class="row row-flex-align">
              <div class="col-md-4">
                <div class="title-section">
                  <h6>01. What We Do</h6>
                </div>
                <div class="text-section">
                  <h3>Provide perfect and practical services</h3>
                  <p>
                    Lorem quis bibendum auctar, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit.
                  </p>
                </div>
              </div>

              <div class="col-md-8">
                <div class="row">
                  <!-- START:: SINGLE CARD -->
                  <div class="col-md-4">
                    <div class="card-whatWeDo">
                      <div class="head-card-whatWeDo">
                        <h3>
                          <ICountUp
                            :delay="delay"
                            :endVal="endVal"
                            :options="options"
                            @ready="onReady"
                          />+
                        </h3>
                        <h4>Team Members</h4>
                      </div>
                      <div class="body-card-whatWeDo">
                        <p>
                          Lorem quis bibendum auctar, nisi elit consequat ipsum,
                          nec sagittis sem nibh id elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- END:: SINGLE CARD -->

                  <!-- START:: SINGLE CARD -->
                  <div class="col-md-4">
                    <div class="card-whatWeDo">
                      <div class="head-card-whatWeDo">
                        <h3>123+</h3>
                        <h4>Team Members</h4>
                      </div>
                      <div class="body-card-whatWeDo">
                        <p>
                          Lorem quis bibendum auctar, nisi elit consequat ipsum,
                          nec sagittis sem nibh id elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- END:: SINGLE CARD -->

                  <!-- START:: SINGLE CARD -->
                  <div class="col-md-4">
                    <div class="card-whatWeDo">
                      <div class="head-card-whatWeDo">
                        <h3>123+</h3>
                        <h4>Team Members</h4>
                      </div>
                      <div class="body-card-whatWeDo">
                        <p>
                          Lorem quis bibendum auctar, nisi elit consequat ipsum,
                          nec sagittis sem nibh id elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- END:: SINGLE CARD -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END:: CONTAINER -->
      </div>

      <div class="about-content">
        <!-- START:: CONTAINER -->
        <div class="container">
          <div class="row row-flex-align">
            <div class="col-md-7">
              <div class="image-about-content">
                <img
                  v-lazy="
                    'https://d-themes.com/vue/riode/demo-1/images/subpages/customer.jpg'
                  "
                  alt="About"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <div class="col-md-5">
              <div class="text-about-content">
                <div class="title-section">
                  <h6>02. Happy Customer</h6>
                </div>
                <div class="text-section">
                  <h3>Provide fashionable and qualifed products</h3>
                  <p>
                    Already millions of people are very satisfied by thi. s page
                    builder and the number is growing more and more. Technolog
                    developing, requirements are increasing. Riode has brought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END:: CONTAINER -->
      </div>
    </div>

    <!-- END:: ABOUT -->
  </div>
</template>

<script>
import BreadCrumb from "../../components/basics/BreadCrumb.vue";

import ICountUp from "vue-countup-v2";

export default {
  name: "About",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
    ICountUp,
  },

  // END:: COMPONENTS
  data() {
    return {
      // START:: COUNTER
      delay: 0,
      endVal: 350,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },
      // END:: COUNTER

      // START:: DATA
      data: {
        title: "About Us",
        background:
          "https://d-themes.com/vue/riode/demo-1/images/page-header/about-us.jpg",
        shortDesc:
          "Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      },
      // END:: DATA
    };
  },
  methods: {
    onReady: function (instance) {
      const that = this;
      instance.update(that.endVal);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.iCountUp {
  font-size: 12em;
  margin: 0;
  color: #4d63bc;
}
</style>
