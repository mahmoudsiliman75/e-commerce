<template>
  <div class="wraper d-flex justify-content-center align-items-center">
    <div class="product_card_wraper">
      <div class="product_image_wraper">
        <div class="badges_wraper">
          <span class="badge" v-for="badge in productData.badges" :key="badge">
            {{ badge }}
          </span>
        </div>

        <div class="overlay">
          <div class="actions_btns_wraper">
            <router-link to="/" v-b-tooltip.hover title="Details">
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
        <img :src="productData.img_1" alt="Product Image" />
        <img :src="productData.img_2" alt="Product Image" />
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
          <span class="previous_price">
            <span>{{ productData.price }}</span>
            <span>EGP</span>
          </span>

          <span class="current_price">
            <span>{{ productData.discount }}</span>
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

    <b-modal
      :id="'modal-' + type + '-' + productData.id"
      class="product_modal"
      size="xl"
      hide-header
      hide-footer
    >
      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="$bvModal.hide('product_modal')"
        ><XIcon />
      </b-button>
      <h1>{{ productData.productName }}</h1>
    </b-modal>
  </div>
</template>

<script>
import {
  ArrowRightIcon,
  HeartIcon,
  ShoppingCartIcon,
  XIcon,
} from "vue-feather-icons";
import RatingStars from "../ui/RatingStars.vue";

export default {
  components: {
    ArrowRightIcon,
    RatingStars,
    HeartIcon,
    ShoppingCartIcon,
    XIcon,
  },

  props: ["productData", "type"],

  methods: {
    addToCart(item) {
      this.$store.dispatch("addItemToCart", { item });
    },
  },
};
</script>
