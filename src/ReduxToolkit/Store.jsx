import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

const rootReducer = combineReducers({
  cartList: CartSlice,
});
const Store = configureStore({ reducer: rootReducer });
export default Store;
