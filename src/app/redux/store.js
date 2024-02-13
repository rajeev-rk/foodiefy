import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'
import wishlistSlice from './wishlistSlice'

export const store = configureStore({
  reducer: {
    products:productsSlice,
    cart:cartSlice,
    filter:filterSlice,
    wishlist:wishlistSlice
  },
})
