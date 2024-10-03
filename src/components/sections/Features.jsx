import React from 'react';
import FeatureSection from '../ui/FeatureSection';

const Features = () => {
  const features = [
    {
      title: "We connect our customers with the best, and help them keep up-and stay open.",
      items: [
        "We connect our customers with the best.",
        "Advisor success customer launch party.",
        "Business-to-consumer long tail."
      ],
      buttonText: "Start now",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ff4994c623b61bd90af522a1d30d88ef9a4664119bd0d3f5d5542c0623d146f?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf"
    },
    {
      title: "We connect our customers with the best, and help them keep up-and stay open.",
      items: [
        "We connect our customers with the best.",
        "Advisor success customer launch party.",
        "Business-to-consumer long tail."
      ],
      chartData: {
        title: "30%",
        subtitle: "More income in June",
        chartType: "bar"
      }
    }
  ];

  return (
    <section className="mt-32 ml-6 w-full max-w-[1137px] max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default Features;