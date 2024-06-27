import Bags from "@/components/Bags";
import Checkout from "@/components/Checkout";
import { Suspense } from "react";

export default function Bag() {
  return (
    <main className='2xl:max-w-[70vw] mx-auto flex gap-40 pl-10 mt-12'>
      <div className='flex-1'>
        <h1 className='text-2xl font-semibold'>Your Bag</h1>
        <div className='border-b border-gray-200 mt-4' />

        <Suspense fallback={<h1>Loading..</h1>}>
          <Bags />
        </Suspense>
      </div>
      <Checkout />
    </main>
  );
}
