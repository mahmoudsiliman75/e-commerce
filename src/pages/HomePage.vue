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
                  <DollarSignIcon size="2.5x" />
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
                v-lazy="
                  'https://d-themes.com/vue/riode/demo-1/images/home/banners/banner1.jpg'
                "
                width="100"
                height="100"
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
                v-lazy="
                  'https://d-themes.com/vue/riode/demo-1/images/home/banners/banner2.jpg'
                "
                width="100"
                height="100"
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
                v-lazy="
                  'https://d-themes.com/vue/riode/demo-1/images/home/banners/banner3.jpg'
                "
                width="100"
                height="100"
              />
            </div>
          </div>
          <!-- END:: FEATURED CATEGORY CARD -->
        </div>
      </div>
    </div>
    <!-- END:: FEATURED CATEGORIES -->

    <!-- START:: FEATURED PRODUCTS -->
    <div class="featured_products padding-slider">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2>Featured Items</h2>
          <span class="title_backdrop"> Featured Items </span>
        </div>
        <!-- START:: TITLE -->

        <VueSlickCarousel v-bind="productsSliderSettings">
          <!-- START:: PRODUCT CARD -->
          <ProductCard
            v-for="item in featuredItems"
            :key="item.id"
            :productData="item"
            :type="'featured'"
          />
          <!-- END:: PRODUCT CARD -->
        </VueSlickCarousel>
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
      <div class="container-fluid">
        <div class="wraper">
          <VueSlickCarousel v-bind="partnersSliderSettings">
            <div
              class="logo_wraper"
              v-for="item in partnersData"
              :key="item.id"
            >
              <img v-lazy="item.logo" alt="Logo" />
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
  DollarSignIcon,
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
    DollarSignIcon,
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
      // bestSellers: [],
      // END:: BEST SELLERS DATA

      // START:: FEATURED ITEMS DATA
      bestSellers: this.$store.state.bestSellers,
      featuredItems: this.$store.state.featuredItems,
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
        autoplay: true,
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
        autoplay: true,
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

  methods: {
    // getBestSellers(){
    //   this.$store.state.allProducts.forEach(element => {
    //     if(element.bestSellers == true){
    //       this.bestSellers.push(element)
    //     }
    //    console.log();
    //   });
    // }
  },
  mounted() {
    // this.getBestSellers();
  },
};
</script>
