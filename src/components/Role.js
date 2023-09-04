import React from "react";
import Image from "next/image";

export default function Role({ value }) {
  return (
    <div className={`flex`}>
      <div className={`relative aspect-square w-9 lg:w-[51px] shrink-0`}>
        <Image src={"/assets/images/star.svg"} layout="fill" />
      </div>
      <h3
        className={`mx-4 font-lora text-[28px] lg:text-[40px] text-medium tracking-widest`}
      >
        {value}
      </h3>
    </div>
  );
}