import { CartActionTypes } from "./cart.types";
import { addItemsToCart, removeItemFromCheckout } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemsToCart(state.cartItem, action.payload)
      };
    case CartActionTypes.REMOVE_CHECKOUT_ITEM:
      return {
        ...state,
        cartItem: removeItemFromCheckout(state.cartItem, action.payload)
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};
