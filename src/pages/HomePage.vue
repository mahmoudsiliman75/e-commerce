<template>
  <div class="home">
    <!-- START:: SLIDER -->
    <TheSlider :sliderItems="sliderItems" />
    <!-- END:: SLIDER -->

    <!-- START:: CATEGORIES -->
    <div class="categories">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2>Categories</h2>
          <span class="title_backdrop"> Categories </span>
        </div>
        <!-- START:: TITLE -->

        <div class="row justify-content-center align-items-center">
          <!-- START:: CATEGORY CAR -->
          <div
            class="col-10 col-md-3"
            v-for="category in Categories"
            :key="category.id"
          >
            <CategoryCard
              :categoryType="category.type"
              :categoryImg="category.img"
              :categoryTxet="category.text"
            />
          </div>
          <!-- END:: CATEGORY CAR -->
        </div>
      </div>
    </div>
    <!-- END:: CATEGORIES -->

    <!-- START:: BEST SELLERS -->
    <div class="best_sellers">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2>Best Sellers</h2>
          <span class="title_backdrop"> Best Sellers </span>
        </div>
        <!-- START:: TITLE -->

        <VueSlickCarousel v-bind="settings">
          <!-- START:: PRODUCT CARD -->
          <ProductCard
            v-for="product in bestSellers"
            :key=" product.id "
            :productData=" product "
          />
          <!-- END:: PRODUCT CARD -->
        </VueSlickCarousel>
      </div>
    </div>
    <!-- END:: BEST SELLERS -->

    <!-- START:: FEATURED CATEGORIES -->
    <div class="featured_categories">
      <div class="container">
        <div class="row">
          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <div class="featured_category_card_wrap">
              <div class="overlay">
                <div class="wraper">
                  <h2> For Men's </h2>
                  <p> STARTING AT $29 </p> 
                  <router-link to="/"> 
                    <span>SHOP NOW</span>
                    <span> <ArrowRightIcon size="1.2x"/> </span> 
                  </router-link>
                </div>
              </div>
              <img src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner1.jpg">
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->

          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <div class="featured_category_card_wrap middle">
              <div class="overlay">
                <div class="wraper">
                  <p> Up To 20% Off </p>
                  <p> Black Friday </p> 
                  <h2> Sale </h2>
                </div>
                <router-link to="/"> 
                  <span>SHOP NOW</span>
                  <span> <ArrowRightIcon size="1.2x"/> </span> 
                </router-link>
              </div>
              <img src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner2.jpg">
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->

          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <div class="featured_category_card_wrap">
              <div class="overlay">
                <div class="wraper">
                  <h2> Fashions </h2>
                  <p> 30% OFF </p> 
                  <router-link to="/"> 
                    <span>SHOP NOW</span>
                    <span> <ArrowRightIcon size="1.2x"/> </span> 
                  </router-link>
                </div>
              </div>
              <img src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner3.jpg">
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->
        </div>
      </div>
    </div>
    <!-- END:: FEATURED CATEGORIES -->
  </div>
</template>

<script>
// START:: IMPORTING SLICK CAOUSIL
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// END:: IMPORTING SLICK CAOUSIL

import TheSlider from "../components/layouts/TheSlider.vue";
import CategoryCard from "../components/basics/CategoryCard.vue";
import ProductCard from "../components/basics/ProductCard.vue";

import {ArrowRightIcon} from "vue-feather-icons"; 

export default {
  name: "Home",

  components: {
    VueSlickCarousel,
    TheSlider,
    CategoryCard,
    ProductCard,
    ArrowRightIcon,
  },

  data() {
    return {
      // START:: SLIDER DATA
      sliderItems: [
        {
          src: "https://d-themes.com/vue/riode/demo-1/images/home/slides/slide1.jpg",
        },
        {
          src: "https://d-themes.com/vue/riode/demo-1/images/home/slides/slide2.jpg",
        },
        {
          src: "https://d-themes.com/vue/riode/demo-diamart/images/home/slides/1.jpg",
        },
      ],
      // END:: SLIDER DATA

      // START:: CATEGORIES CARD DATA
      Categories: [
        {
          id: 1,
          type: "mens",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category1.jpg",
          text: "For Men's",
        },
        {
          id: 2,
          type: "accessories",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category2.jpg",
          text: "Accessories",
        },
        {
          id: 3,
          type: "women",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category3.jpg",
          text: "Fashionable Women's",
        },
        {
          id: 4,
          type: "cosmetic",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category4.jpg",
          text: "Cosmetic",
        },
      ],
      // END:: CATEGORIES CARD DATA

      // START:: BEST SELLERS DATA
      bestSellers: [
        {
          id: 1,
          img_1: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
          img_2: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
          badges: ["TOP", "SALE"],
          categoryName: "For Men's",
          productName: "Beyond Riode Original T-Shirt",
          price: "500",
          descount: "250",
          rate: 4,
          reviws: 2,
        },
        {
          id: 2,
          img_1: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_1_9ae072548f.jpg",
          img_2: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_2_7f087d1140.jpg",
          badges: ["NEW"],
          categoryName: "Accessories",
          productName: " Mackintosh Poket backpack ",
          price: "500",
          descount: "",
          rate: 2.5,
          reviws: 4,
        },
        {
          id: 3,
          img_1: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_2_f77ebc3ad7.jpg",
          img_2: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_1_67ca70354d.jpg",
          badges: ["SALE"],
          categoryName: "Fashionable Women's",
          productName: " Solid pattern in fashion summer dress ",
          price: "700",
          descount: "400",
          rate: 3.5,
          reviws: 10,
        },
        {
          id: 4,
          img_1: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_1_8812a927b7.jpg",
          img_2: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_2_b8a6d64d23.jpg",
          badges: ["NEW"],
          categoryName: "For Men's",
          productName: " Converse blue training shoes ",
          price: "600",
          descount: "",
          rate: 0,
          reviws: 0,
        },
        {
          id: 5,
          img_1: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_1_7d420d81e9.jpg",
          img_2: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_2_829e54f8cc.jpg",
          badges: ["TOP", "NEW"],
          categoryName: "Accessories",
          productName: " Fashionable Overnight Bag ",
          price: "1100",
          descount: "",
          rate: 4.5,
          reviws: 23,
        },
      ],
      // END:: BEST SELLERS DATA

      settings: {
        dots: true,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }
    };
  },
};
</script>
