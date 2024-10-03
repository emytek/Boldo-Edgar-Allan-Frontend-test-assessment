import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <img loading="lazy" src={image} alt={title} className="object-contain max-w-full rounded-3xl aspect-[0.85] w-[300px]" />
        <div className="flex flex-col mt-6 max-w-full w-[300px]">
          <h3 className="w-full text-2xl text-white">{title}</h3>
          <div className="flex flex-col mt-7 max-w-full text-xl font-bold leading-9 text-white w-[164px]">
            <div className="flex gap-3 justify-center items-center">
              <div className="self-stretch my-auto">{description}</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e193a2d544d22c46fc2adced78c5d4f7ac08f1d6c9d20aeef472ff44bf1d6d8?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="Arrow icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[0.92]" />
            </div>
            <div className="flex mt-2 w-full bg-white min-h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;