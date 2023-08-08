import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Indicator from "./Indicator";
import { format } from "date-fns";

export default function WorkDetail({ index, title, data }) {
  const isEven = index % 2 === 0;
  const firstTitleRef = useRef();
  const lastTitleRef = useRef();
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const getPosition = () => {
    const topPos = firstTitleRef.current?.offsetTop || 0;
    const lastPos = lastTitleRef.current?.offsetTop || 0;
    setIndicatorHeight(lastPos - topPos);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  const formatDate = (date) => format(new Date(date), "MMM yyyy");

  return (
    <div>
      <div className={`flex items-center mb-7`}>
        <h2 className={`font-lora text-5xl font-semibold mr-3`}>{title}</h2>
        <Image
          src={`/assets/images/${isEven ? "circles" : "rhombi"}.svg`}
          width={56}
          height={32}
        />
      </div>
      <div className={`relative flex`}>
        <Indicator height={indicatorHeight} isCircle={isEven} />
        <div className={`grid space-y-7`}>
          {data.map((work, index) => (
            <div
              key={work.id}
              ref={
                index === 0
                  ? firstTitleRef
                  : index === data.length - 1 && lastTitleRef
              }
            >
              <div className={`text-xl text-neutral-80`}>
                {formatDate(work.start_date)} - {formatDate(work.end_date)}
              </div>
              <div
                className={`text-[28px] text-neutral-100 font-semibold my-[3px]`}
              >
                {work.company}
              </div>
              <div className={`text-xl text-neutral-100 font-semibold`}>
                {work.role}
              </div>
              <ul className={`mt-3 space-y-2`}>
                {work.jobs.map((job) => (
                  <li key={job} className={`flex text-lg`}>
                    <div className="shrink-0 mr-2">
                      <Image
                        src={`/assets/images/point.svg`}
                        width={15}
                        height={15}
                      />
                    </div>
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
