import React from 'react';

const FeatureImage = ({ src }) => {
  return (
    <div className="relative w-full max-w-[1094px] mx-auto">
      <img
        src={src}
        alt="Outer Image"
        className="object-cover w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default FeatureImage;
