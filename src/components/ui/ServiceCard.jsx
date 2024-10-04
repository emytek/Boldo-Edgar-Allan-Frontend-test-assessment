import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain max-w-full rounded-3xl aspect-[0.85] w-[300px]"
      />
      <div className="flex flex-col mt-6 max-w-full w-[300px]">
        <h3 className="w-full text-2xl text-white">{title}</h3>
        <div className="flex flex-col mt-5 max-w-full leading-9">
          <div className="">
            <p className='text-gray'>
            Learning curve network effects
            <br />
           return on investments
            </p>
            <div className="flex gap-3 items-start text-left self-stretch my-auto mt-6">
            <p className='text-xl font-bold'>{description}</p>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dawcdhbhs/image/upload/v1728055733/arrow-right_w4tpr5.svg"
              alt="arrow"
            />
            </div>
            <hr className="w-1/2 border-t border-[#C4C4C4] my-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;