import React from "react";

const TestimonialCard = ({ index, quote, author, role, imgUrl }) => {
    // Conditional height classes only for large screens
    const cardHeight =
      index === 1 ? "xl:h-[380px]" : index === 2 ? "xl:h-[350px]" : "xl:h-[320px]";
  
    return (
      <div
        className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full bg-neutral rounded-2xl cursor-pointer ${cardHeight}`}
      >
        <div className="flex flex-col p-10 sm:mb-8 lg:mb-0 mx-auto w-full bg-white rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.12)] max-md:px-5 max-md:mt-10">
          <p className="text-2xl leading-9 text-primary">
            <span className="font-bold italic">“</span>
            {quote}
            <span className="font-bold italic">”</span>
          </p>
  
          <div className="flex gap-4 pr-12 mt-10 max-w-full text-sky-950 w-[270px] max-md:pr-5">
            <img loading="lazy" src={imgUrl} alt={`${author}'s testimonial`} />
            <div className="flex flex-col my-auto gap-3">
              <div className="text-base font-bold">{author}</div>
              <div className="self-start text-sm">{role}</div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default TestimonialCard;



  
