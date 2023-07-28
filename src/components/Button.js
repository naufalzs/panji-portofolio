import React from "react";

export default function Button({ color, onClick, children }) {
  const bgColor = color === "secondary" ? "bg-secondary" : "bg-primary";
  return (
    <button
      className={`capitalize py-4 px-5 rounded-lg  ${bgColor} text-lg leading-none border-2 border-neutral-100 shadow-btn`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
}
