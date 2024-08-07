import { StarIcon } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.SERVICE_URL}/product/${params.id}`,
  );

  const products = await response.json();

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatPrice = Number(products.price).toLocaleString(
    "en",
    options,
  );
  return (
    <div className='2xl:max-w-[70vw] mx-auto px-10'>
      <section className='mt-8 flex space-x-8'>
        <img
          src={products.productImage}
          alt={products.name}
          className='h-[80vh] object-cover '
        />
        <div className='flex-1'>
          <p className='text-sm'>ADIDAS</p>
          <h1 className='text-2xl font-semibold mt-4 mb-2'>
            {products.name}
          </h1>

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

          <p className='mt-8 text-lg font-medium'>
            INR {formatPrice}
          </p>
        </div>
      </section>
    </div>
  );
}
