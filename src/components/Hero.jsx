import React from 'react';
import HeroContent from '../components/ui/HeroContent';
import HeroImage from '../components/ui/HeroImage';

const Hero = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center mt-14 max-md:mt-10 max-md:max-w-full">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;