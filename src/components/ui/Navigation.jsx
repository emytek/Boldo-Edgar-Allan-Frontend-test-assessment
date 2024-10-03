import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex gap-10 justify-center items-center text-base font-semibold text-neutral">
      <a href="#product" className="self-stretch my-auto leading-7">Product</a>
      <a href="#services" className="self-stretch my-auto leading-7">Services</a>
      <a href="#about" className="self-stretch my-auto leading-7">About</a>
      <button className="flex gap-2 self-stretch px-8 py-2 my-auto font-bold rounded-3xl border-2 border-solid bg-neutral text-primary lg:px-12 lg:py-3 text-sm lg:text-base max-md:px-5">
        Log In
     </button>

    </nav>
  );
};

export default Navigation;