<template>
  <div class="wishlist_wraper">
    <div class="container">
      <!-- START:: EMPTY CART MESSAGE -->
      <div 
        class="empty_wishlist_message p-5 text-center"
        v-if=" this.$store.state.wishlist.length == 0 "
      >
        <span> <HeartIcon size="5x"/> </span>
        <h5 class="mt-5"> No Items Added To Wishlist Yet </h5>
      </div>
      <!-- START:: EMPTY CART MESSAGE -->

      <!-- START:: WISHLIST TABLE -->
      <div class="wraper" v-else>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">PRODUCT</th>
              <th class="text-left">PRICE</th>
              <th class="text-left">STOCK STATUS</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>

          <tbody>
            <tr 
              v-for="item in this.$store.state.wishlist" 
              :key="item.id"
            >
              <td>
                <div class="product">
                  <img :src="item.images[0].img" />
                  <p>{{ item.productName }}</p>
                </div>
              </td>

              <td>
                <div class="price" v-if=" item.discount.length != 0 || item.discount != 0 "> {{ item.discount }} EGP </div>
                <div class="price" v-else> {{ item.price }} EGP </div>
              </td>

              <td>
                <span class="status text-success text-capitalize" v-if="item.status == 'in stock'"> {{ item.status }} </span>
                <span class="status text-danger text-capitalize" v-if="item.status == 'out of stock'"> {{ item.status }} </span>
              </td>

              <td>
                <div class="action">
                  <button 
                    class="btn" 
                    :class=" item.status == 'out of stock' ? 'disabled' : '' " 
                    @click="addToCart(item)"
                  >
                    Add To Cart
                  </button>
                </div>
              </td>

              <td>
                <div>
                  <button 
                    class="btn" 
                    @click="removeFromWishlist(item)"
                  ><XIcon/></button>
                </div>
              </td>
            </tr>
          </tbody>
        </v-simple-table>

        <!-- START:: SOCIAL MEDIA SHARING -->
        <div class="social_sharing_wraper">
          <span> Share On: </span>
          <div class="wraper">
            <ShareNetwork
                network="facebook"
                url="https://news.vuejs.org/issues/180"
                title="E-commerce Wishlist"
                description="The Description Will Go Here"
                quote="Some Quotes Will Go Here"
                hashtags="ecommerce"
              >
                <i class="fab fa-facebook-f"></i>
            </ShareNetwork>

            <ShareNetwork
                network="twitter"
                url="https://news.vuejs.org/issues/180"
                title="E-commerce Wishlist"
                description="The Description Will Go Here"
                quote="Some Quotes Will Go Here"
                hashtags="ecommerce"
              >
                <i class="fab fa-twitter"></i>
            </ShareNetwork>

            <ShareNetwork
                network="whatsapp"
                url="https://news.vuejs.org/issues/180"
                title="E-commerce Wishlist"
                description="The Description Will Go Here"
                quote="Some Quotes Will Go Here"
                hashtags="ecommerce"
              >
                <i class="fab fa-whatsapp"></i>
            </ShareNetwork>

            <ShareNetwork
                network="telegram"
                url="https://news.vuejs.org/issues/180"
                title="E-commerce Wishlist"
                description="The Description Will Go Here"
                quote="Some Quotes Will Go Here"
                hashtags="ecommerce"
              >
                <i class="fab fa-telegram-plane"></i>
            </ShareNetwork>
          </div>
        </div>
        <!-- END:: SOCIAL MEDIA SHARING -->
      </div>
      <!-- END:: WISHLIST TABLE -->
    </div>
  </div>
</template>

<script>
import {XIcon, HeartIcon} from "vue-feather-icons";

export default {
  name: "Wishlist",

  components: {
    XIcon,
    HeartIcon,
  },

  methods: {
    // START:: ADD TO CART
    addToCart(item) {
      this.$store.dispatch("addItemToCart", { item });
    },
    // END:: ADD TO CART

    // START:: REMOVE FROM WISHLIST
    removeFromWishlist(item) {
      this.$store.dispatch("removeItemToWishlist", {item});
    }
    // END:: REMOVE FROM WISHLIST
  },
};
</script>
