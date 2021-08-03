<template>
  <div class="wraper d-flex justify-content-center align-items-center">
    <!-- START:: PRODUCT CARD -->
    <div class="product_card_wraper">
      <div class="product_image_wraper">
        <div class="badges_wraper">
          <span class="badge" v-for="badge in productData.badges" :key="badge">
            {{ badge }}
          </span>
        </div>

        <div class="overlay">
          <div class="actions_btns_wraper">
            <router-link :to="{name: 'ProductDetails', params: { product_id: productData.id } }" v-b-tooltip.hover title="Details">
              <ArrowRightIcon size="1.2x" class="arrow_icon" />
            </router-link>  

            <button
              class="add_to_wish"
              v-b-tooltip.hover
              title="Add To Wishlist"
            >
              <HeartIcon size="1.2x" class="heart_icon" />
            </button>

            <button
              class="add_to_wish"
              v-b-tooltip.hover
              title="Add To Cart"
              @click="addToCart(productData)"
            >
              <ShoppingCartIcon size="1.2x" class="cart_icon" />
            </button>
          </div>

          <div class="bottom_button">
            <b-button v-b-modal="'modal-' + type + '-' + productData.id"
              >QUICK VIEW</b-button
            >
          </div>
        </div>
        <img :src="productData.images[0].img" alt="Product Image" />
        <img :src="productData.images[1].img" alt="Product Image" />
      </div>

      <div class="product_card_body">
        <p class="category">{{ productData.categoryName }}</p>
        <h5 class="product_name">
          {{
            productData.productName.length > 33
              ? productData.productName.substring(0, 30) + ".."
              : productData.productName
          }}
        </h5>
        <h4 class="product_price" v-if="productData.discount.length != 0">
          <span class="current_price">
            <span>{{ productData.discount }}</span>
            <span>EGP</span>
          </span>

          <span class="previous_price">
            <span>{{ productData.price }}</span>
            <span>EGP</span>
          </span>
        </h4>

        <h4 class="product_price" v-else>
          <span class="current_price">
            <span>{{ productData.price }}</span>
            <span>EGP</span>
          </span>
        </h4>
        <div class="rating">
          <RatingStars :rate="productData.rate" />
          <div class="reviews">( {{ productData.reviews }} Reviews )</div>
        </div>
      </div>
    </div>
    <!-- END:: PRODUCT CARD -->

    <!-- START:: PRODUCT MODAL -->
    <b-modal
      :id="'modal-' + type + '-' + productData.id"
      class="product_modal"
      size="xl"
      hide-header
      hide-footer
    >
      <b-button
        class="mt-3 close_btn"
        block
        @click="$bvModal.hide('modal-' + type + '-' + productData.id)"
        ><XIcon/>
      </b-button>

      <div class="product_details_modal">
        <div class="container-fluid">
          <div class="row">
            <!-- START:: PRODUCT IMAGES SLIDER -->
            <div class="col-12 col-md-6 p-0">
              <div class="imgs_carousel">
                <VueSlickCarousel v-bind="imgsSliderSettings">
                  <div 
                    class="img_wraper"
                    v-for=" item in productData.images "
                    :key= " item.id "
                  >
                    <img :src="item.img"> 
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
            <!-- END:: PRODUCT IMAGES SLIDER -->

            <!-- START:: PRODUCT DETAILS SECTION -->
            <div class="col-12 col-md-6">
              <div class="product_details">
                <h3 class="product_name"> {{ productData.productName }} </h3>

                <p class="product_category"> 
                  <span> CATEGORY: </span> 
                  <span> {{ productData.categoryName }} </span> 
                </p>

                <h3 class="product_price" v-if="productData.discount.length != 0">
                  <span class="current_price">
                    <span>{{ productData.discount }}</span>
                    <span>EGP</span>
                  </span>

                  <span class="previous_price">
                    <span>{{ productData.price }}</span>
                    <span>EGP</span>
                  </span>
                </h3>

                <h3 class="product_price" v-else>
                  <span class="current_price">
                    <span>{{ productData.price }}</span>
                    <span>EGP</span>
                  </span>
                </h3>

                <h6 class="product_rate">  
                  <RatingStars :rate="productData.rate" class="m-0"/>
                  <span class="reviews"> ({{ productData.reviews }} Reviews) </span>
                </h6>

                <div class="product_description">
                  {{ productData.description }}
                </div>

                <div class="product_options">
                  <div class="wraper">
                    <label> Color: </label>
                      <v-autocomplete
                        chips
                        deletable-chips
                        dense
                        small-chips
                        solo
                        v-model="colorValues"
                        :items="colors"
                        label="Select Color"
                        class="mt-4"
                      ></v-autocomplete>
                  </div>

                  <div class="wraper">
                    <label> Size: </label>
                      <v-autocomplete
                        chips
                        deletable-chips
                        dense
                        small-chips
                        solo
                        v-model="sizeValues"
                        :items="sizes"
                        label="Select Size"
                        class="my-4"
                      ></v-autocomplete>
                  </div>
                </div>

                <div class="add_product_to_cart">
                  <div class="quantity_btns">
                    <button class="btn" @click="increaseQuantity(productData)">
                      <PlusIcon size="1x"/>
                    </button>
                    <button class="btn" disabled>
                      {{ productData.quantity }}
                    </button>
                    <button class="btn" @click="decreaseQuantity(productData)">
                      <MinusIcon size="1x"/>  
                    </button>
                  </div>

                  <button class="btn add_to_cat" @click="addToCart(productData)">
                    <span> <ShoppingCartIcon/> </span>
                    <span> Add To Cart </span>
                  </button>
                </div>
              </div>
            </div>
            <!-- END:: PRODUCT DETAILS SECTION -->
          </div>
        </div>
      </div>
    </b-modal>
    <!-- END:: PRODUCT MODAL -->
  </div>
</template>

<script>
// START:: IMPORTING SLICK CAOUSIL
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// END:: IMPORTING SLICK CAOUSIL

import RatingStars from "../ui/RatingStars.vue";

import {
  ArrowRightIcon,
  HeartIcon,
  ShoppingCartIcon,
  XIcon,
  PlusIcon,
  MinusIcon,
} from "vue-feather-icons";

export default {
  components: {
    VueSlickCarousel,
    ArrowRightIcon,
    RatingStars,
    HeartIcon,
    ShoppingCartIcon,
    XIcon,
    PlusIcon,
    MinusIcon,
  },

  props: ["productData", "type"],

  data() {
    return{
      // START:: COLOR SELECT BOX DATA
      colors: ["Black", "Red", "Blue"],
      colorValues: ["Black", "Red", "Blue"],
      // END:: COLOR SELECT BOX DATA

      // START:: SIZE SELECT BOX DATA
      sizes: ["S", "M", "L", "XL", "XXl"],
      sizeValues: ["S", "M", "L", "XL", "XXl"],
      // END:: SIZE SELECT BOX DATA

      imgsSliderSettings: {
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },

  methods: {
    // START:: ADD TO CART
    addToCart(item) {
      this.$store.dispatch("addItemToCart", { item });
    },
    // END:: ADD TO CART

    // START:: INCREMENT QUANTITY
    increaseQuantity(item) {
      this.$store.dispatch("incrementQuantity", {item});
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decreaseQuantity(item) {
      this.$store.dispatch("decrementQuantity", {item});
    }
    // END:: DECREMENT QUANTITY
  },
};
</script>
