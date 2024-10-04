import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-3 self-start mt-1.5 items-center">
      <div className="flex flex-col items-center">
        <img src="/icons/logo-shape.png" alt="Logo" className="pt-5"/>
        <div className="flex shrink-0 rounded-none bg-sky-950 h-[18px]" />
      </div>
      <div className="text-5xl font-bold leading-none basis-auto text-neutral">
        Boldo
      </div>
    </div>
  );
};

export default Logo;
