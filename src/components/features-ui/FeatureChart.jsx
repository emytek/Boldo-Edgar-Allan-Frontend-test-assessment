import React from 'react';

const FeatureChart = ({ title, subtitle, chartType }) => {
  return (
    <div className="flex relative flex-col items-start px-12 pt-80 text-3xl leading-loose text-black rounded-3xl min-h-[523px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative z-10 flex-col justify-center px-8 py-6 max-w-full bg-white rounded-xl shadow-[0px_4px_32px_rgba(0,0,0,0.12)] w-[291px] max-md:px-5">
        <div className="flex justify-center items-center px-6 py-12 max-md:px-5">
          <div className="flex flex-col self-stretch py-px my-auto w-[179px]">
            {chartType === 'bar' && (
              <div className="flex gap-3 justify-center items-end self-end">
                <div className="flex shrink-0 mt-11 w-3 bg-sky-500 h-[133px] max-md:hidden max-md:mt-10" />
                <div className="flex shrink-0 mt-20 bg-sky-500 h-[92px] w-[11px] max-md:mt-10" />
                <div className="flex shrink-0 self-stretch bg-sky-950 h-[177px] w-[11px] max-md:hidden" />
                <div className="flex shrink-0 mt-14 w-3 bg-sky-500 h-[125px] max-md:hidden max-md:mt-10" />
                <div className="flex shrink-0 mt-7 bg-sky-500 h-[149px] w-[11px] max-md:hidden" />
                <div className="flex shrink-0 mt-28 bg-sky-500 h-[68px] w-[11px] max-md:mt-10" />
              </div>
            )}
            <div className="flex gap-3">
              <div className="flex shrink-0 bg-sky-500 h-[50px] w-[11px]" />
              <div className="flex shrink-0 self-start bg-sky-500 h-[29px] w-[11px]" />
            </div>
            <div className="flex flex-col mt-5 text-sky-950">
              <div className="text-2xl font-bold leading-loose">{title}</div>
              <div className="mt-1 text-sm leading-6">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureChart;