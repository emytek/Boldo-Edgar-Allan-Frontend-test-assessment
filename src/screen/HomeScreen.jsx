import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

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
