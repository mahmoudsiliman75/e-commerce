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

      cartSubtotal: "",
      // END:: SHOPPING CART
    };
  },

  mutations: {
    // START:: ADD ITEM TO CART
    addItemToCart(state, payload) {
      state.shoppingCart.push(payload.item);

      let cart = state.shoppingCart;
      let finalCart = [ ...new Set(cart) ]
      state.shoppingCart = finalCart;

      payload.item.quantity++;
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
          subtotal += parseInt(element.price);
        }

        if (element.discount.length != 0) {
          discountSubtotal += parseInt(element.discount);
        }
      });
      state.subtotal = subtotal + discountSubtotal;
    },
    // END:: CALCULATE CART SUBTOTAL

    // START:: INCREMENT QUANTITY
    incrementQuantity(_, payload) {
      payload.item.quantity++

      if ( payload.item.discount.length == 0  ) {
        payload.item.quantityPrice += parseInt(payload.item.price);
      }

      if ( payload.item.discount.length != 0 ) {
        payload.item.quantityPrice += parseInt(payload.item.discount);
      }
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decrementQuantity(_, payload) {
      payload.item.quantity--
      if ( payload.item.quantity < 1 ) {
        payload.item.quantity = 1;
      }

      // payload.item.price /= payload.item.quantity;
    }
    // END:: DECREMENT QUANTITY
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
      context.commit("incrementQuantity", payload)
    },
    // END:: INCREMENT QUANTITY

    // START:: DECREMENT QUANTITY
    decrementQuantity(context, payload) {
      context.commit("decrementQuantity", payload)
    },
    // end:: DECREMENT QUANTITY
  },
});
