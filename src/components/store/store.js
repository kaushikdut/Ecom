import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
