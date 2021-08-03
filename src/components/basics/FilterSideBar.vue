<template>
  <div class="FilterSideBar">
    <div class="filterSection">
      <div class="mainBTN">
        <button type="button">Clean</button>
      </div>
    </div>
    <div class="bodyFilter">
      <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
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
    };
  },
};
</script>
