import React from 'react';

const FeatureCard = ({ index, title, imgUrl }) => {
    console.log(imgUrl, title, "image url and title");

  return (
    <div
      className={`flex items-center gap-12 justify-between p-8 mb-6 shadow-md rounded-md w-[500px] h-[68px] max-w-full min-w-[250px] max-md:flex-col max-md:h-auto max-md:gap-4
        ${index === 0 ? 'bg-primary text-neutral' : 'bg-neutral text-primary'}`}
    >
      {/* Content Section */}
      <div className="flex items-center gap-3">
        {/* Icon beside the title */}
        <img src={imgUrl} alt="next-icon" loading="lazy" />
        <h3 className="text-lg max-md:text-base">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;

