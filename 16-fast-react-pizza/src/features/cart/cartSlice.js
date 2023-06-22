import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((i) => i.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((i) => i.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((i) => i.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  }
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


export const getTotalCartQuantity = (state) => state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = id => state => state.cart.cart.find(i => i.pizzaId === id)?.quantity ?? 0;


// if you're concerned with performance issue => reselect libraryr