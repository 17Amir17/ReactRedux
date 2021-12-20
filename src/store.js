import { createStore } from 'redux';
import shopReducer from './Reducers/shopReducer';

const store = createStore(shopReducer);

export default store;