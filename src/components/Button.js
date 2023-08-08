import React from "react";

const Wrapper = ({ href, children }) =>
  href ? <a href={href} target="_blank" rel="noreferrer">{children}</a> : <>{children}</>;

export default function Button({ color, href, onClick, children }) {
  const bgColor = color === "secondary" ? "bg-secondary" : "bg-primary";

  return (
    <Wrapper href={href}>
      <button
        className={`capitalize py-4 px-5 rounded-lg  ${bgColor} text-lg leading-none border-2 border-neutral-100 shadow-btn hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
        onClick={onClick ? () => onClick() : undefined}
      >
        {children}
      </button>
    </Wrapper>
  );
}
