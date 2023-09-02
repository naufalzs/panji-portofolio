import React from "react";
import WorkDetail from "./WorkDetail";

import data from "@/config";

export default function WorkHistory() {
  const { work_history: workHistoryData } = data;

  return (
    <div
      id="work-history"
      className={`relative max-w-[1120px] mx-auto py-[54px] grid space-y-10 px-4 lg:px-10 xl:pl-0 xl:pr-[192px]`}
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
