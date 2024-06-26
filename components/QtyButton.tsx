"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";

function QtyButton({ qty }: { qty: number }) {
  const [isPending, startTransition] = useTransition();
  const [optimistic, addOptimistic] = useOptimistic(
    qty,
    (state, amount) => state + Number(amount),
  );

  const handleQty = async (amount: number) => {
    startTransition(() => addOptimistic(amount));
  };
  return (
    <div className='relative flex border border-black rounded-md h-12 items-center'>
      <p className='absolute -top-3 left-[38%] text-gray-400 text-sm bg-white px-1'>
        Qty
      </p>
      <button className=' py-3 px-5'>
        <MinusIcon
          className='h-4 w-3'
          onClick={() => handleQty(-1)}
        />
      </button>
      <p className='border-x border-black py-3 px-5'>
        {optimistic}
      </p>
      <button className=' py-3 px-5'>
        <PlusIcon
          className='h-4 w-4 '
          onClick={() => handleQty(1)}
        />
      </button>
    </div>
  );
}

export default QtyButton;
