import React from 'react';
import Image from 'next/image';

export default function Topbar() {
  return (
    <div className="relative hidden h-full flex-col p-5  text-white lg:flex">
      <div className="relative z-20 flex items-center text-black text-lg font-medium">
        <Image src="/logo.png" width={100} height={30} alt="OpenPipe" />
      </div>
    </div>
  );
}
