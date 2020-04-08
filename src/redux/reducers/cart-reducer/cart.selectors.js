import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItem
);

export const selectcartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems =>
    cartItems.reduce(
      (acumulatedItem, item) => acumulatedItem + item.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItem],
  cartItems =>
    cartItems.reduce(
      (acumulatedItem, item) => acumulatedItem + item.quantity * item.price,
      0
    )
);
