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
        const product = state.products.find(item => item.id ===action.payload.id)
        if(!product){
        state.quantity+=1
        state.products.push(action.payload);
    }},
    removeFromWishList: (state, action) => {
        state.products = state.products.filter((item) => item.id !== action.payload.id);
        state.quantity--;
      },
    resetWishList: (state) => {
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const { addToWishList, resetWishList,removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
