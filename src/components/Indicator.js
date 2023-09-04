import React, { useEffect, useState } from "react";

export default function Indicator({ height, isCircle }) {
  const [windowWidth, setwindowWidth] = useState(0);
  const [circleTopPos, setcircleTopPos] = useState(40);

  useEffect(() => {
    const handleWindowResize = () => {
      setwindowWidth(window.innerWidth);
    };

    if (windowWidth === 0) handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) {
      setcircleTopPos(30);
    } else {
      setcircleTopPos(40);
    }
  }, [windowWidth]);

  return (
    <div className={`flex flex-col items-center pr-4 lg:px-5 lg:mr-8 shrink-0`}>
      <div style={{ height: circleTopPos }}></div>
      <div
        className={`aspect-square w-4 lg:w-6 z-10 border-2 lg:border-[3px] border-neutral-100 bg-purple ${
          isCircle ? " rounded-full" : "rotate-45"
        }`}
      ></div>
      <div
        className={`w-2 lg:w-3 -mt-[15px] bg-orange border-2 lg:border-[3px] border-neutral-100`}
        style={{ height: height + 6 }}
      ></div>
      <div
        className={`aspect-square w-4 lg:w-6 z-10 -mt-[15px] border-2 lg:border-[3px] border-neutral-100 bg-red ${
          isCircle ? "rounded-full" : " rotate-45"
        }`}
      ></div>
    </div>
  );
}
