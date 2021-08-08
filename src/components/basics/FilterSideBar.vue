<template>
  <div class="FilterSideBar">
    <div class="filterSection">
      <div class="mainBTN">
        <button type="button">Clean</button>
      </div>
    </div>
    <div class="bodyFilter">
      <v-expansion-panels v-model="panel" multiple>
        <!-- START:: ALL CATEGORIES -->
        <v-expansion-panel>
          <v-expansion-panel-header>All Categories</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="list-categories">
              <ul>
                <li>
                  <router-link to="#">For Men`s <span>(46)</span></router-link>
                </li>
                <li>
                  <router-link to="#"
                    >For Women`s <span>(61)</span></router-link
                  >
                </li>
                <li>
                  <router-link to="#"
                    >For Children <span>(46)</span></router-link
                  >
                </li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- END:: ALL CATEGORIES -->

        <!-- START:: FILTER BY PRICE -->
        <v-expansion-panel>
          <v-expansion-panel-header>Filter by Price</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="priceFilter">
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
              >
              </v-range-slider>
              <h6>Price : {{ range[0] + " - " + range[1] + " EGP" }}</h6>

              <div class="filterBtn">
                <button type="button">Filter</button>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- END:: FILTER BY PRICE -->

        <!-- START:: FILTER BY SIZES -->
        <v-expansion-panel>
          <v-expansion-panel-header>Sizes</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="sizesFilter">
              <v-checkbox
                v-model="sizes.ExtraLarge"
                label="Extra Large"
              ></v-checkbox>
              <v-checkbox v-model="sizes.Large" label="Large"></v-checkbox>
              <v-checkbox v-model="sizes.Medium" label="Medium"></v-checkbox>
              <v-checkbox v-model="sizes.Small" label="Small"></v-checkbox>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- END:: FILTER BY SIZES -->

        <!-- START:: FILTER BY COLORS -->
        <v-expansion-panel>
          <v-expansion-panel-header>Cloros</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="sizesFilter">
              <v-checkbox v-model="colors.Blue" label="Blue"></v-checkbox>
              <v-checkbox v-model="colors.Red" label="Red"></v-checkbox>
              <v-checkbox v-model="colors.Yellow" label="Yellow"></v-checkbox>
              <v-checkbox v-model="colors.Black" label="Black"></v-checkbox>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- END:: FILTER BY COLORS -->

        <!-- START:: FILTER BY COLORS -->
        <v-expansion-panel>
          <v-expansion-panel-header>Brands</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="sizesFilter">
              <v-checkbox
                v-model="brands.Cinderella"
                label="Cinderella"
              ></v-checkbox>
              <v-checkbox v-model="brands.Comedy" label="Comedy"></v-checkbox>
              <v-checkbox
                v-model="brands.Rightcheck"
                label="Rightcheck"
              ></v-checkbox>
              <v-checkbox
                v-model="brands.SkillStar"
                label="SkillStar"
              ></v-checkbox>
              <v-checkbox v-model="brands.SLS" label="SLS"></v-checkbox>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- END:: FILTER BY COLORS -->
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSideBar",
  data() {
    return {
      min: 0,
      max: 10000,
      range: [0, 10000],
      isActive: true,
      panel: [0, 1, 2, 3, 4],
      sizes: {
        ExtraLarge: "",
        Large: "",
        Medium: "",
        Small: "",
      },
      colors: {
        Blue: "",
        Red: "",
        Yellow: "",
        Black: "",
      },
      brands: {
        Cinderella: "",
        Comedy: "",
        Rightcheck: "",
        SkillStar: "",
        SLS: "",
      },
    };
  },
  methods: {
    // START:: HANDILLING STICKY HEADER
    // END:: HANDILLING STICKY HEADER
  },
  mounted() {
    // START:: HANDILLING STICKY HEADER
    // END:: HANDILLING STICKY HEADER
  },
};
</script>
