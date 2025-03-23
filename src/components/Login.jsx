import React from "react";

import signupImage from "../assets/images/signupImage.svg";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <img
          src={signupImage}
          alt="Phone and Shopping Cart"
          className="max-w-full h-auto md:max-w-md"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Log in to Exclusive</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>

        <form className="space-y-4">
          {/* Email or Phone Number Input */}
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Log In Button and Forget Password Link */}
          <div className=" w-[50%] flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Log In
            </button>
            <a href="/forgot-password" className="text-red-600 hover:underline">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
