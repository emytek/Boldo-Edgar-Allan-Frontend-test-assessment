import React from "react";

const CallToAction = () => {
  return (
    <section className="flex flex-col mt-32 w-full rounded-xl bg-primary lg:w-10/12 xl:ml-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full rounded-none min-h-[391px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce3bb4822609b4fdf1cf0b880bc896e3427c5bbd44db402a7c7b86a58582c44?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[682px]">
          <h2 className="text-5xl text-center text-neutral leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
            An enterprise template to ramp up your company website
          </h2>
          <form className="flex flex-wrap gap-6 self-center mt-12 max-w-full w-full md:w-[606px] max-md:mt-10">
            <label htmlFor="email" className="sr-only">
              Your email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="grow px-9 py-3.5 leading-relaxed text-center text-black bg-white border-2 border-white border-solid rounded-[240px] w-full md:w-[60%] max-md:px-5"
              aria-label="Your email address"
            />
            <button
              type="submit"
              className="self-stretch px-14 py-4 font-bold leading-snug bg-secondary border-2 border-emerald-300 border-solid rounded-[56px] text-sky-950 w-full md:w-[35%] max-md:px-5 transition-all duration-700 ease-out transform hover:scale-105 hover:bg-emerald-300 hover:text-white hover:shadow-xl active:scale-95 animate-fade-in-up"
            >
              Start now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
