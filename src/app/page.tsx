import AboutUsSection from "@/components/Home/About";
import MissionBanner from "@/components/Home/Banner";
import EventContact from "@/components/Home/EventContact";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Offers from "@/components/Home/Offers";
import Pricing from "@/components/Home/Pricing";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MissionBanner />
      <AboutUsSection />
      <Offers />
      <Pricing />
      <EventContact />
      <Footer />
    </div>
  );
};

export default Home;
