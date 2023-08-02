import React from "react";
import Marquee from "react-fast-marquee";
import Role from "./Role";

import data from "@/config";

export default function Roles() {
  const { roles: rolesData } = data;

  return (
    <div className={`relative bg-orange`}>
      <Marquee className={`max-w-[1120px] mx-auto py-8 flex items-center`}>
        {rolesData.map((item) => (
          <Role value={item} key={item} />
        ))}
      </Marquee>
    </div>
  );
}
