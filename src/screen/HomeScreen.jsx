import React from "react";
import MainLayout from "../components/layout/MainLayout"; // Import MainLayout
import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Blog from "../components/sections/Blog";
import CallToAction from "../components/sections/CallToAction";
import CustomerView from "../components/sections/CustomerView";

const HomeScreen = () => {
  return (
      <div className="flex flex-col self-stretch pb-20 w-full bg-primary max-md:pl-5 max-md:max-w-full px-[60px] py-[35px]">
        <MainLayout>
            <Hero />
            <Partners />
            <Services />
            <Features />
            <Testimonials />
            <CustomerView />
            <Blog />
            <CallToAction />
        </MainLayout>
      </div>
  );
};

export default HomeScreen;
