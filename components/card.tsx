import React from "react";
import Image from "next/image";

export default function Card({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 space-x-4 rounded-xl cursor-pointer bg-gray-100 p-2 hover:bg-gray-200 hover:scale-105 transition transform duration-200">
      
        {/* Left */}
        <div className="relative w-16 h-16">
          
          <Image className="rounded-lg" src={img} layout="fill" />
          
        </div>

        {/* Right */}
        <div className="">
            <h2 className="font-bold">{location}</h2>
            <h2>{distance}</h2>
        </div>
     
    </div>
  );
}
