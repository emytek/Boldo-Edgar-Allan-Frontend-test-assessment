import React from 'react';

const PartnerLogo = ({ name, type, src, index }) => {
  // Set the opacity based on the index of the partners array
  const opacityClasses = () => {
    switch (index) {
      case 0: // First pair
      case 5: // Sixth pair
        return 'opacity-20'; // Deep opacity
      case 1: 
      case 4: 
        return 'opacity-40';
    //   case 2: // Second pair
    //   case 5: // Fifth pair
    //     return 'opacity-70'; // Faint opacity
      default:
        return 'opacity-100'; // Default full opacity for the other pairs
    }
  };


  return (
    <div className={`flex items-center gap-4 ${opacityClasses()}`}>
      {/* Render image or text based on the 'type' */}
      <img src={src} alt={name} className="object-cover" />
      <div className={`text-neutral font-bold ${name === 'Presto' || name === 'Pres' ? 'text-3xl' : 'text-4xl'}`}>
            {name}
      </div>

    </div>
  );
};

export default PartnerLogo;
