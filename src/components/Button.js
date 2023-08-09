import React from "react";

const Wrapper = ({ href, children }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  );

export default function Button({ color, href, onClick, disabled, children }) {
  const colorClass = () => {
    switch (color) {
      case "secondary":
        return "bg-secondary";

      case "gray":
        return "bg-slate-400";

      default:
        return "bg-primary";
    }
  };

  const bgColor = colorClass();
  const hoverClass = !disabled
    ? "hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
    : "";
  const shadowClass = !disabled ? "shadow-btn" : "shadow-mini"

  return (
    <Wrapper href={href}>
      <button
        className={`capitalize py-4 px-5 rounded-lg  ${bgColor} text-lg font-semibold leading-none border-2 border-neutral-100 ${shadowClass} ${hoverClass}`}
        onClick={onClick ? () => onClick() : undefined}
      >
        {children}
      </button>
    </Wrapper>
  );
}
