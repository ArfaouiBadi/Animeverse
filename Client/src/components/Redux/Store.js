import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import whishListReducer from './wishListReducer'
export const store = configureStore({
  reducer: {
    cart : cartReducer,
    wishList: whishListReducer,
  },
})

