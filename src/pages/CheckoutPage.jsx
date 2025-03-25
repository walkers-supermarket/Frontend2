import React from "react";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <Checkout />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default CheckoutPage;
