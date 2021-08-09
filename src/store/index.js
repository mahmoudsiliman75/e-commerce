import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      // START:: SHOPPING CART
      shoppingCart: [
        // {
        //   id: 1,
        //   img_1:
        //     "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
        //   img_2:
        //     "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
        //   badges: ["TOP", "SALE"],
        //   categoryName: "For Men's",
        //   productName: "Beyond Riode Original T-Shirt",
        //   price: "500",
        //   discount: "250",
        //   rate: 4,
        //   reviews: 2,
        //   quantity: 0,
        //   quantityPrice: 0,
        // },
      ],

      cartSubtotal: 0,
      // END:: SHOPPING CART

      // START:: WISHLIST
      wishlist: [
        // {
        //   id: 1,
        //   images: [
        //     {
        //       id: 1,
        //       img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_1_98644502e2.jpg",
        //     },
        //     {
        //       id: 2,
        //       img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_2_49cc0be0ad.jpg",
        //     },
        //     {
        //       id: 3,
        //       img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_3_3fab9f444a.jpg",
        //     },
        //     {
        //       id: 4,
        //       img: "https://d-themes.com/vue/riode/server/uploads/demo_1_product_7_4_2e92b20b8b.jpg",
        //     },
        //   ],
        //   badges: ["TOP", "SALE"],
        //   categoryName: "For Men's",
        //   productName: "Beyond Riode Original T-Shirt",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod posuere pulvinar. Vivamus vestibulum arcu nisi, non sollicitudin ex vestibulum eu. Nulla euismod sapien nisl. Proin metus mauris, ultrices ac pulvinar a, vehicula vel nisi. Aenean finibus mollis sodales. Suspendisse dapibus purus ut bibendum suscipit.",
        //   price: "500",
        //   discount: "250",
        //   rate: 4,
        //   reviews: 2,
        //   quantity: 1,
        //   quantityPrice: 0,
        //   status: "in stock",
        // },
      ],
      // END:: WISHLIST
    };
  },

  mutations: {
    // START:: ADD ITEM TO CART
    addItemToCart(state, payload) {
      state.shoppingCart.push(payload.item);

      let cart = state.shoppingCart;
      let finalCart = [...new Set(cart)];
      state.shoppingCart = finalCart;

      if ( !payload.item.discount ) {
        payload.item.quantityPrice = payload.item.quantity * payload.item.price;
      } else {
        payload.item.quantityPrice = payload.item.quantity * parseInt(payload.item.discount);
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

      state.shoppingCart.forEach( (element) => {
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
      state.wishlist.push(payload.item);
      new Audio(require("../assets/media/sounds/done.mp3")).play();
    },
    // END:: ADD ITEM TO WISHLIST

    // START:: REMOVE ITEM FROM WISHLIST
    removeItemToWishlist(state, payload) {
      let index = state.wishlist.indexOf(payload.item);
      state.wishlist.splice(index, 1);
    }
    // END:: REMOVE ITEM FROM WISHLIST
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
      context.commit("addItemToWishlist", payload)
    },
    // END:: ADD ITEM TO WISHLIST

    // START:: REMOVE ITEM FROM WISHLIST
    removeItemToWishlist(context, payload) {
      context.commit("removeItemToWishlist", payload);
    },
    // END:: REMOVE ITEM FROM WISHLIST
  },
});
