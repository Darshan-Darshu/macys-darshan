import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      <Image
        src='/assets/banner.jpeg'
        alt='logo'
        width={80}
        height={80}
        className='w-full h-full'
        unoptimized
      />
    </div>
  );
}

export default Banner;
