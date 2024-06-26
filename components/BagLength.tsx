"use client";

import { setBags } from "@/slice/bagSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { Bag } from "@/typing";
import { useEffect } from "react";

function BagLength({ bags }: { bags: Bag[] }) {
  const virtualBag = useAppSelector(
    (state) => state.bags.bag,
  );
  console.log(virtualBag);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBags(bags));
  }, []);
  return (
    <>
      {virtualBag.length > 0 && (
        <span className='flex items-center justify-center absolute -top-1 -right-1 w-[20px] text-sm h-[20px] bg-red-600 animate-pulse text-white p-2 rounded-full'>
          {virtualBag.length}
        </span>
      )}
    </>
  );
}

export default BagLength;
