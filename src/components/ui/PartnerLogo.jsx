import React from 'react';

const PartnerLogo = ({ name, type, src, whiteText }) => {
  return (
    <div className="flex gap-2.5 items-start py-1.5 w-[145px]">
      {type === 'text' ? (
        <>
          <div className="flex flex-col">
            <div className={`flex shrink-0 w-4 rounded-none ${whiteText ? 'bg-white' : 'bg-sky-950'} h-[13px]`} />
            <div className={`flex shrink-0 rounded-none ${whiteText ? 'bg-white' : 'bg-sky-950'} h-[18px]`} />
          </div>
          <div className="text-4xl font-bold leading-none basis-auto text-sky-950">{name}</div>
        </>
      ) : (
        <div className="flex overflow-hidden gap-2.5 py-1 text-3xl font-bold leading-tight whitespace-nowrap text-sky-950 w-[146px]">
          <img loading="lazy" src={src} alt={`${name} logo`} className="object-contain shrink-0 aspect-[0.97] w-[33px]" />
          <div className="my-auto basis-auto">{name}</div>
        </div>
      )}
    </div>
  );
};

export default PartnerLogo;