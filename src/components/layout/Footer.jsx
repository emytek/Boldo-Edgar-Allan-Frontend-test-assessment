import React from 'react';
import Logo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="px-20 py-28 mt-20 w-full bg-white max-md:px-5 max-md:py-24 max-md:mt-10">
      <div className="grid grid-cols-2 gap-5 justify-between items-start w-full max-w-[1070px] max-md:grid-cols-1 md:grid-cols-4 md:max-w-full">
        <div className="flex flex-col">
          <Logo />
          <p className="mt-11 text-base leading-7 text-neutral-500 max-md:mt-10">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <nav className="flex flex-col mt-1.5 text-xl whitespace-nowrap">
          <h3 className="font-bold leading-relaxed text-black">Landings</h3>
          <ul className="mt-14 leading-8 text-neutral-500 max-md:mt-10 max-md:mr-1.5">
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </nav>
        <nav className="flex flex-col mt-2 whitespace-nowrap">
          <h3 className="self-start text-xl font-bold leading-relaxed text-black">Company</h3>
          <ul className="flex gap-3 mt-14 w-full max-md:mt-10">
            <li className="text-xl leading-8 text-neutral-500">
              Home<br />
              Careers<br />
              Services
            </li>
            <li className="gap-2.5 px-3.5 py-px my-auto text-sm font-bold leading-7 bg-emerald-300 rounded-[120px] text-sky-950">
              Hiring!
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col mt-2 text-xl whitespace-nowrap">
          <h3 className="font-bold leading-relaxed text-black">Resources</h3>
          <ul className="self-start mt-14 leading-8 text-neutral-500 max-md:mt-10">
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </nav>
      </div>
      <p className="mb-0 text-base leading-7 text-neutral-500 max-md:mb-2.5">
        All rights reserved?.
      </p>
    </footer>
  );
};

export default Footer;
