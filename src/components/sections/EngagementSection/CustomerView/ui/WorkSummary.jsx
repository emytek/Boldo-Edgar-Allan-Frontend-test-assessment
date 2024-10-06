import React from "react";
import WorkSummaryRow from "./WorkSummaryRow";

const WorkSummary = () => {
    const summaryData = [
        {
          text: "We connect our customers with the best?",
          imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/13d22a3dc3048d8981349dbe7156423a2d111e0b57c9c4613a708435563091b6?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf", 
          isPrimary: true, 
        },
        {
          text: "Android research and development rockstar?",
          imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/13d22a3dc3048d8981349dbe7156423a2d111e0b57c9c4613a708435563091b6?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf",
          isPrimary: false,
        },
      ];
    

  return (
    <section className="w-full py-8 px-4 lg:px-28">
  <div className="flex flex-col lg:flex-row items-center w-full gap-8">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 flex justify-start items-center text-left">
      <p className="text-3xl md:text-4xl text-primary leading-tight lg:leading-[56px]">
        We connect to our customers <br />
        with the best and help them <br />
        keep up-and stay open
      </p>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        {summaryData.map((item, index) => (
            <WorkSummaryRow key={index} text={item.text} imgUrl={item.imgUrl} isPrimary={item.isPrimary}/>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default WorkSummary;
