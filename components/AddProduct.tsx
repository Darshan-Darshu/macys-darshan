"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { createProductAction } from "@/action/productAction";
import { useAppDispatch } from "@/store/hooks";
import { setProduct } from "@/slice/productSlice";
import { useUser } from "@clerk/nextjs";

export function AddProduct() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const dispatch = useAppDispatch();

  const email = user?.emailAddresses?.[0]?.emailAddress;
  const handleAddProduct = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const price = Number(formData.get("price"));
    const productType = formData.get("type")?.toString();
    const productImage = formData.get("image")?.toString();
    if (!name || !price || !productType || !productImage)
      return;

    setOpen(false);
    const data = {
      name,
      price,
      productType,
      productImage,
    };

    console.log("starrt");
    console.log("laoding");
    dispatch(setProduct(data));

    if (email !== process.env.ADMIN) return;
    await createProductAction(data);
    console.log("starrt");
  };
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger className='outline-none'>
        <CirclePlus className='h-8 w-8 text-gray-800 cursor-pointer' />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add product to the macys store. Click add when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          action={handleAddProduct}
          className='grid gap-4 py-4'
          autoComplete='off'
        >
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              name='name'
              placeholder='Product Name'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='price'>Price</Label>
            <Input
              id='price'
              type='number'
              name='price'
              placeholder='Product Price'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='type'>Type</Label>
            <Input
              id='type'
              name='type'
              placeholder='Product Type'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='image'>Image URL</Label>
            <Input
              id='image'
              name='image'
              placeholder='Product Image'
            />
          </div>
          <Button type='submit'>Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
