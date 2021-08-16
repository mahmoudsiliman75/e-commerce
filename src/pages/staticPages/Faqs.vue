<template>
  <div class="static-pages">
    <!-- START:: BREADCRUMB  -->
    <BreadCrumb
      :title="data.title"
      :image="data.background"
      :description="data.shortDesc"
    />
    <!-- END:: BREADCRUMB  -->

    <!-- START:: FAQS -->
    <div class="faqs-page">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Customer Management</h3>
            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->
          </div>
          <div class="col-md-6">
            <h3>Customer Management</h3>
            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->

            <!-- START:: SINGLE FAQ -->
            <div class="single-faq">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >How can add vendor role to the
                    customer?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- END:: SINGLE FAQ -->
          </div>
        </div>
      </div>
    </div>

    <!-- END:: FAQS -->
  </div>
</template>

<script>
import BreadCrumb from "../../components/basics/BreadCrumb.vue";

export default {
  name: "Faqs",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
  },

  // END:: COMPONENTS
  data() {
    return {
      // START:: DATA
      data: {
        title: "FAQS",
        background:
          "https://d-themes.com/vue/riode/demo-1/images/page-header/faq.jpg",
        shortDesc:
          "Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      },
      // END:: DATA
    };
  },
  methods: {},
  mounted() {},
};
</script>
