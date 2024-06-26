import { Bag as BagTyping } from "@/typing";
import Bag from "./Bag";

async function Bags() {
  const response = await fetch(
    `${process.env.SERVICE_URL}/bag/darshan`,
    {
      next: { tags: ["bag"] },
    },
  );
  const bags = await response.json();
  return (
    <div className='mt-4'>
      {bags.bag.map((bag: BagTyping) => (
        <Bag
          key={bag.productName}
          bag={bag}
        />
      ))}
    </div>
  );
}

export default Bags;
