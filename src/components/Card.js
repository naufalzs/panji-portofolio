import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Card({ title, description, img, toggleDialog }) {
  return (
    <div
      className={`h-[670px] border-[3px] border-black rounded-3xl shadow-card overflow-hidden hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all`}
    >
      <div className={`relative h-[420px] bg-blue-500 overflow-hidden`}>
        <Image src={`/assets/images/${img}`} layout="fill" />
      </div>
      <div className={`h-[250px] bg-white pt-4 pb-10 px-6`}>
        <div className={"text-[28px] font-semibold line-clamp-1"}>{title}</div>
        <p className={`text-xl text-neutral-80 line-clamp-2 mt-3 mb-6`}>
          {description}
        </p>
        <Button color={"secondary"} onClick={() => toggleDialog()}>
          Case Study
        </Button>
      </div>
    </div>
  );
}
