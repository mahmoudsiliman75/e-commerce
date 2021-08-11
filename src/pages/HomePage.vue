<template>
  <div class="home">
    <!-- START:: SLIDER -->
    <TheSlider :sliderItems="sliderItems" />
    <!-- END:: SLIDER -->

    <!-- START:: FEATURES -->

    <div class="features">
      <div class="cards_wraper">
        <div class="container">
          <VueSlickCarousel v-bind="featuresSliderSettings">
            <!-- START:: SINGLE -->
            <LoaderFeatureCard v-if="isLoading" />
            <div class="featured_card" v-else>
              <div class="wrapper">
                <div class="icon_wraper">
                  <ZapIcon size="2.5x" />
                </div>

                <div class="title">
                  <h4>Free Shipping & Return</h4>
                </div>

                <div class="text">Free shipping on orders over 99 EGP</div>
              </div>
            </div>

            <!-- START:: SINGLE -->
            <LoaderFeatureCard v-if="isLoading" />
            <div class="featured_card" v-else>
              <div class="icon_wraper">
                <ClockIcon size="2.5x" />
              </div>

              <div class="title">
                <h4>Customer Support 24/7</h4>
              </div>

              <div class="text">Instant access to perfect support</div>
            </div>

            <!-- START:: SINGLE -->
            <LoaderFeatureCard v-if="isLoading" />
            <div class="featured_card" v-else>
              <div class="icon_wraper">
                <LockIcon size="2.5x" />
              </div>

              <div class="title">
                <h4>100% Secure Payment</h4>
              </div>

              <div class="text">We ensure secure payment!</div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <!-- END:: FEATURES -->

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
            class="col-11 col-md-3"
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
    <div class="best_sellers padding-slider">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2>Best Sellers</h2>
          <span class="title_backdrop"> Best Sellers </span>
        </div>
        <!-- START:: TITLE -->

        <VueSlickCarousel v-bind="productsSliderSettings">
          <!-- START:: PRODUCT CARD -->
          <ProductCard
            v-for="product in bestSellers"
            :key="product.id"
            :productData="product"
            :type="'best'"
          />
          <!-- END:: PRODUCT CARD -->
        </VueSlickCarousel>
      </div>
    </div>
    <!-- END:: BEST SELLERS -->

    <!-- START:: FEATURED CATEGORIES -->
    <div class="featured_categories">
      <div class="container">
        <div class="row justify-content-center">
          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <LoaderOfferCard v-if="isLoading" />
            <div class="featured_category_card_wrap" v-else>
              <div class="overlay">
                <div class="wraper">
                  <h2>For Men's</h2>
                  <p>STARTING AT $29</p>
                  <router-link to="/">
                    <span>SHOP NOW</span>
                    <span> <ArrowRightIcon size="1.2x" /> </span>
                  </router-link>
                </div>
              </div>
              <img
                src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner1.jpg"
              />
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->

          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <LoaderOfferCard v-if="isLoading" />
            <div class="featured_category_card_wrap middle" v-else>
              <div class="overlay">
                <div class="wraper">
                  <p>Up To 20% Off</p>
                  <p>Black Friday</p>
                  <h2>Sale</h2>
                </div>
                <router-link to="/">
                  <span>SHOP NOW</span>
                  <span> <ArrowRightIcon size="1.2x" /> </span>
                </router-link>
              </div>
              <img
                src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner2.jpg"
              />
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->

          <!-- START:: FEATURED CATEGORY CARD -->
          <div class="col-11 col-md-4 my-4 my-md-0">
            <LoaderOfferCard v-if="isLoading" />
            <div class="featured_category_card_wrap" v-else>
              <div class="overlay">
                <div class="wraper">
                  <h2>Fashions</h2>
                  <p>30% OFF</p>
                  <router-link to="/">
                    <span>SHOP NOW</span>
                    <span> <ArrowRightIcon size="1.2x" /> </span>
                  </router-link>
                </div>
              </div>
              <img
                src="https://d-themes.com/vue/riode/demo-1/images/home/banners/banner3.jpg"
              />
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->
        </div>
      </div>
    </div>
    <!-- END:: FEATURED CATEGORIES -->

    <!-- START:: FEATURED PRODUCTS -->
    <div class="featured_products">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2>Featured Items</h2>
          <span class="title_backdrop"> Featured Items </span>
        </div>
        <!-- START:: TITLE -->

        <div class="row justify-content-center">
          <div
            class="col-11 col-md-3 my-4 my-md-0"
            v-for="item in featuredItems"
            :key="item.id"
          >
            <ProductCard :productData="item" :type="'featured'" />
          </div>
        </div>
      </div>
    </div>
    <!-- END:: FEATURED PRODUCTS -->

    <!-- START:: ADVERTISING PANEL -->
    <div
      class="ads_panel"
      :style="{ background: `url( ${advertisingPanelData.img} )` }"
    >
      <AdvertisingPanel :adData="advertisingPanelData" />
    </div>
    <!-- END:: ADVERTISING PANEL -->

    <!-- START:: PARTNERS -->
    <div class="partners">
      <div class="container">
        <div class="wraper">
          <VueSlickCarousel v-bind="partnersSliderSettings">
            <div
              class="logo_wraper"
              v-for="item in partnersData"
              :key="item.id"
            >
              <img :src="item.logo" alt="Logo" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <!-- END:: PARTNERS -->
  </div>
</template>

<script>
// START:: IMPORTING SLICK CAOUSIL
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// END:: IMPORTING SLICK CAOUSIL

// START:: IMPORTING HOME COMPS
import TheSlider from "../components/layouts/TheSlider.vue";
import CategoryCard from "../components/basics/CategoryCard.vue";
import ProductCard from "../components/basics/ProductCard.vue";
import AdvertisingPanel from "../components/basics/AdvertisingPanel.vue";
// END:: IMPORTING HOME COMPS

// START:: LOADER
import LoaderFeatureCard from "../components/ui/Loaders/LoaderFeatureCard";
import LoaderOfferCard from "../components/ui/Loaders/LoaderOfferCard";
// END:: LOADER

// START:: IMPORTING FEATHER ICONS
import {
  ZapIcon,
  ClockIcon,
  LockIcon,
  ArrowRightIcon,
} from "vue-feather-icons";
// END:: IMPORTING FEATHER ICONS

export default {
  name: "Home",

  components: {
    // SLICK CAROUSEL COMP
    VueSlickCarousel,

    // HOME COMPS
    TheSlider,
    CategoryCard,
    ProductCard,
    AdvertisingPanel,
    LoaderFeatureCard,
    LoaderOfferCard,

    // FEATHER ICONS
    ZapIcon,
    ClockIcon,
    LockIcon,
    ArrowRightIcon,
  },

  data() {
    return {
      isLoading: false,
      // START:: SLIDER DATA
      sliderItems: [
        {
          id: "1",
          src: "https://d-themes.com/vue/riode/demo-1/images/home/slides/slide1.jpg",
        },
        {
          id: "2",
          src: "https://d-themes.com/vue/riode/demo-1/images/home/slides/slide2.jpg",
        },
        {
          id: "3",
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
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_3_3fab9f444a.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_4_2e92b20b8b.jpg",
            },
          ],
          badges: ["TOP", "SALE"],
          categoryName: "For Men's",
          productName: "Beyond Riode Original T-Shirt",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "500",
          discount: "250",
          rate: 4,
          reviews: 2,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_1_9ae072548f.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_2_7f087d1140.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_3_bb1cfda616.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_4_f23132a336.jpg",
            },
          ],
          badges: ["NEW"],
          categoryName: "Accessories",
          productName: " Mackintosh Poket backpack ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "500",
          discount: "",
          rate: 2.5,
          reviews: 4,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_2_f77ebc3ad7.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_1_67ca70354d.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_4_a6d196bfe0.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_3_57416f30e1.jpg",
            },
          ],
          badges: ["SALE"],
          categoryName: "Fashionable Women's",
          productName: " Solid pattern in fashion summer dress ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "700",
          discount: "400",
          rate: 3.5,
          reviews: 10,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_1_8812a927b7.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_2_b8a6d64d23.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_3_077c0929b1.jpg",
            },
          ],
          badges: ["NEW"],
          categoryName: "For Men's",
          productName: " Converse blue training shoes ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "600",
          discount: "",
          rate: 0,
          reviews: 0,
          quantity: 1,
          quantityPrice: 0,
          status: "out of stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_1_7d420d81e9.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_2_829e54f8cc.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_17_4_a955c3327f.jpg",
            },
          ],
          badges: ["TOP", "NEW"],
          categoryName: "Accessories",
          productName: " Fashionable Overnight Bag ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "1100",
          discount: "",
          rate: 4.5,
          reviews: 23,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
      ],
      // END:: BEST SELLERS DATA

      // START:: FEATURED ITEMS DATA
      featuredItems: [
        {
          id: 1,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_3_3fab9f444a.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_4_2e92b20b8b.jpg",
            },
          ],
          badges: ["TOP", "SALE"],
          categoryName: "For Men's",
          productName: "Beyond Riode Original T-Shirt",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "500",
          discount: "250",
          rate: 4,
          reviews: 2,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_1_9ae072548f.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_2_7f087d1140.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_3_bb1cfda616.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_2_4_f23132a336.jpg",
            },
          ],
          badges: ["NEW"],
          categoryName: "Accessories",
          productName: " Mackintosh Poket backpack ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "500",
          discount: "",
          rate: 2.5,
          reviews: 4,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_2_f77ebc3ad7.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_1_67ca70354d.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_4_a6d196bfe0.jpg",
            },
            {
              id: 4,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_1_3_57416f30e1.jpg",
            },
          ],
          badges: ["SALE"],
          categoryName: "Fashionable Women's",
          productName: " Solid pattern in fashion summer dress ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "700",
          discount: "400",
          rate: 3.5,
          reviews: 10,
          quantity: 1,
          quantityPrice: 0,
          status: "in stock",
          inCart: false,
          inWishlist: false,
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_1_8812a927b7.jpg",
            },
            {
              id: 2,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_2_b8a6d64d23.jpg",
            },
            {
              id: 3,
              img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_12_3_077c0929b1.jpg",
            },
          ],
          badges: ["NEW"],
          categoryName: "For Men's",
          productName: " Converse blue training shoes ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
          price: "600",
          discount: "",
          rate: 0,
          reviews: 0,
          quantity: 1,
          quantityPrice: 0,
          status: "out of stock",
          inCart: false,
          inWishlist: false,
        },
      ],
      // END:: FEATURED ITEMS DATA

      // START:: ADVERTISING PANEL DATA
      advertisingPanelData: {
        img: "https://d-themes.com/vue/riode/demo-1/images/home/parallax.jpg",
        mainTitle: "Summer Season Sale",
        subTitle_1: " Extra 30% Off Online ",
        subTitle_2: "Free shipping on orders over 99 EGP",
      },
      // END:: ADVERTISING PANEL DATA

      // START:: PARTNERS
      partnersData: [
        {
          id: 1,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/1.png",
        },
        {
          id: 2,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/2.png",
        },
        {
          id: 3,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/3.png",
        },
        {
          id: 4,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/4.png",
        },
        {
          id: 5,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/5.png",
        },
        {
          id: 6,
          logo: "https://d-themes.com/vue/riode/demo-1/images/brands/6.png",
        },
      ],
      // END:: PARTNERS

      // START:: SLICK SLIDER SETTINDS
      featuresSliderSettings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },

      productsSliderSettings: {
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
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },

      partnersSliderSettings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      // END:: SLICK SLIDER SETTINDS
    };
  },
};
</script>
