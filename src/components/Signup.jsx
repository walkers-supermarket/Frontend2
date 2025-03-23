import React, { useState } from "react";
import signupImage from "../assets/images/signupImage.svg";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && emailOrPhone && password) {
      console.log("Registering with:", { name, emailOrPhone, password });
      // Add your registration logic here (e.g., API call)
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Signing up with Google");
    // Add your Google sign-up logic here (e.g., Firebase Auth)
  };

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

      {/* Right Section: Registration Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-[50%]  p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[50%]  p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-[50%]  bg-[#DB4444] text-white p-3 rounded hover:bg-red-700 transition"
            >
              Create Account
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-[50%]  flex items-center justify-center space-x-2 border border-gray-300 p-3 rounded hover:bg-gray-100 transition"
            >
              <FcGoogle className="h-5 w-5" />
              <span>Sign up with Google</span>
            </button>
          </div>
          <div className="text-start ml-14">
            <p className="text-gray-600">
              Already have account?{" "}
              <a href="/login" className="text-[#DB4444] hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
