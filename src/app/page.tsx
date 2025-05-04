import Navbar from "@/components/Home/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className="text-4xl font-bold mb-4">Welcome to CNSULTENCY</h1>
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
