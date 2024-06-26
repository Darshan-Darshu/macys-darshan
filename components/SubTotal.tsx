"use client";

import { useAppSelector } from "@/store/hooks";

function SubTotal() {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const bagTotal = useAppSelector(
    (state) => state.bags.total,
  );
  const formatPrice = bagTotal.toLocaleString(
    "en",
    options,
  );
  return (
    <div className='flex items-center justify-between text-sm '>
      <p>Subtotal</p>
      <p>INR {formatPrice}</p>
    </div>
  );
}

export default SubTotal;
