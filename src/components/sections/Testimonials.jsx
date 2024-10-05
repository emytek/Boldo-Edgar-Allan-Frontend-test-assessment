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
    <>
    <div className="flex flex-col self-stretch pb-20 w-full bg-primary max-md:pl-5 max-md:max-w-full px-[60px] py-[15px]">
    <section className="flex flex-col items-end self-stretch mt-16 px-40 py-12 w-full bg-sky-950 max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full text-5xl text-white leading-[72px] max-w-[1150px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
        <h2 className="self-start max-md:max-w-full max-md:text-4xl max-md:leading-[67px] text-neutral">
          An enterprise template to ramp <br />up your company website?
        </h2>
        <img loading="lazy" 
        src="https://res.cloudinary.com/dawcdhbhs/image/upload/v1728107677/left-right-arrow_l5ny0r.svg" alt="Decorative element" className="object-contain shrink-0 self-end mt-16 max-w-full aspect-[2.36] w-[172px] max-md:mt-10" />
      </div>
      <div className="mt-16 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Testimonials;