import { AboutWithGridBg } from "@/components/Home/AboutWithGridBg";
import MissionBanner from "@/components/Home/Banner";
import { DotEventContact } from "@/components/Home/DotEvent";

import Offers from "@/components/Home/Offers";
import Pricing from "@/components/Home/Pricing";
import React from "react";

const Home = () => {
  return (
    <div>
      <MissionBanner />
      <AboutWithGridBg />
      <Offers />
      <Pricing />
      <DotEventContact />
    </div>
  );
};

export default Home;
