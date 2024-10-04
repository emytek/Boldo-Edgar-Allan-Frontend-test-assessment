import React from "react";
import Testimonials from "../components/sections/Testimonials";
import MainSection from "../components/sections/MainSection";
import OfferSection from "../components/sections/OfferSection";
import EngagementSection from "../components/sections/EngagementSection";

const HomeScreen = () => {
  return (
        <>
        <MainSection />
        <OfferSection />
        <Testimonials />
        <EngagementSection />
      </>
  );
};

export default HomeScreen;
