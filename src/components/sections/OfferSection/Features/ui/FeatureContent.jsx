import React from 'react';

export const FeatureContent = ({ title, items, buttonText }) => {
  return (
    <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[493px]">
        <div className="flex flex-col max-md:max-w-full">
          <h2 className="text-4xl text-black leading-[56px] max-md:max-w-full max-md:text-2xl">{title}</h2>
          <ul className="flex flex-col mt-10 w-full text-xl leading-relaxed text-black">
            {items.map((item, index) => (
              <li key={index} className="flex gap-7 py-px mt-6 max-w-full w-[450px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d22a3dc3048d8981349dbe7156423a2d111e0b57c9c4613a708435563091b6?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="" className="object-contain shrink-0 w-9 aspect-square" />
                <div className="flex-auto my-auto w-[380px]">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {buttonText && (
        <button className="gap-2 self-start px-14 py-4 mt-14 text-xl font-bold leading-snug text-white border-2 border-solid bg-sky-950 border-sky-950 rounded-[56px] max-md:px-5 max-md:mt-10">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export const NextFeatureContent = ({ title }) => {
    return (
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full pb-20">
        <div className="flex flex-col max-w-full w-[493px]">
          <div className="flex flex-col max-md:max-w-full">
            <h2 className="text-4xl text-black leading-[56px] max-md:max-w-full max-md:text-2xl">{title}</h2>
          </div>
        </div>
      </div>
    );
};

