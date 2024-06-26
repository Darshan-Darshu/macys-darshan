import { Bag as BagTyping } from "@/typing";
import QtyButton from "./QtyButton";

function Bag({ bag }: { bag: BagTyping }) {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalPrice = +bag.price * +bag.qty;

  const formatTotalPrice = totalPrice.toLocaleString(
    "en",
    options,
  );

  const formatPrice = bag.price.toLocaleString(
    "en",
    options,
  );
  return (
    <div className='h-[150px] border-b border-gray-300 mb-4'>
      <div className='h-[100px] flex justify-between gap-10'>
        <img
          src={bag.imageUrl}
          alt={bag.productName}
          className='h-full'
        />
        <div className='w-[20%] flex-1'>
          <h1>ADIDAS</h1>
          <p>{bag.productName}</p>
        </div>
        <QtyButton qty={+bag.qty} />
        <div className='flex flex-col items-end space-y-4'>
          <p>INR {formatPrice}</p>
          <p>Total INR {formatTotalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Bag;
