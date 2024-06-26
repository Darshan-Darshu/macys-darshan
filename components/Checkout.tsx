import SubTotal from "./SubTotal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Checkout() {
  return (
    <section className='w-[30%]'>
      <h3 className='text-lg font-semibold tracking-wide'>
        Enter Promo Code
        <span className='text-sm ml-4 font-normal'>
          Limit 1 offer per order
        </span>
      </h3>
      <form className='relative flex border border-gray-400 mt-2 rounded-md p-2'>
        <input
          className='flex-1 w-full px-2 outline-none'
          placeholder='Enter Promo code'
        />
        <Button className='absolute -right-[1px] top-0 rounded-none rounded-r-md '>
          Apply
        </Button>
      </form>
      <hr className='my-8' />
      <p className='text-sm -mt-2'>
        Shipping, duties and taxes will be calculated at
        checkout, where applicable.
      </p>
      <hr className='my-6' />
      <div className='mt-1'>
        <SubTotal />
        <Button className='w-full my-6'>
          Proceed To Checkout
        </Button>
        <div className='flex items-center justify-between text-sm -mt-1 underline'>
          <p>Continue Shopping</p>
          <p>Shipping To The United State?</p>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
