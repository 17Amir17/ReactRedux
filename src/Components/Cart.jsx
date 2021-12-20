import React from "react";
import { connect } from "react-redux";
import { CHECKOUT } from "../Actions/actions";

function Cart(props) {
  const items = [];
  let total = 0;

  function checkout() {
      props.dispatch({type: CHECKOUT});
  }

  for (const item in props.items) {
    items.push(
      <p key={item}>
        {item} x {props.items[item]}
      </p>
    );
    total += props.prices[item] * props.items[item];
  }

  return (
    <div className="cart">
      <h1>Best Shopping Cart In Town!</h1>
      {total === 0 ? "Please buy stuff" : items}
      {total === 0 ? (
        <p>
          Total: {total}${" "}
          <button onClick={checkout} disabled>
            Checkout
          </button>
        </p>
      ) : (
        <p>
          Total: {total}$ <button onClick={checkout}>Checkout</button>
        </p>
      )}
    </div>
  );
}

const stateToProps = (state) => {
  return {
    items: state.cart.items,
    prices: state.cart.prices,
  };
};

export default connect(stateToProps)(Cart);
