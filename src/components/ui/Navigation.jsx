import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex gap-10 justify-center items-center text-base font-semibold text-sky-950">
      <a href="#product" className="self-stretch my-auto leading-7">Product</a>
      <a href="#services" className="self-stretch my-auto leading-7">Services</a>
      <a href="#about" className="self-stretch my-auto leading-7">About</a>
      <button className="gap-2 self-stretch px-10 py-2 my-auto font-bold rounded-3xl border-2 border-solid border-sky-950 max-md:px-5">
        Log In
      </button>
    </nav>
  );
};

export default Navigation;