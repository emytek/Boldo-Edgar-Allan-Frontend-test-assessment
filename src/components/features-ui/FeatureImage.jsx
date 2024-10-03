import React from 'react';

const FeatureImage = ({ src }) => {
  return (
    <div className="flex relative flex-col items-start px-12 pt-80 text-3xl leading-loose text-black rounded-3xl min-h-[523px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src={src} alt="Feature illustration" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative z-10 flex-col justify-center px-8 py-6 max-w-full bg-white rounded-xl shadow-[0px_4px_32px_rgba(0,0,0,0.12)] w-[291px] max-md:px-5">
        <div className="flex justify-center items-center px-6 py-12 max-md:px-5">
          <div className="flex flex-col self-stretch py-px my-auto w-[179px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/473689c025c391caa66298b0bcff31052ac33710bd5ebf954382055b1abaac49?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="Chart" className="object-contain w-full aspect-[1.01] max-md:mr-1" />
            <div className="flex flex-col pl-3.5 mt-6">
              <div className="max-md:mr-1">35% - Agile Development</div>
              <div className="mt-3">30% - Investor bandwidth</div>
              <div className="self-start mt-3">35% - A/B testing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;