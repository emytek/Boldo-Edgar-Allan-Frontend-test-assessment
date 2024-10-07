import React from "react";
import ServiceCard from "./ui/ServiceCard";
import { services } from "../../../../data/ServicesData";

const Services = () => {

  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-20 w-full bg-neutral max-md:px-5 max-md:max-w-full max-md:pl-12">
      <div className="flex flex-col w-full max-w-[1099px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-center max-w-full h-[184px] w-[842px]">
          <h2 className="text-xl leading-relaxed text-zinc-100 text-gray">
            Our Services
          </h2>
          <div className="mt-3 text-5xl font-normal text-center text-primary leading-[72px] max-md:text-2xl max-md:leading-[50px]">
            Handshake infographic mass market crowdfunding iteration.
          </div>
        </div>
        <div className="mt-20 max-md:mt-4 max-md:max-w-full">
          <div className="flex gap-8 lg:gap-24 max-md:flex-col">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
