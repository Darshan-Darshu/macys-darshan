import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/typing";

interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<Product[]>,
    ) => {
      state.product = action.payload;
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      const oldProduct = state.product;
      state.product = [...oldProduct, action.payload];
    },
  },
});

export const { setProducts, setProduct } =
  productSlice.actions;

export default productSlice.reducer;
