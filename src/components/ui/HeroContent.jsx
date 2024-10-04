import React from 'react';

const HeroContent = () => {
  return (
    <div className="flex flex-col self-stretch pt-2 pr-5 my-auto text-base min-w-[240px] rounded-[56px] w-[601px] max-md:max-w-full pb-4">
      <h1 className="mt-9 text-5xl text-neutral leading-[72px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
        Save time by building fast with Boldo Template!
      </h1>
      <p className="mt-5 leading-7 max-md:max-w-full text-neutral">
        Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
      </p>
      <div className="flex gap-5 justify-between mt-16 max-w-full text-xl font-bold leading-snug w-[458px] max-md:mt-10">
        <button className="gap-2 self-stretch px-14 py-4 text-primary border-2 border-solid bg-secondary min-h-[60px] rounded-[56px] max-md:px-5">
          Buy template
        </button>
        <button className="gap-2 self-stretch px-14 py-4 whitespace-nowrap border-2 border-solid border-neutral min-h-[60px] rounded-[56px] text-neutral max-md:px-5">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroContent;