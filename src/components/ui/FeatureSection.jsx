import React from 'react';
import FeatureContent from '../features-ui/FeatureContent';
import FeatureImage from '../features-ui/FeatureImage';
import FeatureChart from '../features-ui/FeatureChart';

const FeatureSection = ({ title, items, buttonText, imageSrc, chartData, reverse }) => {
  return (
    <div className={`flex gap-5 ${reverse ? 'flex-row-reverse' : ''} max-md:flex-col`}>
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <FeatureContent title={title} items={items} buttonText={buttonText} />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        {imageSrc ? (
          <FeatureImage src={imageSrc} />
        ) : (
          <FeatureChart {...chartData} />
        )}
      </div>
    </div>
  );
};

export default FeatureSection;