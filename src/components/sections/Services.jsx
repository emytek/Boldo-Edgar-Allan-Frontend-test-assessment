import React from "react";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ce10465e8454a53236aadba3b2cc185ff52f323880b97b6fd6e2c97e6e3b3aad?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      title: "Cool feature title",
      description: "Explore page",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c2bafe709c0f8d3befba2e4ef0dc7d6e4d31c331ccbfd8708a67c9d4e99d2d91?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      title: "Even cooler feature",
      description: "Explore page",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2793f4b6ce1318f8cf13226e7443e7bc943947e789eacea304a202af9b2c94af?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
      title: "Cool feature title",
      description: "Explore page",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-24 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1099px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-center max-w-full h-[184px] w-[842px]">
          <h2 className="text-xl leading-relaxed text-zinc-100">
            Our services
          </h2>
          <div className="mt-3 text-5xl text-center text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
            Handshake infographic mass market crowdfunding iteration.
          </div>
        </div>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
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
