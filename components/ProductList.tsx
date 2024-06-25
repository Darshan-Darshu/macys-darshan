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

function ProductList({
  products,
}: {
  products: Product[];
}) {
  const virtualProduct = useAppSelector(
    (state) => state.product.product,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("First");
    dispatch(setProducts(products));
  }, []);

  const handleAddToBag = async (product: Product) => {
    const user = "Darshan";
    const bag: Bag = {
      productName: product.name,
      price: product.price,
      qty: 1,
      imageUrl: product.productImage,
    };
    dispatch(setBag(bag));
    await createBagAction(bag, user);
  };
  return (
    <section className='grid grid-cols-4 gap-12 mt-24 cursor-pointer'>
      {virtualProduct.map((product: Product) => (
        <div
          key={product.name}
          className='flex flex-col justify-between'
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
              Now INR {product.price}
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
          <Button
            className='mt-3 w-full'
            onClick={() => handleAddToBag(product)}
          >
            Add To Bag
          </Button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
