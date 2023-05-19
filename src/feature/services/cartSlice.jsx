import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalAmount: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItem.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItem = [...state.cartItem, { ...payload, quantity: 1 }];
      }
      state.totalAmount += payload.price;
      state.quantity++;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== payload.id);
      state.totalAmount -= payload.price * payload.quantity;
      state.quantity--;
    },
    incItemQuantity: (state, { payload }) => {
      state.cartItem = state.cartItem.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    decItemQuantity: (state, { payload }) => {
      state.cartItem = state.cartItem.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.quantity--;
      state.totalAmount -= payload.price;
    },
  },
});

export const { addToCart, removeFromCart, incItemQuantity, decItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
