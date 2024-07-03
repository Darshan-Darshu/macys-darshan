"use client";

import { Bag, Product } from "@/typing";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { setProducts } from "@/slice/productSlice";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { createBagAction } from "@/action/productAction";
import { setBag } from "@/slice/bagSlice";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function ProductList({
  products,
}: {
  products: Product[];
}) {
  const { user } = useUser();

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const email = user?.emailAddresses?.[0]?.emailAddress;
  const virtualProduct = useAppSelector(
    (state) => state.product.product,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, []);

  const handleAddToBag = async (product: Product) => {
    const bag: Bag = {
      productName: product.name,
      price: product.price,
      qty: 1,
      imageUrl: product.productImage,
    };
    dispatch(setBag(bag));
    if (!email) return;
    await createBagAction(bag, email);
  };
  return (
    <section className='grid grid-cols-4 gap-12 mt-24'>
      {virtualProduct.map(
        (product: Product, index: number) => (
          <div
            key={product.name}
            className='flex flex-col justify-between'
          >
            <Link
              href={`/product/${product._id}`}
              className='flex-1 flex flex-col justify-between'
            >
              <img
                src={product.productImage}
                alt={product.name}
                className='w-[400px] h-[500px] object-cover'
              />
              <div className=' flex-1 flex flex-col justify-between mt-4'>
                <h1 className='text-sm font-semibold hover:underline'>
                  {product.name}
                </h1>
                <p className='font-bold text-[#E01A2B] flex-1'>
                  Now INR{" "}
                  {Number(product.price).toLocaleString(
                    "en",
                    options,
                  )}
                </p>
                <div className='flex items-center space-x-2'>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className='w-4 h-4'
                      />
                    ))}
                </div>
              </div>
            </Link>
            <div className='relative'>
              <Button
                className='mt-3 w-full '
                disabled={!email}
                onClick={() => handleAddToBag(product)}
              >
                Add To Bag
              </Button>
              {!email && index === 0 && (
                <p className='absolute text-sm text-gray-600'>
                  * please sign in to add the product
                </p>
              )}
            </div>
          </div>
        ),
      )}
    </section>
  );
}

export default ProductList;
