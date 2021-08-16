<template>
  <div class="wraper d-flex justify-content-center align-items-center">
    <!-- START:: LOADER -->
    <LoaderProductCard v-if="isLoading" />
    <!-- END:: LOADER -->

    <!-- START:: PRODUCT CARD -->
    <div class="product_card_wraper" v-else>
      <div class="product_image_wraper">
        <div class="badges_wraper">
          <span class="badge" v-for="badge in productData.badges" :key="badge">
            {{ badge }}
          </span>
          <span
            class="badge bg-danger"
            v-if="productData.status == 'out of stock'"
          >
            Out Of Stock
          </span>
        </div>

        <div class="overlay">
          <div class="actions_btns_wraper">
            <router-link
              :to="{
                name: 'ProductDetails',
                params: { product_id: productData.id },
              }"
              v-b-tooltip.hover
              title="Details"
            >
              <ArrowRightIcon size="1.2x" class="arrow_icon" />
            </router-link>

            <button
              class="add_to_wish added"
              v-b-tooltip.hover
              title="Remove From Wishlist"
              v-if="productData.inWishlist"
              @click="removeFromWishlist(productData)"
            >
              <HeartIcon size="1.2x" class="heart_icon" />
            </button>

            <button
              class="add_to_wish"
              v-b-tooltip.hover
              title="Add To Wishlist"
              v-else
              @click="addToWishlist(productData)"
            >
              <HeartIcon size="1.2x" class="heart_icon" />
            </button>

            <button
              v-b-tooltip.hover
              title="Add To Cart"
              @click="addToCart(productData)"
              v-if="productData.status != 'out of stock'"
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
        ><XIcon />
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
                    v-for="item in productData.images"
                    :key="item.id"
                  >
                    <img :src="item.img" />
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
            <!-- END:: PRODUCT IMAGES SLIDER -->

            <!-- START:: PRODUCT DETAILS SECTION -->
            <div class="col-12 col-md-6">
              <div class="product_details">
                <h3 class="product_name">{{ productData.productName }}</h3>

                <p class="product_category">
                  <span> CATEGORY: </span>
                  <span> {{ productData.categoryName }} </span>
                </p>

                <h3
                  class="product_price"
                  v-if="productData.discount.length != 0"
                >
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
                  <RatingStars :rate="productData.rate" class="m-0" />
                  <span class="reviews">
                    ({{ productData.reviews }} Reviews)
                  </span>
                </h6>

                <div class="product_description">
                  {{ productData.description }}
                </div>

                <div class="product_options">
                  <div class="wraper mt-4">
                    <label> Color: </label>
                    <select class="form-select">
                      <option selected disabled>Select Colors</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="wraper mt-4">
                    <label> Size: </label>
                    <select class="form-select">
                      <option selected disabled>Select Sizes</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="add_product_to_cart">
                  <div class="quantity_btns">
                    <button class="btn" @click="increaseQuantity(productData)">
                      <PlusIcon size="1x" />
                    </button>
                    <button class="btn" disabled>
                      {{ productData.quantity }}
                    </button>
                    <button class="btn" @click="decreaseQuantity(productData)">
                      <MinusIcon size="1x" />
                    </button>
                  </div>

                  <button
                    class="btn add_to_cat mx-1"
                    @click="addToCart(productData)"
                    v-if="productData.status != 'out of stock'"
                  >
                    <span> <ShoppingCartIcon /> </span>
                    <span> Add To Cart </span>
                  </button>

                  <button
                    class="btn add_to_wishlist"
                    @click="addToWishlist(productData)"
                  >
                    <span> <HeartIcon /> </span>
                    <span> Add To Wishlist </span>
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
import LoaderProductCard from "../ui/Loaders/LoaderProductCard.vue";
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
    LoaderProductCard,
  },

  props: ["productData", "type"],

  data() {
    return {
      // START:: PRODUCT COLOR & SIZE
      ProductColorAndSize: {
        productColor: "",
        productSize: "",
      },
      // END:: PRODUCT COLOR & SIZE
      isLoading: false,
      imgsSliderSettings: {
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },

  methods: {
    // START:: ADD TO CART
    addToCart(item) {
      this.$store.dispatch("addItemToCart", { item });
    },
    // END:: ADD TO CART

    // START:: INCREMENT QUANTITY
    increaseQuantity(item) {
      this.$store.dispatch("incrementQuantity", { item });
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decreaseQuantity(item) {
      this.$store.dispatch("decrementQuantity", { item });
    },
    // END:: DECREMENT QUANTITY

    // START:: ADD TO WISHLIST
    addToWishlist(item) {
      this.$store.dispatch("addItemToWishlist", { item });
    },
    // END:: ADD TO WISHLIST

    // START:: REMOVE TO WISHLIST
    removeFromWishlist(item) {
      this.$store.dispatch("removeItemToWishlist", { item });
    },
    // END:: REMOVE TO WISHLIST
  },
};
</script>
