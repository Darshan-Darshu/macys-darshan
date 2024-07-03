import Banner from "@/components/Banner";
import Info from "@/components/Info";
import Products from "@/components/Products";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className='2xl:max-w-[70vw] mx-auto px-10'>
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Products />
      </Suspense>

      <p className='bg-gray-100 rounded-sm text-center font-semibold text-[16px] py-6 mt-24'>
        Macys.com is a U.S. website. All offers are based on
        USD, U.S. times & dates. International exchanges
        rates will be applied
      </p>

      <section className='flex my-24'>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <Info
              key={index}
              index={index}
            />
          ))}
      </section>
    </main>
  );
}
