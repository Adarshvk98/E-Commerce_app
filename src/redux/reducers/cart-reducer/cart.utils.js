export const addItemsToCart = (cartItems, cartItemsToAdd) => {
  const existingCartitem = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
