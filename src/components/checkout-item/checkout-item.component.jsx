import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  removeCheckoutItem,
  addItem
} from "../../redux/reducers/cart-reducer/cart.action";

const CheckOutItem = ({ cartItem, removeItem, addItem, removeCheckout }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCheckout(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">$ {price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeCheckout: item => dispatch(removeCheckoutItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
