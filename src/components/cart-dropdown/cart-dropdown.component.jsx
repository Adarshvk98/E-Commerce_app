import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selctCartItem} from '../../redux/reducers/cart-reducer/cart.selectors';
const CartDropdown = ({ cartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItem:selctCartItem(state)
});
export default connect(mapStateToProps)(CartDropdown);
