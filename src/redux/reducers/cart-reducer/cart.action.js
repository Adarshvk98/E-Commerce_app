import { CartActionTypes } from "./cart.types";

export const CartAction = () => {
  return {
    type: CartActionTypes.TOOGLE_CART_HIDDEN
  };
};

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
});

export const removeCheckoutItem = item => ({
  type: CartActionTypes.REMOVE_CHECKOUT_ITEM,
  payload: item
});
