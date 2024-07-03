import { Bag as BagTyping } from "@/typing";
import Bag from "./Bag";
import { currentUser } from "@clerk/nextjs/server";

async function Bags() {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!email)
    return (
      <p className='mt-4 ml-4 text-lg'>
        Need to{" "}
        <span className='text-2xl underline'>Sign In</span>{" "}
        for{" "}
        <span className='text-2xl text-[#E01A2B]'>
          Add to Bag
        </span>
      </p>
    );

  let bags: BagTyping[] = [];

  const response = await fetch(
    `${process.env.SERVICE_URL}/bag/${email}`,
    {
      cache: "no-cache",
      next: { tags: ["bag"] },
    },
  );
  const bagsData = await response.json();
  if (response.status === 200 && bagsData) {
    bags = bagsData.bag;
  }

  if (!bags.length)
    return (
      <p className='text-2xl text-[#E01A2B]'>
        No items in the bag
      </p>
    );

  return (
    <div className='mt-4'>
      {bags.map((bag: BagTyping) => (
        <Bag
          key={bag.productName}
          bag={bag}
        />
      ))}
    </div>
  );
}

export default Bags;
