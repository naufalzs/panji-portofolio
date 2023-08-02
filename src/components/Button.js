import React from "react";

export default function Button({ color, onClick, children }) {
  const bgColor = color === "secondary" ? "bg-secondary" : "bg-primary";
  return (
    <button
      className={`capitalize py-4 px-5 rounded-lg  ${bgColor} text-lg leading-none border-2 border-neutral-100 shadow-btn hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
}
