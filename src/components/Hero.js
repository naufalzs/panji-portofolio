import Image from "next/image";
import React from "react";
import Button from "./Button";

import data from "@/config";

export default function Hero() {
  const { identity, skills } = data;

  const skillsSection = skills.map((skill, index) => (
    <div
      key={index}
      className={`px-4 py-2 rounded-lg text-lg font-medium leading-none border-2 border-neutral-100 shadow-mini`}
    >
      {skill}
    </div>
  ));

  return (
    <div
      id="about-me"
      className={`relative max-w-[1120px] py-[54px] mx-auto`}
    >
      <div className={`flex justify-center items-center`}>
        <div className={`w-[544px] h-[544px] shrink-0`}>
          <Image
            src={"/assets/images/hero-img.png"}
            width={544}
            height={544}
            alt="hero image"
          />
        </div>
        <div className={`ml-8 w-full`}>
          <div className={`font-lora text-[80px] leading-tight tracking-wider`}>
            <h2>{identity.name}</h2>
            <h2 className="pl-[120px]">
              {identity.surname}
              <span className={`ml-3`}>
                <Image
                  src={`/assets/images/double-triangle.svg`}
                  width={56}
                  height={46}
                />
              </span>
            </h2>
          </div>
          <p className={`mt-4 mb-6 text-lg font-jakarta font-light`}>{identity.desc}</p>
          <div className={`flex space-x-4`}>
            <Button href={`mailto:${identity.email.address}?subject=${identity.email.subject}&body=${identity.email.body}`}>
              contact me
            </Button>
            <Button color={"secondary"} href={identity.cv_src}>
              download CV
            </Button>
          </div>
        </div>
      </div>
      <div className={`mt-10 px-4 lg:px-10 xl:mx-0 flex flex-wrap gap-3`}>{skillsSection}</div>
    </div>
  );
}
