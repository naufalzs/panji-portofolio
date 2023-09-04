import Image from "next/image";
import React from "react";
import Button from "./Button";

import data from "@/config";

export default function Hero() {
  const { identity, skills } = data;

  const skillsSection = skills.map((skill, index) => (
    <div
      key={index}
      className={`px-3 lg:px-4 py-2 rounded-lg text-base lg:text-lg font-medium leading-none border-2 border-neutral-100 shadow-mini`}
    >
      {skill}
    </div>
  ));

  return (
    <div id="about-me" className={`relative max-w-[1120px] py-9 lg:py-[54px] mx-auto`}>
      <div className={`flex flex-col lg:flex-row justify-center items-center`}>
        <div className={`relative aspect-square w-full mb-6 md:w-[425px] lg:w-[544px] lg:mb-0 shrink-0`}>
          <Image
            src={"/assets/images/hero-img.png"}
            layout="fill"
            sizes="(max-width: 768px) 100vw, 550px"
            alt="hero image"
          />
        </div>
        <div className={`px-4 lg:px-0 lg:ml-8 w-full`}>
          <div
            className={`font-lora text-[40px] lg:text-[80px] leading-tight tracking-wider`}
          >
            <h2 className={"hidden lg:block"}>{identity.name}</h2>
            <div className="flex pl-0 lg:pl-[70px] xl:pl-[120px]">
              <span className={"mr-2 lg:hidden"}>{identity.name} </span>
              {identity.surname}
              <div className={`ml-3 relative w-10 lg:w-[56px]`}>
                <Image
                  src={`/assets/images/double-triangle.svg`}
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <p
            className={`mt-2 mb-4 lg:mt-4 lg:mb-6 text-sm lg:text-lg font-jakarta font-light`}
          >
            {identity.desc}
          </p>
          <div className={`flex space-x-4`}>
            <Button
              href={`mailto:${identity.email.address}?subject=${identity.email.subject}&body=${identity.email.body}`}
            >
              contact me
            </Button>
            <Button color={"secondary"} href={identity.cv_src}>
              download CV
            </Button>
          </div>
        </div>
      </div>
      <div className={`mt-10 px-4 lg:px-10 xl:px-0 xl:mx-0`}>
        <h3 className={"text-lg lg:text-[28px] font-bold mb-3 lg:mb-5"}>Skills</h3>
        <div className={`flex flex-wrap gap-3`}>{skillsSection}</div>
      </div>
    </div>
  );
}
