import React from 'react';

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col p-10 mx-auto w-full bg-white rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.12)] max-md:px-5 max-md:mt-10">
        <p className="text-2xl leading-9 text-black">{quote}</p>
        <div className="flex gap-4 pr-12 mt-10 max-w-full text-sky-950 w-[270px] max-md:pr-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/327a7f29f05482230dee6a91dd128b57b9a83e3557de4cd739fa5e437a67b270?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt={author} className="object-contain shrink-0 rounded-full aspect-square w-[58px]" />
          <div className="flex flex-col my-auto">
            <div className="text-base font-bold leading-loose">{author}</div>
            <div className="self-start mt-5 text-sm leading-loose">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;