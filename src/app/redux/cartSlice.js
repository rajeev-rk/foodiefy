import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  shippingInfo: null,
};

const checkAvailability = (price1, price2) => {
  console.log("🚀 ~ checkAvailability ~ price1, price2:", price1, price2)
  // Check if price1 and price2 have exactly one key
  if (Object.keys(price1).length !== 1 || Object.keys(price2).length !== 1) {
    console.log("🚀 ~ checkAvailability ~ Object.keys(price1):", Object.keys(price1))
    return false;
  }

  // Check if the values of the single key match between price1 and price2
  const key = Object.keys(price1)[0]; // Get the single key from price1
  console.log("🚀 ~ checkAvailability ~ key:", key)
  return price1[key] === price2[key];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log("🚀 ~ addItemToCart ~ newItem:", newItem);

      // Check if an item with the same ID exists in the cart
      const existingItemIndex = state.items.findIndex(item => {
        return item.id === newItem.id &&
         ( item.price === newItem.price ||
          checkAvailability(item.price, newItem.price));
      });
      console.log("🚀 ~ addItemToCart ~ existingItemIndex:", existingItemIndex)

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        console.log("🚀 ~ addItemToCart ~ existingItem:", existingItem)

        // If an item with the same ID exists and its price doesn't match the new item's price, or checkAvailability condition is met
        if (existingItem.price !== newItem.price) {

          if (checkAvailability(existingItem.price, newItem.price)) {
            existingItem.quantity += 1;
          } else {
            state.items.push({ ...newItem, quantity: 1 });
          }
          // existingItem.quantity += 1;
          // state.items.splice(existingItemIndex, 1, existingItem); // Update the existing item in the state
          console.log("🚀 ~ addItemToCart ~ Update the existing item in the state:")
          // state.items.push({ ...newItem, quantity: 1 });
        }
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        console.log("🚀 ~ addItemToCart ~ add it with a quantity of 1:")
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    isAlreadyInCart(state, action) {
      console.log("🚀 ~ isAlreadyInCart ~ state:", state);
      const { id, price } = action.payload;
      const items = state.items || [];
      console.log("🚀 ~ isAlreadyInCart ~ items:", items)
      console.log("🚀 ~ isAlreadyInCart ~ state.items:", state.items);
      console.log("🚀 ~ isAlreadyInCart ~ id:", id);
      console.log("🚀 ~ isAlreadyInCart ~ price:", price);
      
      // Check if any item in the cart matches both the ID and the price
      // const isInCart = items.some(item => item.id === id && item.price === price);
      // console.log("🚀 ~ isAlreadyInCart ~ isInCart:", isInCart);
      // return isInCart;
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


export const selectTotalItemsQuantityInCart = state =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalUniqueProductsInCart = state => state.cart.items.length;

export const selectTotalPriceInCart = state => {
  console.log("🚀 ~ state:", state.cart)
  return state.cart.items.reduce((total, item) => total + Number(item.selectedPrice || Object.values(item.price)[0]) * Number(item.quantity), 0);
}

export const selectShippingInfo = state => state.cart.shippingInfo;

export default cartSlice.reducer;