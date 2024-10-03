import React from 'react';
import PartnerLogo from './PartnerLogo';

const Partners = () => {
  const partners = [
    { name: 'Boldo', type: 'text' },
    { name: 'Presto', type: 'image', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8d2a1503861a48b7af988c7cb35df3bd32a267b52db2348946c8273f6118e7b3?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf' },
    { name: 'Boldo', type: 'text' },
    { name: 'Presto', type: 'image', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2b76d23a9319b788c8c3d8f88bbcdbc3916ee867e7629bbda31705e55589366?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf' },
    { name: 'Boldo', type: 'text', whiteText: true },
    { name: 'Presto', type: 'image', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77db6d81e2cb541bb9b431acbf49b3d13d952c597d15e20c30f64dd0d0bf0885?placeholderIfAbsent=true&apiKey=a7a9723fd7c8498da90b21ba26986bcf' },
  ];

  return (
    <div className="flex gap-10 items-start self-center mt-24 w-full max-w-[1119px] min-h-[42px] max-md:mt-10 max-md:max-w-full">
      {partners.map((partner, index) => (
        <PartnerLogo key={index} {...partner} />
      ))}
    </div>
  );
};

export default Partners;