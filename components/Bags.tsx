import { Bag as BagTyping } from "@/typing";
import Bag from "./Bag";
import { currentUser } from "@clerk/nextjs/server";

async function Bags() {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  let bags: BagTyping[] = [];

  if (email) {
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
  }

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
