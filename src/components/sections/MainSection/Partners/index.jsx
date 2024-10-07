import React from 'react';
import PartnerLogo from './ui/PartnerLogo';
import { partners, partnersMobile } from '../../../../data/PartnersData';

const Partners = () => {
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
