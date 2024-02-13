import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  shippingInfo: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        console.log("🚀 ~ addItemToCart ~ existingItem:", existingItem)
        console.log("🚀 ~ addItemToCart ~ newItem:", newItem)
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    isAlreadyInCart(state, action) {
      console.log("🚀 ~ isAlreadyInCart ~ state:", state)
      const itemId = action.payload.id;
      const items = state.items || []
      console.log("🚀 ~ isAlreadyInCart ~ state.items:", state.items)
      console.log("🚀 ~ isAlreadyInCart ~ itemId:", itemId)
      const isInCart = items.some(item => item.id === itemId);
      console.log("🚀 ~ isAlreadyInCart ~ isInCart:", isInCart)
      return isInCart;
    },
    increaseItemQuantity(state, action) {
      const itemId = action.payload.id;
      const cartItem = state.items.find(item => item.id === itemId);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },

    decreaseItemQuantity(state, action) {
      const itemId = action.payload.id;
      const cartItem = state.items.find(item => item.id === itemId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== itemId);
      }
    },
    removeItemFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    updateCartItemQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const cartItem = state.items.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
    clearItemFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    applyDiscount(state, action) {
      const discountAmount = action.payload;
      state.items.forEach(item => {
        item.price -= discountAmount;
      });
    },
    setShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  clearCart,
  clearItemFromCart,
  applyDiscount,
  setShippingInfo,
  isAlreadyInCart,
  increaseItemQuantity,
  decreaseItemQuantity
} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectTotalItemsInCart = state =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);


export const selectTotalPriceInCart = state =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectShippingInfo = state => state.cart.shippingInfo;

export default cartSlice.reducer;