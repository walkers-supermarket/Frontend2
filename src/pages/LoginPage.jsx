import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { ScrollRestoration } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <Login />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
