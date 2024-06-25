import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { AddProduct } from "./AddProduct";
import BagImage from "./BagImage";

function Header() {
  const handleSearchForm = async (formData: FormData) => {
    "use server";
    const search = formData.get("search")?.toString();
    console.log(search);
  };
  return (
    <header className='sticky top-0 z-50 bg-white '>
      <div className='2xl:max-w-[70vw] mx-auto flex items-center justify-between py-6 px-8 space-x-2'>
        <Image
          src='/assets/download.svg'
          alt='logo'
          width={80}
          height={80}
          className='w-40 h-auto'
        />
        <form
          action={handleSearchForm}
          className='flex items-center space-x-4 bg-stone-100 rounded-3xl py-3 w-2/4'
        >
          <SearchIcon className='w-6 h-6 text-gray-700' />
          <input
            type='text'
            className='w-full bg-transparent text-lg outline-none'
            placeholder='Search'
          />
        </form>
        <div className='relative flex items-center space-x-8'>
          <AddProduct />
          <Image
            src='/assets/bag.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-[35px] h-[35px]'
          />
          <BagImage />
        </div>
      </div>
    </header>
  );
}

export default Header;
