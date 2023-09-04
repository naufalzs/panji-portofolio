import React from "react";
import Image from "next/image";

export default function Role({value}) {
  return (
    <div className={`flex`}>
      <Image src={"/assets/images/star.svg"} width={51} height={51} />
      <h3
        className={`mx-4 font-lora text-[28px] lg:text-[40px] text-medium tracking-widest`}
      >
        {value}
      </h3>
    </div>
  );
}