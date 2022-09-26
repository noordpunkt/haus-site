import React from "react";
import Image from "next/image";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid md:grid-cols-3 bg-white shadow-sm px-6 py-2">
      {/* Header Left */}

      <div className="relative flex items-center h-20 cursor-pointer my-auto">
        <Image
          src={"/haus-logo.svg"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Header Middle */}

      <div className="grid content-center">
        <div className="w-full flex items-center bg-gray-100 rounded-full px-6 h-12">
          <div className="flex-grow">
            <input
              type="text"
              className="bg-transparent w-full outline-transparent outline-none text-gray-600 placeholder-gray-600"
              placeholder="Search..."
            />
          </div>

          <div className="flex justify-end">
            <MagnifyingGlassIcon className="h-8 p-1 text-gray-600 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Header Right */}

      <div className="flex items-center justify-end hidden md:inline-flex">
        <UserIcon className="h-8 p-1 text-gray-600 rounded-full cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
