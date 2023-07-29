import React from "react";
import WorkDetail from "./WorkDetail";

import data from "@/config";

export default function WorkHistory() {
  const { work_history: workHistoryData } = data;

  return (
    <div
      className={`relative max-w-[1080px] mx-auto my-[54px] grid space-y-[54px] px-10  xl:px-0`}
    >
      {workHistoryData.map((item, index) => (
        <WorkDetail
          key={item.title}
          index={index}
          title={item.title}
          data={item.data}
        />
      ))}
    </div>
  );
}
