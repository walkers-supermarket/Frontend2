import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/Signup";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <div className="mt-4">
        <SignUp />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
