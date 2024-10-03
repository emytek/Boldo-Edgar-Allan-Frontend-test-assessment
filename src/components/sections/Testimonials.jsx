import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
      author: "Albus Dumbledore",
      role: "Manager @ Howarts"
    },
    {
      quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      role: "Manager @ Slytherin"
    },
    {
      quote: "Release facebook responsive web design business model canvas seed money monetization.",
      author: "Harry Potter",
      role: "Team Leader @ Gryffindor"
    }
  ];

  return (
    <section className="flex flex-col items-end self-stretch px-20 py-28 mt-72 w-full bg-sky-950 max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full text-5xl text-white leading-[72px] max-w-[1150px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
        <h2 className="self-start max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
          An enterprise template to ramp up your company website
        </h2>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7cb99da148c4f968a42791dea115d17f341c28d6903d9be12c7cfde62698625?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="Decorative element" className="object-contain shrink-0 self-end mt-16 max-w-full aspect-[2.36] w-[172px] max-md:mt-10" />
      </div>
      <div className="mt-16 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;