import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity:0,
  total:0,

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.cart = action.payload;
    },

    addToCart: (state, action) => {
      const product = state.products.find(item => item.id ===action.payload.id)
      if(!product){
      state.quantity+=1
      state.products.push(action.payload);
      state.total+=action.payload.price*action.payload.quantity} 
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      state.quantity--;
    },
    resetCart: (state) => {
      state.cart = [];
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.name === action.payload && item.quantity > 1) {
          item.quantity--;
        }
        return item;
      });
    },
  },
});


export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;