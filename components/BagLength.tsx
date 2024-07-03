"use client";

import { clearBag, setBags } from "@/slice/bagSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { Bag } from "@/typing";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function BagLength({ bags }: { bags: Bag[] }) {
  const { user } = useUser();
  const virtualBag = useAppSelector(
    (state) => state.bags.bag,
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setBags(bags));
    } else {
      dispatch(clearBag());
    }
  }, [user]);

  return (
    <div
      onClick={() => router.push("/bag")}
      className='relative cursor-pointer'
    >
      <Image
        src='/assets/bag.svg'
        alt='logo'
        width={80}
        height={80}
        className='w-[35px] h-[35px]'
      />
      {virtualBag.length > 0 && (
        <span className='flex items-center justify-center absolute -top-1 -right-1 w-[20px] text-sm h-[20px] bg-red-600 animate-pulse text-white p-2 rounded-full'>
          {virtualBag.length}
        </span>
      )}
    </div>
  );
}

export default BagLength;
