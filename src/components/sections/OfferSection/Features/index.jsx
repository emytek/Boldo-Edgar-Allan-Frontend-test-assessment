import React from 'react';
import FeatureSection from './ui/FeatureSection';

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
      imageSrc: "https://res.cloudinary.com/dawcdhbhs/image/upload/v1728061723/lryr6d8ipvi0eac4yimz.svg"
    },
    {
      title: "We connect our customers with the best, and help them keep up-and stay open.",
      items: [
        "We connect our customers with the best.",
        "Advisor success customer launch party.",
        "Business-to-consumer long tail."
      ],
      imageSrc: "https://res.cloudinary.com/dawcdhbhs/image/upload/v1728077255/feature-grp2_e808i3.svg"
    }
  ];

  return (
    <section className="mt-32 ml-6 w-full max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} index={index}/>
      ))}
    </section>
  );
};

export default Features;