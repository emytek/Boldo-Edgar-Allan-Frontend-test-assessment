import React from "react";

// Reusable Logo Component
const Logo = ({ logoSrc, altText, textColor, companyName }) => {
  return (
    <div className="flex gap-3 self-start mt-1.5 items-center">
      <div className="flex flex-col items-center">
        <img src={logoSrc} alt={altText} className="pt-5" />
        <div className="flex shrink-0 rounded-none h-[18px]" />
      </div>
      <div className={`text-4xl lg:text-5xl font-bold leading-none basis-auto ${textColor}`}>
        {companyName}
      </div>
    </div>
  );
};

export default Logo;