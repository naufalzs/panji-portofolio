import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div id="about-me" className={`relative max-w-[1080px] pt-10 pb-14 mx-auto`}>
      <div className={`flex justify-center items-center`}>
        <div className={`w-[544px] h-[544px] shrink-0`}>
          <Image
            src={"/assets/images/hero-img.png"}
            width={544}
            height={544}
            alt="hero image"
          />
        </div>
        <div className={`ml-8 mr-10 w-full`}>
          <div className={`font-lora text-[80px] leading-tight tracking-wider`}>
            <h2>Panji</h2>
            <h2 className="text-right">
              Saputro
              <span className={`ml-3`}>
                <Image
                  src={`/assets/images/double-triangle.svg`}
                  width={56}
                  height={46}
                />
              </span>
            </h2>
          </div>
          <p className={`mt-4 mb-6 text-lg text-neutral-80`}>
            I am a highly motivated UI/UX designer with over a year of
            professional experience. With a passion for creating user-centered
            designs, I strive to combine aesthetics with functionality to
            deliver exceptional user experiences.
          </p>
          <div className={`flex space-x-4`}>
            <Button>contact me</Button>
            <Button color={"secondary"}>download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
