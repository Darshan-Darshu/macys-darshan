"use client";

import { updateBagAction } from "@/action/productAction";
import { useUser } from "@clerk/nextjs";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";

function QtyButton({
  qty,
  name,
}: {
  qty: number;
  name: string;
}) {
  const { user } = useUser();

  const email = user?.emailAddresses?.[0]?.emailAddress;
  const [isPending, startTransition] = useTransition();
  const [optimistic, addOptimistic] = useOptimistic(
    qty,
    (state, amount) => state + Number(amount),
  );

  const handleQty = async (amount: number) => {
    startTransition(() => addOptimistic(amount));
    if (!email) return;
    await updateBagAction(name, amount, email);
  };
  return (
    <div className='flex-1 '>
      <div className='relative flex border border-black rounded-md h-12 items-center w-[170px]'>
        <p className='absolute -top-3 left-[40%] text-gray-400 text-sm bg-white px-1'>
          Qty
        </p>
        <button
          onClick={() => handleQty(-1)}
          disabled={optimistic === 1}
          className=' py-3 px-5'
        >
          <MinusIcon className='h-4 w-3' />
        </button>
        <p className='border-x border-black py-3 px-5'>
          {optimistic}
        </p>
        <button
          onClick={() => handleQty(1)}
          className=' py-3 px-5'
        >
          <PlusIcon className='h-4 w-4 ' />
        </button>
      </div>
    </div>
  );
}

export default QtyButton;
