import React from 'react';

const HeroImage = () => {
  return (
<div class="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[694px] max-md:max-w-full pl-8 lg:pl-0">
  <div class="flex overflow-hidden flex-col pt-3.5 pr-11 pb-8 pl-3.5 text-xs leading-relaxed text-white whitespace-nowrap rounded-2xl bg-opacity-80 max-md:pr-5 max-md:max-w-full">
    <img loading="lazy" src="/images/hero-graphics.svg" className="lg:w-full lg:h-auto" />
  </div>
</div>
  );
};

export default HeroImage;