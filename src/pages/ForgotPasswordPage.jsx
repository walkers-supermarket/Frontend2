import React from "react";
import Navbar from "../components/Navbar";
import ForgotPassword from "../components/ForgotPassword";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <ForgotPassword />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
