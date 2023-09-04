import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Card({ title, description, img, href }) {
  return (
    <div
      className={`h-[442px] lg:h-[670px] border-[3px] flex flex-col border-black rounded-3xl shadow-card overflow-hidden hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all`}
    >
      <div className={`relative h-[266px] lg:h-[420px] shrink-0 bg-blue-500 overflow-hidden`}>
        <Image src={`/assets/images/${img}`} layout="fill" />
      </div>
      <div className={`relative flex-grow bg-white pt-3 pb-6 px-4 lg:pt-4 lg:pb-10 lg:px-6`}>
        <div className={`relative h-full`}>
          <div className={"text-lg lg:text-[28px] font-semibold line-clamp-1"}>
            {title}
          </div>
          <p className={`text-sm lg:text-xl text-neutral-80 line-clamp-2 mb-4 lg:mt-3 lg:mb-6`}>
            {description}
          </p>
          <div className={`absolute bottom-0 left-0`}>
            <Button href={href} color={"gray"} disabled={true}>Coming Soon</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
