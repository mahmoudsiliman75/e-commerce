<template>
  <div class="all-categories">
    <!-- START:: BREADCRUMB -->
    <BreadCrumb
      :title="data.CategoryNme"
      :image="data.CategoryImage"
      :description="data.shortDesc"
    />
    <!-- END:: BREADCRUMB -->
    <section class="All-Content">
      <div class="container">
        <div class="row row-overflow">
          <!-- START:: ALL FILTER -->
          <div
            class="filter_col_wraper"
            :class="
              colHideen == false
                ? 'col-md-3 col-filter hideFilter'
                : 'col-md-3 col-filter showFilter'
            "
          >
            <FilterSideBar />
          </div>
          <!-- END:: ALL FILTER -->

          <!-- START:: ALL PRODUCTS -->
          <div
            :class="
              colHideen == false
                ? 'col-md-12 content-prodcuts'
                : 'col-md-9 content-prodcuts'
            "
          >
            <ProductsWrapper>
              <!-- START:: HEADER BAR -->
              <template #HeaderBar>
                <div class="header-filter">
                  <div class="left-part">
                    <button type="button" class="control_width_btn" @click="hideFilter">
                      Filter
                      <ArrowRightIcon v-if="colHideen == false" size="1x" />
                      <ArrowLeftIcon v-if="colHideen == true" size="1x" />
                    </button>

                    <button class="btn control_filter_menu_btn" @click="openFilterSideMenu">
                      <span> <SlidersIcon size="1.4x"/> </span>                    
                    </button>
                  </div>

                  <div class="right-part">
                    <label>SHOW <span>:</span> </label>
                    <select class="form-select">
                      <option selected>5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="40">40</option>
                    </select>
                  </div>

                  <!-- START:: FILTER SIDE MENU -->
                  <div
                    class="filter_side_menu_wraper"
                    :class="{ show: filterSideMenuIsOpen }"
                    @click="closeFilterSideMenu"
                  ></div>
                  <div class="filter_menu">
                    <div class="menu_header mb-3">
                      <h4 class="m-0">Filter</h4>
                      <button class="btn" @click="closeFilterSideMenu">
                        <XIcon size="1.3x" />
                        Close
                      </button>
                    </div>

                    <div class="menu_body">
                      <FilterSideBar />
                    </div>
                  </div>
                  <!-- END:: FILTER SIDE MENU -->
                </div>
              </template>

              <!-- START:: MAIN CONTANT -->
              <template #mainContant>
                <!-- START:: ROW PRODUCTS -->
                <div class="row justify-center justify-md-start">
                  <div
                    class="col-10"
                    :class="
                      colHideen == false
                        ? 'col-md-3 my-5 content-prodcuts'
                        : 'col-md-4 my-5 content-prodcuts'
                    "
                    v-for="product in $store.state.allProducts"
                    :key="product.id"
                  >
                    <ProductCard :productData="product" />
                  </div>
                </div>
                <!-- END:: ROW PRODUCTS -->
              </template>

              <!-- START:: FOOTER -->
              <template #FooterBar>
                <div class="pagination">
                  <div class="left-part">
                    <h6>Showing</h6>
                    <h6>1 of {{ $store.state.allProducts.length }}</h6>
                    <h6>Products</h6>
                  </div>
                  <div class="right-part">
                    <ul>
                      <li>
                        <router-link to="#">
                          <ArrowLeftIcon size="1x" />
                          Prev
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#"> 1 </router-link>
                      </li>
                      <li>
                        <router-link to="#"> 2 </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          Next
                          <ArrowRightIcon size="1x" />
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </ProductsWrapper>
          </div>
          <!-- END:: ALL PRODUCTS -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FilterSideBar from "@/components/basics/FilterSideBar";
import BreadCrumb from "@/components/basics/BreadCrumb";
import ProductCard from "@/components/basics/ProductCard";
import ProductsWrapper from "@/pages/ProductsWrapper";
import { ArrowRightIcon, ArrowLeftIcon, SlidersIcon, XIcon } from "vue-feather-icons";
export default {
  name: "AllCategories",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
    ProductCard,
    FilterSideBar,
    ProductsWrapper,
    ArrowRightIcon,
    ArrowLeftIcon,
    SlidersIcon,
    XIcon,
  },
  // END:: COMPONENTS
  data() {
    return {
      // START:: FILTER SIDE MENU DATA
      filterSideMenuIsOpen: false,
      // END:: FILTER SIDE MENU DATA

      colHideen: true,
      data: {
        CategoryImage:
          "https://d-themes.com/vue/riode/demo-1/images/page-header-back.jpg",
        CategoryNme: "All Categories",
        shortDesc: "",
      },
    };
  },

  // START:: METHODS
  methods: {
    // START:: HIDE AND SHOW FILTER
    hideFilter() {
      if (this.colHideen) {
        this.colHideen = false;
      } else {
        this.colHideen = true;
      }
    },
    // END:: HIDE AND SHOW FILTER

    // START:: OPEN FILTER SIDE MENU
    openFilterSideMenu() {
      this.filterSideMenuIsOpen = true;
    },
    // END:: OPEN FILTER SIDE MENU

    // START:: CLOSE FILTER SIDE MENU
    closeFilterSideMenu() {
      this.filterSideMenuIsOpen = false;
    },
    // END:: CLOSE FILTER SIDE MENU
  },
  // END:: METHODS
};
</script>
