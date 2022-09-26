import React from "react";
import Image from "next/image";

type Props = {};

function Banner({}: Props) {
  return (
    <div>
      <div className="relative z-40 h-96">
        <Image 
        src={"/house.jpg"} 
        layout="fill" 
        objectFit="cover" 
        priority={true}
        />

        <div className="absolute top-1/2 w-full text-center">
          <p className="text-white text-6xl font-bold tracking-tight">A Place to Stay.</p>
          <button 
          className="bg-white p-4 px-8 mt-6 rounded-full font-bold hover:scale-105 transition duration-150">
            Get started
          </button>
        </div>

        

      </div>

      

    </div>
  );
}

export default Banner;
