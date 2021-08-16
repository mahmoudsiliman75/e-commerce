<template>
  <div class="checkout-section">
    <!-- START:: CONTAINER -->
    <div class="container">
      <div class="row">
        <!-- START:: ALERT LOGIN -->
        <div class="col-12" v-if="!this.$store.getters.token">
          <div class="alert-login">
            <div class="text">
              <span><AlertOctagonIcon size="2x" /></span>
              <h4>Returning customer?</h4>
            </div>
            <router-link to="/login"> Click here to login </router-link>
          </div>
        </div>
        <!-- END:: ALERT LOGIN -->

        <!-- START:: CHECKOUT FORM -->
        <div class="col-8">
          <div class="billing_details_token">
            <div class="title_part">
              <h3>BILLING DETAILS</h3>
            </div>
          </div>
          <!-- START:: ADDRESS AREA -->
          <div
            class="address_user row"
            v-if="this.$store.getters.token && this.addresses != null"
          >
            <!-- START:: SINGLE ADDRESS -->
            <div
              class="col-md-6"
              v-for="address in addresses"
              :key="address.id"
            >
              <div class="single_aadress">
                <input
                  type="radio"
                  name="addresses"
                  :value="address.type"
                  :id="address.id"
                />
                <label :for="address.id">
                  <h3>{{ address.type }}</h3>
                  <h4>
                    <i class="fas fa-map-marked-alt"></i> {{ address.place }}
                  </h4>
                  <ul>
                    <li><span>Name : </span> {{ address.username }}</li>
                    <li><span>phone : </span> {{ address.mobile }}</li>
                    <li>
                      <span>Address : </span>
                      {{ address.address }}
                    </li>
                  </ul>
                </label>
              </div>
            </div>
            <!-- END:: SINGLE ADDRESS -->
            <div class="billing_details_token">
              <div class="title_part">
                <h3>Payment Methods</h3>
              </div>
            </div>
            <div class="payment_methods">
              <div class="row">
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="cash" />

                    <label for="cash">
                      <img
                        src="../assets/media/payments/6.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="paypal" />

                    <label for="paypal">
                      <img
                        src="../assets/media/payments/1.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="visa" />

                    <label for="visa">
                      <img
                        src="../assets/media/payments/2.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="ebay" />

                    <label for="ebay">
                      <img
                        src="../assets/media/payments/3.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="maestro" />

                    <label for="maestro">
                      <img
                        src="../assets/media/payments/4.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-2">
                  <div class="single_payment">
                    <input type="radio" name="payment" id="masterCard" />

                    <label for="masterCard">
                      <img
                        src="../assets/media/payments/5.png"
                        alt="payment"
                        width="100"
                        height="100"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-auth mt-5">
              <button type="button" @click="orderComplate">
                <span class="sppinerAnimation" v-if="isWaiting == true"></span>
                <span v-if="isWaiting == false">Order Complate</span>
              </button>
            </div>
          </div>
          <!-- END:: ADDRESS AREA -->

          <!-- START:: FORM BILLING -->
          <div class="form-billing" v-if="!this.$store.getters.token">
            <form class="form-style">
              <div class="row">
                <div class="col-6">
                  <div class="form-input">
                    <label for="firstName">First Name <small>*</small></label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      id="firstName"
                      v-model="billingForm.firstName"
                    />
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-input">
                    <label for="lastName">Last Name <small>*</small></label>
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      id="lastName"
                      v-model="billingForm.lastName"
                    />
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-input">
                    <label for="email">Email Address <small>*</small></label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      v-model="billingForm.email"
                    />
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-input">
                    <label for="mobile">Mobile Number <small>*</small></label>
                    <input
                      type="tel"
                      class="form-control"
                      name="mobile"
                      id="mobile"
                      v-model="billingForm.mobile"
                    />
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-input">
                    <label for="mobile"
                      >Country / Region <small>*</small></label
                    >
                    <select class="form-select">
                      <option selected disabled>Select Country / Region</option>
                      <option value="1">Egypt</option>
                      <option value="2">Saudi Arabia</option>
                      <option value="3">Emirates</option>
                    </select>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-input">
                    <label for="mobile">city <small>*</small></label>
                    <select class="form-select">
                      <option selected disabled>Select Country / Region</option>
                      <option value="1">Egypt</option>
                      <option value="2">Saudi Arabia</option>
                      <option value="3">Emirates</option>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-input">
                    <label for="streetAddress"
                      >Street Address <small>*</small></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="streetAddress"
                      id="streetAddress"
                      placeholder="House number and street name"
                      v-model="billingForm.streetAddress"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-input">
                    <label for="orderNotes"
                      >Order Notes <small>(Optional)</small></label
                    >
                    <textarea
                      class="form-control"
                      name="orderNotes"
                      id="orderNotes"
                      v-model="billingForm.orderNotes"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="billing_details_token">
                <div class="title_part">
                  <h3>Payment Methods</h3>
                </div>
              </div>
              <div class="payment_methods">
                <div class="row">
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="cash" />

                      <label for="cash">
                        <img
                          src="../assets/media/payments/6.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="paypal" />

                      <label for="paypal">
                        <img
                          src="../assets/media/payments/1.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="visa" />

                      <label for="visa">
                        <img
                          src="../assets/media/payments/2.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="ebay" />

                      <label for="ebay">
                        <img
                          src="../assets/media/payments/3.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="maestro" />

                      <label for="maestro">
                        <img
                          src="../assets/media/payments/4.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-md-2">
                    <div class="single_payment">
                      <input type="radio" name="payment" id="masterCard" />

                      <label for="masterCard">
                        <img
                          src="../assets/media/payments/5.png"
                          alt="payment"
                          width="100"
                          height="100"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-auth mt-5">
                <button type="button" @click="orderComplate">
                  <span
                    class="sppinerAnimation"
                    v-if="isWaiting == true"
                  ></span>
                  <span v-if="isWaiting == false">Order Complate</span>
                </button>
              </div>
            </form>
          </div>
          <!-- END:: FORM BILLING -->
        </div>
        <!-- END:: CHECKOUT FORM -->

        <!-- START:: MAIN CART TOTALS -->
        <div class="col-4">
          <div class="order_totals">
            <div class="order_totals_header">
              <h6>Your Order</h6>
            </div>
            <!-- START:: EMPTY CART MESSAGE -->
            <div
              class="empty_cart_message text-center p-3"
              v-if="this.$store.state.shoppingCart.length == 0"
            >
              <span> <AlertOctagonIcon size="3x" /> </span>
              <h6 class="mt-5">Add Some Items To Cart To Checkout</h6>
            </div>
            <!-- START:: EMPTY CART MESSAGE -->
            <div class="order_body" v-else>
              <!-- START:: CART ITEM -->
              <div
                class="item my-4"
                v-for="item in this.$store.state.shoppingCart"
                :key="item.id"
              >
                <div class="row">
                  <div class="col-3">
                    <div class="img_wraper">
                      <img :src="item.images[0].img" alt="Product Image" />
                    </div>
                  </div>

                  <div
                    class="
                      col-9
                      d-flex
                      flex-column
                      justify-content-between
                      align-items-start
                    "
                  >
                    <div class="title">
                      <h5>
                        <router-link to="/">
                          {{ item.productName }}
                        </router-link>
                      </h5>
                    </div>
                    <h5>
                      <span class="count"> {{ item.quantity }} X </span>
                      <span class="price" v-if="item.discount.length == 0">
                        {{ item.price }} EGP
                      </span>
                      <span class="price" v-else>
                        {{ item.discount }} EGP
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <!-- END:: CART ITEM -->

              <!-- START:: SUBTOTAL -->
              <div class="subtotal_wraper">
                <h5>Subtotal:</h5>
                <h5>{{ this.$store.state.cartSubtotal }} EGP</h5>
              </div>
              <!-- END:: SUBTOTAL -->
            </div>

            <div class="order_subtotal">
              <h6>Cart Subtotals</h6>
              <h6>{{ this.$store.state.cartSubtotal }} EGP</h6>
            </div>

            <div class="shipping_fees">
              <div class="fees">
                <h6>Shipping Fees</h6>
                <h6>100 EGP</h6>
              </div>
            </div>

            <div class="order_totals_footer">
              <h6>Total</h6>
              <h6>350 EGP</h6>
            </div>
          </div>
        </div>
        <!-- END:: MAIN CART TOTALS -->
      </div>
    </div>
    <!-- END:: CONTAINER -->
  </div>
</template>

<script>
import { AlertOctagonIcon } from "vue-feather-icons";
export default {
  name: "CheckOut",
  // START:: COMPONENTS
  components: {
    AlertOctagonIcon,
  },
  // END:: COMPONENTS
  data() {
    return {
      isWaiting: false,
      addresses: [
        {
          id: 1,
          type: "Primary Address",
          place: "Home",
          address: "Cairo, Nozha Elgdeda, Madina Mnwra ST , 14 Shreef ST",
          username: "AhMeD EL-AwaDy",
          mobile: "01020403283",
        },
        {
          id: 2,
          type: "Secondary Address",
          place: "Home",
          address: "Cairo, Nozha Elgdeda, Madina Mnwra ST , 14 Shreef ST",
          username: "AhMeD EL-AwaDy",
          mobile: "01020403283",
        },
      ],
      billingForm: {
        firstName: "",
        lastName: "",
        country: [],
        streetAddress: "",
        city: "",
        mobile: "",
        email: "",
        orderNotes: "",
      },
    };
  },
  // START:: METHODS
  methods: {
    orderComplate() {},
  },
  // END:: METHODS
};
</script>
