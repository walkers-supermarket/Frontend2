import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <About />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
