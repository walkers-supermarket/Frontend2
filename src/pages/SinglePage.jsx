import React from "react";
import Navbar from "../components/Navbar";
import Single from "../components/Single";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const SinglePage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <Single />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default SinglePage;
