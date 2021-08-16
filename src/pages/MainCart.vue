<template>
  <div class="main_cart_wraper">
    <div class="container">
      <!-- START:: EMPTY CART MESSAGE -->
      <div
        class="empty_cart_message p-5"
        v-if="this.$store.state.shoppingCart.length == 0"
      >
        <span> <ShoppingCartIcon size="5x" /> </span>
        <h5 class="mt-5">Your Cart Is Currently Empty</h5>
      </div>
      <!-- START:: EMPTY CART MESSAGE -->

      <!-- START:: MAIN CART CONTENT -->
      <div class="wraper" v-else>
        <div class="row">
          <div class="col-8">
            <div class="cart_table mb-5">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left fw-bold">PRODUCT</th>
                      <th class="text-left">PRICE</th>
                      <th class="text-left">QUANTITY</th>
                      <th class="text-left">SUBTOTAL</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in $store.state.shoppingCart"
                      :key="item.id"
                    >
                      <td>
                        <div class="product">
                          <img :src="item.images[0].img" />
                          <p>{{ item.productName }}</p>
                        </div>
                      </td>

                      <td>
                        <div class="price" v-if="item.discount.length == 0">
                          {{ item.price }}
                        </div>
                        <div class="price" v-else>
                          {{ item.discount }}
                        </div>
                      </td>

                      <td>
                        <div class="quantity_btns">
                          <button class="btn" @click="increaseQuantity(item)">
                            <PlusIcon size="1x" />
                          </button>
                          <button class="btn" disabled>
                            {{ item.quantity }}
                          </button>
                          <button class="btn" @click="decreaseQuantity(item)">
                            <MinusIcon size="1x" />
                          </button>
                        </div>
                      </td>

                      <td>
                        <div class="subtotal">
                          <!-- <span v-if=" item.discount.length != 0 || item.discount != 0 "> 
                            {{ item.quantity * item.discount }}
                          </span>

                          <span v-else> 
                            {{ item.quantity * item.price }}
                          </span> -->

                          {{ item.quantityPrice }}
                        </div>
                      </td>

                      <td>
                        <button
                          class="btn remove_btn"
                          @click="removeFromCart(item)"
                        >
                          <XCircleIcon />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>

            <div class="coupon_wraper">
              <h5>Discount Coupon</h5>

              <form>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Coupon Code....."
                />

                <button class="btn mt-5">Apply Coupon</button>
              </form>
              <!-- START:: CHECKOUT ROUTE -->
              <router-link to="/checkout" class="checkout">
                GO TO CHECKOUT
              </router-link>
              <!-- END:: CHECKOUT ROUTE -->
            </div>
          </div>

          <!-- START:: MAIN CART TOTALS -->
          <div class="col-4 px-0">
            <div class="cart_totals">
              <div class="cart_totals_header">
                <h6>Cart Toals</h6>
              </div>

              <div class="cart_subtotal">
                <h6>Cart Subtotals</h6>
                <h6>{{ this.$store.state.cartSubtotal }} EGP</h6>
              </div>

              <div class="shipping_fees">
                <h6>Shipping Fees</h6>
                <v-autocomplete
                  chips
                  deletable-chips
                  dense
                  small-chips
                  solo
                  v-model="shippingCitiesValues"
                  :items="shippingCities"
                  label="Select Your City"
                  class="my-5"
                  @input="getShippingFees()"
                ></v-autocomplete>
                <div class="fees">
                  <h6>Shipping subtotal</h6>
                  <h6>100 EGP</h6>
                </div>
              </div>

              <div class="cart_totals_footer">
                <h6>Total</h6>
                <h6>350 EGP</h6>
              </div>
            </div>
          </div>
          <!-- END:: MAIN CART TOTALS -->
        </div>
      </div>
      <!-- END:: MAIN CART CONTENT -->
    </div>
  </div>
</template>

<script>
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  XCircleIcon,
} from "vue-feather-icons";

export default {
  name: "MainCart",

  components: {
    ShoppingCartIcon,
    PlusIcon,
    MinusIcon,
    XCircleIcon,
  },

  data() {
    return {
      // shippingCities: [
      //   {
      //     id: 1,
      //     city: "City1",
      //     shippingValue: 100,
      //   },
      //   {
      //     id: 2,
      //     city: "City2",
      //     shippingValue: 200,
      //   },
      //   {
      //     id: 3,
      //     city: "City3",
      //     shippingValue: 150,
      //   },
      // ],
      shippingCities: ["City1", "City2", "City3"],
      shippingCitiesValues: [100, 200, 150],
    };
  },

  methods: {
    // START:: REMOVE ITEM FROM CART
    removeFromCart(item) {
      this.$store.dispatch("removeItemFromCart", { item });
    },
    // END:: REMOVE ITEM FROM CART

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

    getShippingFees(e) {
      console.log(e);
    },
  },
};
</script>
