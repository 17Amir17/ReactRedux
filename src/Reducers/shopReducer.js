import { CHECKOUT, SELL_ACTION } from "../Actions/actions";
import deepCopy from '../utils/deepCopy';

const initialState = {
  items: [
    { type: "Apples", price: 10, quantity: 5 },
    { type: "Oranges", price: 5, quantity: 10 },
  ],
  cart: {
      items: {},
      prices: {}
  }
};

function reducer(state = deepCopy(initialState), action) {
  switch (action.type) {
    case SELL_ACTION:
        const itemType = action.payload.item;
        const item = state.items.find(item => item.type === itemType);
        if(item && item.quantity > 0){
            item.quantity -= 1;
            if(state.cart.items[item.type]){
                state.cart.items[item.type]++;
            }else{
                state.cart.items[item.type] = 1;
                state.cart.prices[item.type] = item.price;
            }
        }
        return deepCopy(state);
    case CHECKOUT:
        return deepCopy(initialState);
    default:
      return state;
  }
}
export default reducer;
