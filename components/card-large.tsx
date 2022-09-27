import React from "react";
import Image from "next/image";

export default function CardLarge({ img }) {
  return (
    <div className="relative h-60">
      <Image className="rounded-lg" src={img} layout="fill" />
    </div>
  );
}
