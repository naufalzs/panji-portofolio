import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";

import data from "@/config";

export default function Header() {
  const { identity, navigation } = data;

  return (
    <div className={`relative max-w-7xl mx-auto`}>
      <div className={`flex justify-between border-2 border-black`}>
        <div
          className={`w-[220px] p-5 flex justify-center border-r-2 border-black`}
        >
          <Image
            src={identity.logo}
            width={51}
            height={55}
            alt="Panji Saputro Logo Identity"
          />
        </div>
        <div className={`flex justify-center items-center space-x-10`}>
          {navigation.map((item) => (
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              key={item.name}
              to={item.href}
              className="cursor-pointer font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className={`w-[220px] p-5 flex justify-center items-center border-l-2 border-black`}
        >
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  );
}