import React from "react";

export default function Item(props){
    function onBuyClick(){
        props.onSell(props.type);
    }
    return (
        <div key={props.type} className="item">
            <span>Item: {props.type}</span>
            <span>Price: {props.price}$</span>
            <span>Quantity: {props.quantity}</span>
            <button onClick={onBuyClick}>Buy</button>
        </div>
    )
}