import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'

export const store = configureStore({
  reducer: {
    products:productsSlice,
    cart:cartSlice,
    filter:filterSlice
  },
})
