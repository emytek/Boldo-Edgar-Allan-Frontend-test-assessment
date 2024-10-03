import React from 'react';

const Logo = () => {
  return (
    <div className="flex gap-3 self-start mt-1.5">
      <div className="flex flex-col">
        <div className="flex shrink-0 rounded-none bg-sky-950 h-[13px] w-[18px]" />
        <div className="flex shrink-0 rounded-none bg-sky-950 h-[18px]" />
      </div>
      <div className="text-5xl font-bold leading-none basis-auto text-sky-950">
        Boldo
      </div>
    </div>
  );
};

export default Logo;