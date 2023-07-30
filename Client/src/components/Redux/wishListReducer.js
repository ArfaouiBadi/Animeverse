import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },

    resetWishList: (state) => {
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const { addToWishList, resetWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
