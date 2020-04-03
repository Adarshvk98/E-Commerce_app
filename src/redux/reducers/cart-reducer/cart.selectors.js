import {createSelector} from 'reselect';


const selectCart = (state)=> state.cart;

export const selctCartItem = createSelector(
[selectCart],
(cart)=> cart.cartItem
);

export const selctCartItemCount = createSelector(
  [selctCartItem],
  (cartItems)=> cartItems.reduce((acumulatedItem,item)=>acumulatedItem+item.quantity,0)
)