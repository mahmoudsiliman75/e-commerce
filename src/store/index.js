import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      // START:: SHOPPING CART
      shoppingCart: [],

      cartSubtotal: "",
      // END:: SHOPPING CART
    };
  },

  mutations: {
    // START:: ADD ITEM TO CART
    addItemToCart(state, payload) {
      state.shoppingCart.push(payload.item);
    },
    // END:: ADD ITEM TO CART

    // START:: REMOVE ITEM FROM CART
    removeItemFromCart(state, payload) {
      let itemIndex = state.shoppingCart.indexOf(payload.item);
      state.shoppingCart.splice(itemIndex, 1);
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
    // END:: CALCULATE CART
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
  },
});
