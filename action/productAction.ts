"use server";

import { Bag, Product } from "@/typing";
import { revalidateTag } from "next/cache";

export const createProductAction = async (
  data: Product,
) => {
  const response = await fetch(
    `${process.env.SERVICE_URL}/product`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  if (response?.status !== 201) return "error";
  revalidateTag("product");
};

export const createBagAction = async (
  bag: Bag,
  user: string,
) => {
  const response = await fetch(
    `${process.env.SERVICE_URL}/bag`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...bag, user }),
    },
  );
  if (response?.status !== 200) return "error";
  revalidateTag("bag");
};
