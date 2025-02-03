import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
    category: "All",
    search: "",
  },
  reducers: {
    AddToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      } else if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    AddCategory: (state, action) => {
      state.category = action.payload;
    },
    AddSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const {
  AddToCart,
  RemoveFromCart,
  increaseQty,
  decreaseQty,
  AddCategory,
  AddSearch,
} = CartSlice.actions;
export default CartSlice.reducer;
