import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItem } from "../../redux/reducers/cart-reducer/cart.selectors";
import{CartAction} from '../../redux/reducers/cart-reducer/cart.action';
const CartDropdown = ({ cartItem, history,dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        dispatch(CartAction());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
