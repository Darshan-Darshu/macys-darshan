import { Bag } from "@/typing";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BagState {
  bag: Bag[];
  total: number;
}

interface QtyState {
  name: string;
  amount: number;
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
      bags.map((bag: Bag) => {
        const eachBagTotal =
          Number(bag.price) * Number(bag.qty);
        state.total += eachBagTotal;
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
      const bagTotal =
        Number(action.payload.price) *
        Number(action.payload.qty);
      state.total += bagTotal;
    },
    setBagQty: (state, action: PayloadAction<QtyState>) => {
      const oldProduct = state.bag;
      const bagItem = oldProduct.find(
        (item) => item.productName === action.payload.name,
      );
      const oldBag = oldProduct.filter(
        (item) => item.productName !== action.payload.name,
      );

      if (!bagItem) {
        state.bag = [...oldProduct];
        return;
      }

      const previousBagtotal =
        state.total - bagItem.qty * bagItem.price;
      bagItem.qty += action.payload.amount;

      const total =
        previousBagtotal + bagItem.qty * bagItem.price;

      state.bag = [...oldBag, bagItem];
      state.total = total;
    },
    clearBag: (state) => {
      state.bag = [];
      state.total = 0;
    },
  },
});

export const { setBags, setBag, setBagQty, clearBag } =
  bagSlice.actions;

export default bagSlice.reducer;
