import React from 'react';
import PartnerLogo from '../../ui/PartnerLogo';

const Partners = () => {
  const partners = [
    { name: 'Boldo', type: 'text', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/Logo_Shape_2_hbwy8h.png' },
    { name: 'Presto', type: 'image', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/noun_Pie_Chart_4196192_1_2_f0zbli.png' },
    { name: 'Boldo', type: 'text', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/Logo_Shape_2_hbwy8h.png' },
    { name: 'Presto', type: 'image', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/noun_Pie_Chart_4196192_1_2_f0zbli.png' },
    { name: 'Boldo', type: 'text', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/Logo_Shape_2_hbwy8h.png' },
    { name: 'Pres', type: 'image', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/noun_Pie_Chart_4196192_1_2_f0zbli.png' },
    // { name: 'Boldo', type: 'text', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/Logo_Shape_2_hbwy8h.png' },
    // { name: 'Pres', type: 'image', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/noun_Pie_Chart_4196192_1_2_f0zbli.png' },
  ];

  const partnersMobile = [
    { name: 'Boldo', type: 'text', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/Logo_Shape_2_hbwy8h.png' },
    { name: 'Pres', type: 'image', src: 'https://res.cloudinary.com/dawcdhbhs/image/upload/v1728028987/noun_Pie_Chart_4196192_1_2_f0zbli.png' },
  ];

  return (
    <div className="w-full min-h-[42px] self-center pt-20 pl-14 pr-14 lg:pr-0">
      {/* Large Devices */}
      <div className="hidden md:flex gap-20 items-start">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} {...partner} index={index} />
        ))}
      </div>
      
      {/* Mobile Devices */}
      <div className="flex md:hidden gap-10 items-start">
        {partnersMobile.map((partner, index) => (
          <PartnerLogo key={index} {...partner} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
