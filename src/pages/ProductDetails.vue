<template>
  <div class="product_main_details">
    <div class="container">
      <div class="row" style="height: 550px; overflow: hidden">
        <!-- START:: PRODUCT CAROUSEL -->
        <div class="col-12 col-md-6">
          <div class="row">
            <!-- START:: PRODUCT THUMBNAILS -->
            <div class="col-3">
              <VueSlickCarousel
                ref="c2"
                :asNavFor="$refs.c1"
                :slidesToShow="4"
                :focusOnSelect="true"
                :vertical="true"
                :verticalSwiping="true"
                :arrows="false"
              >
                <div
                  class="thumbnail_wraper"
                  v-for="item in product.images"
                  :key="item.id"
                >
                  <img :src="item.img" alt="Thumbnail" />
                </div>
              </VueSlickCarousel>
            </div>
            <!-- END:: PRODUCT THUMBNAILS -->

            <!-- START:: PRODUCT IMAGE VIEW -->
            <div class="col-9">
              <VueSlickCarousel
                ref="c1"
                :asNavFor="$refs.c2"
                :focusOnSelect="true"
              >
                <div
                  class="main_img_wraper"
                  v-for="item in product.images"
                  :key="item.id"
                >
                  <img :src="item.img" alt="Thumbnail" />
                </div>
              </VueSlickCarousel>
            </div>
            <!-- END:: PRODUCT IMAGE VIEW -->
          </div>
        </div>
        <!-- END:: PRODUCT CAROUSEL -->

        <!-- START:: PRODUCT DETAILS -->
        <div class="col-12 col-md-6">
          <div class="product_details">
            <h3 class="product_name">{{ product.productName }}</h3>

            <p class="product_category">
              <span> CATEGORY: </span>
              <span> {{ product.categoryName }} </span>
            </p>

            <h3 class="product_price" v-if="product.discount.length != 0">
              <span class="current_price">
                <span>{{ product.discount }}</span>
                <span>EGP</span>
              </span>

              <span class="previous_price">
                <span>{{ product.price }}</span>
                <span>EGP</span>
              </span>
            </h3>

            <h3 class="product_price" v-else>
              <span class="current_price">
                <span>{{ product.price }}</span>
                <span>EGP</span>
              </span>
            </h3>

            <h6 class="product_rate">
              <RatingStars :rate="product.rate" class="m-0" />
              <span class="reviews"> ({{ product.reviews }} Reviews) </span>
            </h6>

            <div class="product_description">
              {{ product.description }}
            </div>

            <div class="product_options">
              <div class="wraper">
                <label> Color: </label>
                <v-autocomplete
                  chips
                  deletable-chips
                  small-chips
                  filled
                  dense
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
                  small-chips
                  filled
                  dense
                  v-model="sizeValues"
                  :items="sizes"
                  label="Select Size"
                  class="my-4"
                ></v-autocomplete>
              </div>
            </div>

            <div class="add_product_to_cart">
              <div class="quantity_btns">
                <button class="btn" @click="increaseQuantity(product)">
                  <PlusIcon size="1x" />
                </button>
                <button class="btn" disabled>
                  {{ product.quantity }}
                </button>
                <button class="btn" @click="decreaseQuantity(product)">
                  <MinusIcon size="1x" />
                </button>
              </div>

              <button class="btn add_to_cat mx-2" @click="addToCart(product)">
                <span> <ShoppingCartIcon /> </span>
                <span> Add To Cart </span>
              </button>

              <button class="btn add_to_wishlist">
                <span> <HeartIcon /> </span>
                <span> Add To Wishlist </span>
              </button>
            </div>
          </div>
        </div>
        <!-- END:: PRODUCT DETAILS -->
      </div>

      <!-- START:: DETAILS TABS -->
      <div class="tabs_wraper">
        <b-tabs content-class="mt-3">
          <!-- START:: TAB -->
          <b-tab title="Description" active>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="features_wraper">
                  <h5>Features</h5>
                  <div class="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi maiores nobis eveniet mollitia repudiandae possimus,
                    corporis dolores quibusdam vero reiciendis dolore nostrum
                    labore perferendis excepturi.
                  </div>

                  <ul class="features_list">
                    <li>Praesent id enim sit amet.Tdio vulputate</li>
                    <li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                    <li>Massa ristique sit amet condim vel</li>
                    <li>
                      Dilisis Facilisis quis sapien. Praesent id enim sit amet
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="specifications_wrap">
                  <h5>Specifications</h5>

                  <div class="specifications_table">
                    <v-simple-table>
                      <tbody>
                        <tr>
                          <td>
                            <strong> Material </strong>
                          </td>

                          <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong> Claimed Size </strong>
                          </td>

                          <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong> Recommended Use </strong>
                          </td>

                          <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong> Manufacturer </strong>
                          </td>

                          <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <!-- END:: TAB -->

          <!-- START:: TAB -->
          <b-tab title="Additional Information">
            <v-simple-table class="border">
              <template>
                <tbody>
                  <tr>
                    <td><strong>Categoriey:</strong></td>
                    <td>For Men's</td>
                  </tr>

                  <tr>
                    <td><strong>Brands:</strong></td>
                    <td>SLS, Cinderella, SkillStar</td>
                  </tr>

                  <tr>
                    <td><strong>Colors:</strong></td>
                    <td>Blue, Black, Red</td>
                  </tr>

                  <tr>
                    <td><strong>Sizes:</strong></td>
                    <td>M, L, XL</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </b-tab>
          <!-- END:: TAB -->

          <!-- START:: TAB -->
          <b-tab title="Size Guide">
            <div class="row">
              <div class="col-12 col-md-3">
                <div class="size_guide_img_wraper">
                  <img
                    src="https://d-themes.com/vue/riode/demo-1/images/product-size.png"
                  />
                </div>
              </div>

              <div class="col-12 col-md-9">
                <v-simple-table class="border">
                  <template>
                    <thead>
                      <tr>
                        <th class="text-left">
                          <strong> SIZE </strong>
                        </th>
                        <th class="text-left">
                          <strong> CHEST(Cm) </strong>
                        </th>
                        <th class="text-left">
                          <strong> WEIST(Cm) </strong>
                        </th>
                        <th class="text-left">
                          <strong> HIPS(Cm) </strong>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>S</td>
                        <td>36-38</td>
                        <td>29-31</td>
                        <td>36.5-38.5</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>36-38</td>
                        <td>29-31</td>
                        <td>36.5-38.5</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>36-38</td>
                        <td>29-31</td>
                        <td>36.5-38.5</td>
                      </tr>
                      <tr>
                        <td>XL</td>
                        <td>36-38</td>
                        <td>29-31</td>
                        <td>36.5-38.5</td>
                      </tr>
                      <tr>
                        <td>XXL</td>
                        <td>36-38</td>
                        <td>29-31</td>
                        <td>36.5-38.5</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </div>
          </b-tab>
          <!-- END:: TAB -->

          <!-- START:: TAB -->
          <b-tab title="Reviews(2)">
            <div class="row">
              <!-- START:: TESTIMONAL CARD -->
              <div class="col-12 col-md-6">
                <div class="testimonial_card my-3">
                  <div class="img_wraper">
                    <img
                      src="https://d-themes.com/vue/riode/demo-1/images/blog/comments/1.jpg"
                    />
                  </div>

                  <div class="testimonial_body">
                    <h6>September 22, 2020</h6>
                    <h5>John Doe</h5>
                    <h6><RatingStars :rate="4" /></h6>
                    <div class="text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iusto nostrum eum alias ipsam ipsum error perferendis
                      culpa. Consequatur dolorum sapiente quisquam ratione fuga
                      vero numquam voluptatum error, exercitationem odit
                      expedita.
                    </div>
                  </div>
                </div>
              </div>
              <!-- END:: TESTIMONAL CARD -->

              <!-- START:: TESTIMONAL CARD -->
              <div class="col-12 col-md-6">
                <div class="testimonial_card my-3">
                  <div class="img_wraper">
                    <img
                      src="https://d-themes.com/vue/riode/demo-1/images/blog/comments/1.jpg"
                    />
                  </div>

                  <div class="testimonial_body">
                    <h6>September 22, 2020</h6>
                    <h5>John Doe</h5>
                    <h6><RatingStars :rate="4" /></h6>
                    <div class="text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iusto nostrum eum alias ipsam ipsum error perferendis
                      culpa. Consequatur dolorum sapiente quisquam ratione fuga
                      vero numquam voluptatum error, exercitationem odit
                      expedita.
                    </div>
                  </div>
                </div>
              </div>
              <!-- END:: TESTIMONAL CARD -->
            </div>

            <!-- START:: ADD REVIEW FORM -->
            <h5 class="review_title mt-5">Add a Review</h5>
            <h6 class="review_subtitle">
              Your email address will not be published. Required fields are
              marked *
            </h6>

            <h6 class="rating mt-5">
              <span> Your Rating * </span>
              <StarRating
                :border-width="4"
                border-color="#d8d8d8"
                :rounded-corners="true"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
                :star-size="22"
                v-model="reviewData.rate"
              />
            </h6>

            <form class="reviews_form">
              <div class="row">
                <div class="col-12 my-3">
                  <div class="wraper">
                    <textarea
                      class="form-control"
                      placeholder="Comment *"
                      rows="7"
                      v-model="reviewData.comment"
                    ></textarea>
                  </div>
                </div>

                <div class="col-12 col-md-6 my-3">
                  <div class="wraper">
                    <input
                      type="text"
                      placeholder="Name *"
                      class="form-control"
                      v-model="reviewData.name"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 my-3">
                  <div class="wraper">
                    <input
                      type="email"
                      placeholder="Email *"
                      class="form-control"
                      v-model="reviewData.email"
                    />
                  </div>
                </div>

                <div class="col-12 mt-3">
                  <button class="btn" type="button">SUBMIT</button>
                </div>
              </div>
            </form>
            <!-- END:: ADD REVIEW FORM -->
          </b-tab>
          <!-- END:: TAB -->
        </b-tabs>
      </div>
      <!-- END:: DETAILS TABS -->

      <!-- START:: RELATED PRODUCTS -->
      <div class="col-12">
        <div class="related_products">
          <!-- START:: TITLE -->
          <div class="header_wraper">
            <h2>Related Items</h2>
            <span class="title_backdrop"> Related Items </span>
          </div>
          <!-- START:: TITLE -->

          <!-- START:: RELATED ITEMS SLIDER -->
          <VueSlickCarousel v-bind="relatedSliderSettings">
            <!-- START:: PRODUCT CARD -->
            <ProductCard
              v-for="product in relatedItems"
              :key="product.id"
              :productData="product"
              :type="'related'"
            />
            <!-- END:: PRODUCT CARD -->
          </VueSlickCarousel>
          <!-- END:: RELATED ITEMS SLIDER -->
        </div>
      </div>
      <!-- END:: RELATED PRODUCTS -->
    </div>
  </div>
</template>

<script>
// START:: IMPORTING SLICK CAOUSIL
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// END:: IMPORTING SLICK CAOUSIL

// START:: IMPORTING COMPONENTS
import RatingStars from "../components/ui/RatingStars.vue";
import ProductCard from "../components/basics/ProductCard.vue";
// END:: IMPORTING COMPONENTS

// START:: IMPORTING STAR RATING PLUGIN
import StarRating from "vue-star-rating";
// END:: IMPORTING STAR RATING PLUGIN

import {
  ShoppingCartIcon,
  HeartIcon,
  PlusIcon,
  MinusIcon,
} from "vue-feather-icons";

export default {
  name: "ProductDetails",

  components: {
    VueSlickCarousel,
    StarRating,
    RatingStars,
    ProductCard,
    ShoppingCartIcon,
    HeartIcon,
    PlusIcon,
    MinusIcon,
  },

  data() {
    return {
      // START:: CURRENT PRODUCT ID
      productId: this.$route.params.product_id,
      // END:: CURRENT PRODUCT ID

      // START:: PRODUCT DATA
      product: {
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
        quantity: 0,
        quantityPrice: 0,
      },
      // END:: PRODUCT DATA

      // START:: COLOR SELECT BOX DATA
      colors: ["Black", "Red", "Blue"],
      colorValues: ["Black", "Red", "Blue"],
      // END:: COLOR SELECT BOX DATA

      // START:: SIZE SELECT BOX DATA
      sizes: ["S", "M", "L", "XL", "XXl"],
      sizeValues: ["S", "M", "L", "XL", "XXl"],
      // END:: SIZE SELECT BOX DATA

      // START:: REVIEW DATA
      reviewData: {
        rate: 0,
        name: "",
        email: "",
        comment: "",
      },
      // END:: REVIEW DATA

      // START:: RELATED ITEMS DATA
      relatedItems: [
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
          quantity: 0,
          quantityPrice: 0,
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
          quantity: 0,
          quantityPrice: 0,
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
          quantity: 0,
          quantityPrice: 0,
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
          quantity: 0,
          quantityPrice: 0,
        },
        {
          id: 5,
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
          quantity: 0,
          quantityPrice: 0,
        },
      ],
      // START:: RELATED ITEMS DATA

      // START:: RELATED SLIDER DATA
      relatedSliderSettings: {
        dots: true,
        arrows: false,
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
      // END:: RELATED SLIDER DATA
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
  },
};
</script>
