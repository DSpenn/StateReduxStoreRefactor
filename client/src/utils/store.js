import { configureStore, createStore  } from '@reduxjs/toolkit';
//import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducers';

console.log("reducer", reducer);
/* 
const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
}; */

const store = createStore(reducer);
export default store;