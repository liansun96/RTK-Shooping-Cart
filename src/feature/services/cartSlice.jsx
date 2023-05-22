import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItem: [],
  totalAmount: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItem";

const storedItems = Cookies.get(STORAGE_KEY);

if(storedItems){
  initialState.cartItem = JSON.parse(storedItems)
  initialState.totalAmount = calculateTotalAmount(initialState.cartItem)
  initialState.quantity = calculateQuantity(initialState.cartItem)
}

function calculateTotalAmount (cartItem) {
  return cartItem.reduce((total,item) => total + item.price , 0)
}

function calculateQuantity (cartItem) {
  return cartItem.reduce((total, item) => total + item.quantity , 0)
}


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
      state.totalAmount += calculateTotalAmount(state.cartItem);
      state.quantity += calculateQuantity(state.cartItem)
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItem))
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
    clearCart:(state) => {
        state.cartItem = []
        return state;
    }
  },
});

export const { addToCart, removeFromCart, incItemQuantity, decItemQuantity ,clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
