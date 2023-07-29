import React from "react";

export default function Indicator({ height, isCircle }) {
  const topPos = 40;

  return (
    <div className={`flex flex-col items-center px-5 mr-8 shrink-0`}>
      <div style={{ height: topPos }}></div>
      <div
        className={`w-6 h-6 z-10 border-[3px] border-neutral-100 ${
          isCircle ? "bg-purple rounded-full" : "bg-red rotate-45"
        }`}
      ></div>
      <div
        className={`w-3 -mt-[15px] bg-orange border-[3px] border-neutral-100`}
        style={{ height: height + 6 }}
      ></div>
      <div
        className={`w-6 h-6 z-10 -mt-[15px] border-[3px] border-neutral-100 ${
          isCircle ? "bg-red rounded-full" : "bg-purple rotate-45"
        }`}
      ></div>
    </div>
  );
}
