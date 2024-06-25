import React from "react";

const items = [
  "Women",
  "Men",
  "Kids & Baby",
  "Home",
  "Shoes",
  "Handbags & Accessories",
  "Jewelry",
  "Sale",
];

function Nav() {
  return (
    <nav className='border-b border-gray-300 pb-4'>
      <ul className='flex items-center justify-between 2xl:max-w-[70vw] mx-auto px-10'>
        {items.map((item: string) => (
          <li
            className='font-semibold cursor-pointer hover:text-[#E01A2B]'
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
