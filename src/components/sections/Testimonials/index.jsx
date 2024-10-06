import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      author: "Albus Dumbledore",
      role: "Manager @ Howarts",
      imgUrl:
        "https://res.cloudinary.com/dawcdhbhs/image/upload/v1728131063/Albus_ew8kfd.svg",
    },
    {
      quote:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      role: "Manager @ Slytherin",
      imgUrl:
        "https://res.cloudinary.com/dawcdhbhs/image/upload/v1728131062/Severus_e04ohy.svg",
    },
    {
      quote:
        "Release facebook responsive web design business model canvas seed money monetization.",
      author: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      imgUrl:
        "https://res.cloudinary.com/dawcdhbhs/image/upload/v1728131062/Harry_ehtdjv.svg",
    },
  ];

  return (
    <>
      <div className="flex flex-col self-stretch pb-20 w-full bg-primary max-md:pl-5 max-md:max-w-full px-[60px] py-[15px] max-md:py-[6px]">
        <section className="flex flex-col items-end self-stretch mt-16 px-40 py-12 w-full max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-start w-full leading-[72px] max-w-[1150px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
            <div className="flex flex-col lg:mb-4 lg:mr-42">
              <h2 className="self-start font-light text-left lg:text-center max-md:text-center max-md:max-w-full text-5xl max-md:text-3xl max-md:leading-[50px] leading-[70px] text-neutral ">
                An enterprise template to ramp
              </h2>
              <h2 className="self-start font-light text-left lg:text-center max-md:text-center max-md:max-w-full text-5xl max-md:text-3xl max-md:leading-[50px] leading-[70px] text-neutral">
                up your company website
              </h2>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dawcdhbhs/image/upload/v1728107677/left-right-arrow_l5ny0r.svg"
              alt="Decorative element"
              className="object-contain shrink-0 self-end lg:mt-16 max-w-full aspect-[2.36] w-[172px] max-md:mt-6 max-md:mx-auto"
            />
          </div>
          <div className="mt-16 w-full max-md:mt-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
