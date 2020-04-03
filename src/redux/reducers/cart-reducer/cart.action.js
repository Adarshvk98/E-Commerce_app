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
