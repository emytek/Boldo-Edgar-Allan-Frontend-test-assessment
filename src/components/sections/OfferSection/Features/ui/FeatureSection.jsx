import React from "react";
import { FeatureContent, NextFeatureContent } from "./FeatureContent";
import FeatureImage from "./FeatureImage";
import FeatureCard from "./FeatureCard";
import { featuresData } from "../../../../../data/FeaturesData";

const FeatureSection = ({ index, title, imgUrl, items, buttonText, imageSrc }) => {
  return (
    <>
      {index === 0 ? (
        <div className="flex gap-8 lg:gap-28 xl:pl-10 max-md:flex-col">
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full min-w-[240px] w-[594px] lg:pb-4">
            <FeatureImage src={imageSrc} />
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureContent
              title={title}
              items={items}
              buttonText={buttonText}
            />  
          </div>
        </div>
      ) : (
        <div className="flex gap-8 xl:pl-10 max-md:flex-col md:mt-24 lg:mt-14">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <NextFeatureContent title={title} />
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                index={index}
                title={feature.title}
                imgUrl={feature.imgUrl}
              />
            ))}
          </div>
          <div className="flex flex-col max-md:ml-0 max-md:w-full min-w-[240px] w-[594px] lg:pb-4">
            <FeatureImage src={imageSrc} />
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureSection;
