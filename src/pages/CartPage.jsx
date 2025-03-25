import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <Cart />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
