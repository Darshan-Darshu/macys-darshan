import { Bag } from "@/typing";
import BagLength from "./BagLength";
import { currentUser } from "@clerk/nextjs/server";

async function BagImage() {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  let bags: Bag[] = [];

  if (email) {
    const response = await fetch(
      `${process.env.SERVICE_URL}/bag/${email}`,
      {
        cache: "no-cache",
        next: { tags: ["bag"] },
      },
    );
    const bagsData = await response.json();
    console.log(bagsData);
    if (response.status === 200 && bagsData) {
      bags = bagsData.bag;
    }
  }
  return <BagLength bags={bags} />;
}

export default BagImage;
