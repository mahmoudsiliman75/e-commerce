import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// ======== iziToast
import iziToast from "izitoast";
Vue.use(iziToast);

export default new Vuex.Store({
  state() {
    return {
      // START:: SHOPPING CART
      shoppingCart: [],

      cartSubtotal: 0,
      // END:: SHOPPING CART

      // START:: LANGUAGE DATA
      lang: localStorage.getItem("ecommerce_lang"),
      // END:: LANGUAGE DATA

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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
        },
      ],
      // END:: FEATURED ITEMS DATA

      // START:: BEST SELLERS DATA
      allProducts: [
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
          inWishlist: null,
          bestSellers: true,
          featuredItems: true,
          topRated: true,
          isOffered: true,
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
          inWishlist: null,
          bestSellers: true,
          featuredItems: true,
          topRated: true,
          isOffered: true,
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
          inWishlist: null,
          bestSellers: true,
          featuredItems: true,
          topRated: true,
          isOffered: true,
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
          inWishlist: null,
          bestSellers: true,
          featuredItems: true,
          topRated: true,
          isOffered: true,
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
          inWishlist: null,
          bestSellers: true,
          featuredItems: true,
          topRated: true,
          isOffered: true,
        },
      ],
      // END:: BEST SELLERS DATA

      // START:: WISHLIST
      wishlist: [],
      // END:: WISHLIST

      // START:: SEARCH PAGE
      searchText: "",
      searchResult: [
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
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
          inWishlist: null,
        },
      ],
      // END:: SEARCH PAGE

      // START:: TOKEN
      token: localStorage.getItem("ecommerce_token"),
      // END:: TOKEN
    };
  },
  mutations: {
    // START:: SEARCH RESULT
    searchResult(state, payload) {
      state.searchText = payload.text;
    },
    // END:: SEARCH RESULT

    // START:: ADD ITEM TO CART
    addItemToCart(state, payload) {
      const repeatedItem = state.shoppingCart.find(
        (ele) => ele.id == payload.item.id
      );

      if (repeatedItem) {
        if (state.lang == "ar") {
          iziToast.error({
            position: "bottomRight",
            message: "هذا العنصر موجود بالفعل",
            rtl: true,
          });
        } else {
          iziToast.error({
            position: "bottomLeft",
            message: "This Item Is Already Exist",
            ltr: true,
          });
        }
        return;
      }

      if (state.lang == "ar") {
        iziToast.success({
          position: "bottomRight",
          message: "تم اضافة العنصر الي السلة",
          rtl: true,
        });
      } else {
        iziToast.success({
          position: "bottomLeft",
          message: "This Item Has Been Added",
          ltr: true,
        });
      }
      state.shoppingCart.push(payload.item);

      if (!payload.item.discount) {
        payload.item.quantityPrice = payload.item.quantity * payload.item.price;
      } else {
        payload.item.quantityPrice =
          payload.item.quantity * parseInt(payload.item.discount);
      }

      // payload.item.quantity++;

      new Audio(require("../assets/media/sounds/done.mp3")).play();
    },
    // END:: ADD ITEM TO CART

    // START:: REMOVE ITEM FROM CART
    removeItemFromCart(state, payload) {
      let itemIndex = state.shoppingCart.indexOf(payload.item);
      state.shoppingCart.splice(itemIndex, 1);
      payload.item.quantity = 1;
    },
    // END:: REMOVE ITEM FROM CART

    // START:: CALCULATE CART SUBTOTAL
    getSubtotal(state) {
      let subtotal = null;
      let discountSubtotal = null;

      state.shoppingCart.forEach((element) => {
        if (element.price.length != 0 && element.discount.length == 0) {
          subtotal += parseInt(element.quantityPrice);
        }

        if (element.discount.length != 0) {
          discountSubtotal += parseInt(element.quantityPrice);
        }
      });

      state.cartSubtotal = subtotal + discountSubtotal;
    },
    // END:: CALCULATE CART SUBTOTAL

    // START:: INCREMENT QUANTITY
    incrementQuantity(state, payload) {
      payload.item.quantity++;

      if (payload.item.discount.length == 0) {
        payload.item.quantityPrice += parseInt(payload.item.price);

        state.cartSubtotal += parseInt(payload.item.price);
      }

      if (payload.item.discount.length != 0) {
        payload.item.quantityPrice += parseInt(payload.item.discount);

        state.cartSubtotal += parseInt(payload.item.discount);
      }
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decrementQuantity(state, payload) {
      payload.item.quantity--;

      if (payload.item.quantity < 1) {
        payload.item.quantity = 1;
        return;
      }

      if (payload.item.discount.length == 0) {
        payload.item.quantityPrice -= parseInt(payload.item.price);

        state.cartSubtotal -= parseInt(payload.item.price);
      }

      if (payload.item.discount.length != 0) {
        payload.item.quantityPrice -= parseInt(payload.item.discount);

        state.cartSubtotal -= parseInt(payload.item.discount);
      }
    },
    // END:: DECREMENT QUANTITY

    // START:: ADD ITEM TO WISHLIST
    addItemToWishlist(state, payload) {
      if (state.lang == "ar") {
        iziToast.success({
          position: "bottomRight",
          message: "تم اضافة هذا العنصر بنجاح",
          rtl: true,
        });
      } else {
        iziToast.success({
          position: "bottomLeft",
          message: "This Item has been Adedd",
          ltr: true,
        });
      }
      state.wishlist.push(payload.item);

      state.bestSellers.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = true;
        }
      });

      state.featuredItems.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = true;
        }
      });

      state.searchResult.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = true;
        }
      });

      new Audio(require("../assets/media/sounds/done.mp3")).play();
    },

    // START:: REMOVE ITEM TO WISHLIST
    removeItemToWishlist(state, payload) {
      let removeItemIndex = state.wishlist.indexOf(payload.item);
      state.wishlist.splice(removeItemIndex, 1);

      if (state.lang == "ar") {
        iziToast.warning({
          position: "bottomRight",
          message: "تم حذف هذا العنصر بنجاح",
          rtl: true,
        });
      } else {
        iziToast.warning({
          position: "bottomLeft",
          message: "This Item has been Removed",
          ltr: true,
        });
      }

      // state.wishlist.filter((element) => element.id != payload.item.id);
      state.bestSellers.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = false;
        }
      });

      state.featuredItems.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = false;
        }
      });

      state.searchResult.forEach((prouct) => {
        if (prouct.id == payload.item.id) {
          prouct.inWishlist = false;
        }
      });
    },
    // END:: REMOVE ITEM TO WISHLIST

    // START:: TOKEN
    set_token(state, payload) {
      state.token = payload;
    },
    remove_token(state) {
      state.token = "";
    },
    // END:: TOKEN
  },

  actions: {
    // START:: ADD ITEM TO CART ACTION
    addItemToCart(context, payload) {
      context.commit("addItemToCart", payload);
      context.commit("getSubtotal");
    },
    // END:: ADD ITEM TO CART ACTION

    // START:: REMOVE ITEM FROM CART
    removeItemFromCart(context, payload) {
      context.commit("removeItemFromCart", payload);
      context.commit("getSubtotal");
    },
    // END:: REMOVE ITEM FROM CART

    // START:: INCREMENT QUANTITY
    incrementQuantity(context, payload) {
      context.commit("incrementQuantity", payload);
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decrementQuantity(context, payload) {
      context.commit("decrementQuantity", payload);
    },
    // end:: DECREMENT QUANTITY

    // START:: ADD ITEM TO WISHLIST
    addItemToWishlist(context, payload) {
      context.commit("addItemToWishlist", payload);
    },
    // END:: ADD ITEM TO WISHLIST

    // START:: REMOVE ITEM FROM WISHLIST
    removeItemToWishlist(context, payload) {
      context.commit("removeItemToWishlist", payload);
    },
    // END:: REMOVE ITEM FROM WISHLIST

    // START:: TOKEN
    set_token(context, payload) {
      localStorage.setItem("ecommerce_token", payload);
      context.commit("set_token", payload);
    },
    remove_token(context) {
      localStorage.removeItem("ecommerce_token");
      context.commit("remove_token");
    },
    // END:: TOKEN
  },
  getters: {
    // START:: TOKEN
    token(state) {
      return state.token;
    },
    // END:: TOKEN
  },
});
