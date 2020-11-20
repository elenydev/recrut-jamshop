import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./products.js"
export default configureStore({
  reducer: {
    products: productsReducer,
  },
})
