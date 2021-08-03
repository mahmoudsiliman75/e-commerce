<template>
  <div class="all-categories">
    <!-- START:: BREADCRUMB -->
    <BreadCrumb :title="data.CategoryNme" :image="data.CategoryImage" />
    <!-- END:: BREADCRUMB -->
    <section class="All-Content">
      <div class="container">
        <div class="row">
          <!-- START:: ALL FILTER -->
          <div class="col-md-3">
            <FilterSideBar />
          </div>
          <!-- END:: ALL FILTER -->

          <!-- START:: ALL PRODUCTS -->
          <div class="col-md-9">
            <!-- START:: ROW PRODUCTS -->
            <div class="row">
              <div
                class="col-4 my-5"
                v-for="product in allProducts"
                :key="product.id"
              >
                <ProductCard :productData="product" />
              </div>
            </div>
            <!-- END:: ROW PRODUCTS -->
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
export default {
  name: "AllCategories",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
    ProductCard,
    FilterSideBar,
  },
  // END:: COMPONENTS
  data() {
    return {
      data: {
        CategoryImage:
          "https://d-themes.com/vue/riode/demo-1/images/page-header-back.jpg",
        CategoryNme: "All Categories",
      },
      // START:: ALL PRODUCTS
      allProducts: [
        {
          id: 1,
          img_1:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
          img_2:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
          badges: ["TOP", "SALE"],
          categoryName: "For Men's",
          productName: "Beyond Riode Original T-Shirt",
          price: "500",
          discount: "250",
          rate: 4,
          reviews: 2,
        },
        {
          id: 2,
          img_1:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_1_9ae072548f.jpg",
          img_2:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_2_7f087d1140.jpg",
          badges: ["NEW"],
          categoryName: "Accessories",
          productName: " Mackintosh Poket backpack ",
          price: "500",
          discount: "",
          rate: 2.5,
          reviews: 4,
        },
        {
          id: 3,
          img_1:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_2_f77ebc3ad7.jpg",
          img_2:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_1_67ca70354d.jpg",
          badges: ["SALE"],
          categoryName: "Fashionable Women's",
          productName: " Solid pattern in fashion summer dress ",
          price: "700",
          discount: "400",
          rate: 3.5,
          reviews: 10,
        },
        {
          id: 4,
          img_1:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_1_8812a927b7.jpg",
          img_2:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_2_b8a6d64d23.jpg",
          badges: ["NEW"],
          categoryName: "For Men's",
          productName: " Converse blue training shoes ",
          price: "600",
          discount: "",
          rate: 0,
          reviews: 0,
        },
        {
          id: 5,
          img_1:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_1_7d420d81e9.jpg",
          img_2:
            "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_2_829e54f8cc.jpg",
          badges: ["TOP", "NEW"],
          categoryName: "Accessories",
          productName: " Fashionable Overnight Bag ",
          price: "1100",
          discount: "",
          rate: 4.5,
          reviews: 23,
        },
      ],
      // END:: ALL PRODUCTS
    };
  },
};
</script>
