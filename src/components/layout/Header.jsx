import React from "react";
import Logo from "./ui/Logo";
import Navigation from "./ui/Navigation";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between py-px w-full max-md:mr-2 max-md:max-w-full">
      <Logo
        logoSrc="https://res.cloudinary.com/dawcdhbhs/image/upload/v1728253986/logo-nav_jngqpp.svg"
        altText="Navigation Logo"
        textColor="text-neutral"
        companyName="Boldo"
      />
      <Navigation />
    </header>
  );
};

export default Header;
