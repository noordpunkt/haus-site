import React from "react";
import Image from "next/image";

export default function CardLarge({ img, title, description, buttonText }) {
  return (

    <section className="relative">

    
    <div className="relative h-60 my-8">

      <Image 
      className="rounded-xl" 
      src={img} 
      layout="fill" 
      objectFit="cover"
      />

      <div className="absolute top-8 left-8">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>{description}</p>

        <button className="bg-gray-900 text-white mt-2 px-4 py-2 rounded-full hover:scale-105 transition duration-150">
          {buttonText}
        </button>
      </div>

    </div>

    </section>

   
  );
}
