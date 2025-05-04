// import AboutUsSection from "@/components/Home/About";
import { AboutWithGridBg } from "@/components/Home/AboutWithGridBg";
import MissionBanner from "@/components/Home/Banner";
import { DotEventContact } from "@/components/Home/DotEvent";
// import EventContact from "@/components/Home/EventContact";
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
      <AboutWithGridBg />
      <Offers />
      <Pricing />
      <DotEventContact />
      <Footer />
    </div>
  );
};

export default Home;
