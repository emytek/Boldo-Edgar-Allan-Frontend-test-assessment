import React from "react";

const WorkSummary = () => {
  return (
    <section className="w-full py-8 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center text-center">
          <p className="text-4xl text-black leading-[56px] max-md:max-w-full">
            We connect to our customers with the best and help them keep up-and stay open
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full flex justify-center items-center gap-8">
            {/* text-rg */}
            <div className="w-1/2 flex flex-col justify-center items-start gap-4 px-4 py-8">
              <p className="text-lg lg:text-xl font-medium">
                We connect our customers with the best
              </p>
              <hr className="w-full border-t border-[#C4C4C4] my-2" />
              <p className="text-lg lg:text-xl font-medium">
                Android research & development rockstar?
              </p>
            </div>

            {/* icon-rg */}
            <div className="w-1/2 flex flex-col justify-center items-center gap-4 px-4 py-8">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d22a3dc3048d8981349dbe7156423a2d111e0b57c9c4613a708435563091b6?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" 
              alt="check-mark" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d22a3dc3048d8981349dbe7156423a2d111e0b57c9c4613a708435563091b6?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="check-mark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSummary;
