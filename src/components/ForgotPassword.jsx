import React, { useState } from "react";
import signupImage from "../assets/images/signupImage.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Sending password reset link to:", email);
      // Add my password reset logic here (e.g., API call to send email)
      setEmail(""); // Clear the input after submission
    } else {
      alert("Please enter your email address");
    }
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

      {/* Right Section: Forgot Password Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Forgot Password</h2>
        <p className="text-gray-600 mb-6">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleResetPassword} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Send Reset Link Button */}
          <div>
            <button
              type="submit"
              className="w-[50%] bg-[#DB4444] text-white p-3 rounded hover:bg-red-700 transition"
            >
              Send Reset Link
            </button>
          </div>

          {/* Back to Log in Link */}
          <div className="text-start">
            <a href="/login" className="text-[#DB4444] hover:underline">
              Back to Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
