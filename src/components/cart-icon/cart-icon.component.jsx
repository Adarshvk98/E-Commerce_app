import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CartAction } from "../../redux/reducers/cart-reducer/cart.action";
import {selectCartItemCount} from '../../redux/reducers/cart-reducer/cart.selectors';
const CartIcon = ({toogleCartHidden,itemCount}) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(CartAction())
});

const mapStateToProps =createStructuredSelector({
  itemCount:selectCartItemCount
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
