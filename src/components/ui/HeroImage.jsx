import React from 'react';

const HeroImage = () => {
  return (
    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[494px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col pt-3.5 pr-11 pb-8 pl-3.5 text-xs leading-relaxed text-white whitespace-nowrap rounded-2xl bg-sky-950 bg-opacity-80 max-md:pr-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fdd5e5a2828a036eac71a401463841478acf918cb764ed69fc51584df7a2adf?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="" className="object-contain aspect-[4.69] w-[47px]" />
        <div className="flex flex-col items-start mt-10 ml-3.5 w-full max-md:max-w-full">
          <div className="flex gap-3.5 items-center max-w-full w-[524px]">
            <div className="flex shrink-0 self-stretch my-auto h-3 rounded-2xl bg-slate-400 w-[54px]" />
            <div className="flex shrink-0 self-stretch my-auto h-3 rounded-2xl bg-slate-400 min-w-[240px] w-[270px]" />
            <div className="self-stretch my-auto w-[27px]">80%</div>
          </div>
          <div className="flex gap-3.5 items-center mt-5 max-w-full w-[225px]">
            <div className="flex shrink-0 self-stretch my-auto h-3 rounded-2xl bg-slate-400 w-[54px]" />
            <div className="flex shrink-0 self-stretch my-auto w-20 h-3 bg-sky-500 rounded-2xl" />
            <div className="self-stretch my-auto w-[27px]">30%</div>
          </div>
          <div className="flex gap-3.5 items-center mt-5 max-w-full w-[608px]">
            <div className="flex shrink-0 self-stretch my-auto h-3 rounded-2xl bg-slate-400 w-[54px]" />
            <div className="flex shrink-0 self-stretch my-auto h-3 bg-white rounded-2xl min-w-[240px] w-[318px]" />
            <div className="self-stretch my-auto w-[33px]">100%</div>
          </div>
          <div className="flex gap-3.5 items-center mt-5 max-w-full w-[514px]">
            <div className="flex shrink-0 self-stretch my-auto rounded-2xl bg-slate-400 h-[11px] w-[54px]" />
            <div className="flex shrink-0 self-stretch my-auto bg-emerald-300 rounded-2xl h-[11px] min-w-[240px] w-[254px]" />
            <div className="self-stretch my-auto w-10">75%</div>
          </div>
        </div>
      </div>
      <div className="mt-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-4 mx-auto w-full rounded-2xl bg-sky-950 bg-opacity-80 max-md:pr-5 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c175f14364a5ebc8760528da1f02257ee1650d50c9fbb71688ba7ee2d4d66da?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="" className="object-contain aspect-[5.43] w-[49px]" />
              <div className="flex gap-2.5 items-end self-end mt-4">
                <div className="flex shrink-0 mt-5 w-2.5 bg-sky-500 rounded-xl h-[62px]" />
                <div className="flex shrink-0 mt-10 bg-sky-500 rounded-xl h-[43px] w-[9px]" />
                <div className="flex shrink-0 self-stretch w-2.5 rounded-2xl bg-slate-400 h-[83px]" />
                <div className="flex shrink-0 mt-6 w-2.5 bg-sky-500 rounded-xl h-[58px]" />
                <div className="flex shrink-0 self-start mt-3.5 bg-sky-500 rounded-xl h-[70px] w-[9px]" />
                <div className="flex shrink-0 mt-12 w-2.5 h-8 bg-sky-500 rounded-xl max-md:mt-10" />
              </div>
              <div className="flex gap-2.5 max-md:ml-2">
                <div className="flex shrink-0 w-full h-6 bg-sky-500 rounded-xl" />
                <div className="flex shrink-0 self-start w-full h-3.5 bg-sky-500 rounded-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:mt-10">
              <div className="flex flex-col px-7 pt-12 pb-6 mr-0 w-full rounded-2xl bg-sky-950 bg-opacity-80 min-h-[165px] max-md:px-5">
                <div className="flex gap-8 max-w-full w-[202px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44457e650e240925326c435a163890f963fe1e5247019ef038b8b998025cd566?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf" alt="" className="object-contain shrink-0 aspect-square w-[93px]" />
                  <div className="flex flex-col flex-1 justify-center my-auto h-[52px]">
                    <div className="flex rounded-2xl bg-slate-400 min-h-[8px] w-[72px]" />
                    <div className="flex mt-3.5 rounded-2xl bg-slate-400 min-h-[8px] w-[68px]" />
                    <div className="flex mt-3.5 rounded-2xl bg-slate-400 min-h-[8px] w-[76px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;