import React from "react";
import Image from "next/image";

export default function CardMedium({ img, title }) {
  return (
    <div className="bg-gray-100 rounded-lg mt-2 p-6 cursor-pointer">
      {/* Top */}
      <div className="relative w-60 h-60 hover:scale-105 transition transform duration-200 ease-out">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      <div className="mt-3">
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
}
