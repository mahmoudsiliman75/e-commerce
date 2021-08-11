<template>
  <div class="search-result">
    <!-- START:: BREADCRUMB -->
    <BreadCrumb
      :title="breadcrumbData.title"
      :image="breadcrumbData.image"
      :description="breadcrumbData.shortDesc"
    />
    <!-- END:: BREADCRUMB -->

    <!-- START:: CONTAINER -->
    <div class="container">
      <div class="resluts-conteiner">
        <!-- START:: INVALLID MESSAGE -->
        <!-- <div class="invalid_message p-5 text-center" v-if="">
          <span> <AlertOctagonIcon size="5x" /> </span>
          <h5 class="mt-5">Results Not Found</h5>
        </div> -->
        <!-- START:: INVALLID MESSAGE -->
        <div class="row">
          <div
            class="col-md-3 my-3"
            v-for="product in this.$store.state.searchResult"
            :key="product.id"
          >
            <ProductCard :productData="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- END:: CONTAINER -->
  </div>
</template>

<script>
import BreadCrumb from "../components/basics/BreadCrumb.vue";
import ProductCard from "../components/basics/ProductCard.vue";
// import { AlertOctagonIcon } from "vue-feather-icons";
export default {
  name: "SearchResult",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
    ProductCard,
    // AlertOctagonIcon,
  },
  // END:: COMPONENTS
  data() {
    return {
      breadcrumbData: {
        title: "Search Results",
        image:
          "https://d-themes.com/vue/riode/demo-1/images/page-header-back.jpg",
        shortDesc: "",
      },
    };
  },
};
</script>
