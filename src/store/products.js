import { createSlice } from "@reduxjs/toolkit"

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload)
    },
  },
})

export const { addProductToCart } = productsSlice.actions

export const selectProducts = (state) => state.products

export default productsSlice.reducer
