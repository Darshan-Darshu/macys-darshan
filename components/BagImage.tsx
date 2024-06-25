import BagLength from "./BagLength";

async function BagImage() {
  const response = await fetch(
    `${process.env.SERVICE_URL}/bag/darshan`,
    {
      next: { tags: ["bag"] },
    },
  );

  const bags = await response.json();
  const originalBag = bags?.bag;
  return <BagLength bags={originalBag} />;
}

export default BagImage;
