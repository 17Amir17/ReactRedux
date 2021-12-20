import React from "react";
import { connect } from "react-redux";
import Item from "./Items";
import { SELL_ACTION } from '../Actions/actions';

function Shop(props) {
  
  function onItemSell(itemType){
      props.dispatch({
          type: SELL_ACTION,
          payload: {
              item: itemType
          }
      });
  }

  return (
    <div className="shop">
      <h1>Best Shop In Town</h1>
      {props.items.map((item) => {
        return (
          <Item
            key={item.type}
            type={item.type}
            price={item.price}
            quantity={item.quantity}
            onSell={onItemSell}
          />
        );
      })}
    </div>
  );
}

const stateToProps = (state) => {
    return {
      items: state.items,
    };
};

export default connect(stateToProps)(Shop);