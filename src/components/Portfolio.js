import React from "react";
import Image from "next/image";
import Card from "./Card";

import data from "@/config";

export default function Portfolio() {
  const { portfolio } = data;

  return (
    <div
      id="portfolio"
      className={`min-h-screen bg-gradient-to-tr from-gradient-1 from-25% via-gradient-2 via-40% to-gradient-3 to-75% px-4 lg:px-10 xl:px-0`}
    >
      <div className={`max-w-[1120px] mx-auto py-9 lg:pt-[54px] lg:pb-[62px]`}>
        <div className={`flex items-center mb-4 lg:mb-7`}>
          <div
            className={`font-lora font-semibold text-3xl lg:text-5xl mr-2 lg:mr-3`}
          >
            Portfolio’s
          </div>
          <div className="relative w-12 h-6 lg:w-[76px] lg:h-[40px]">
            <Image src={"/assets/images/triangles.svg"} width={76} height={40} />
          </div>
        </div>
        <div className={`grid md:grid-cols-2 gap-x-7 gap-y-4 md:gap-y-8`}>
          {portfolio.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
