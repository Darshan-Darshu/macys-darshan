import { Bag } from "@/typing";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BagState {
  bag: Bag[];
  total: number;
}

const initialState: BagState = {
  bag: [],
  total: 0,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setBags: (state, action: PayloadAction<Bag[]>) => {
      state.bag = action.payload;
      const bags: Bag[] = action.payload;
      console.log(bags);
      bags.map((bag: Bag) => {
        state.total += bag.price * bag.qty;
      });
    },
    setBag: (state, action: PayloadAction<Bag>) => {
      const oldProduct = state.bag;
      const isExistingItem = oldProduct.findIndex(
        (item) =>
          item.productName === action.payload.productName,
      );

      if (isExistingItem > -1) {
        oldProduct[isExistingItem].qty += 1;
        state.bag = oldProduct;
      } else {
        state.bag = [...oldProduct, action.payload];
      }
      state.total +=
        action.payload.price * action.payload.qty;
    },
  },
});

export const { setBags, setBag } = bagSlice.actions;

export default bagSlice.reducer;
