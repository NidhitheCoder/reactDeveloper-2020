import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  // itemCount: cartItems.reduce(
  //   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
  //   0
  // )

  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);