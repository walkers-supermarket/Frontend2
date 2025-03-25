import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <Contact />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
