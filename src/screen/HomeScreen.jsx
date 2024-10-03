import React from "react";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Blog from "../components/sections/Blog";
import CallToAction from "../components/sections/CallToAction";
import Footer from "../components/sections/Footer";

const HomeScreen = () => {
  return (
    <>
      <div className="flex flex-col self-stretch pb-20 pl-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <Header />
        <Hero />
        <Partners />
        <Services />
        <Features />
        <Testimonials />
        <Blog />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
