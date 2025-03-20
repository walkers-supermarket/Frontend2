import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ signupImage }) => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.emailOrPhone)
      newErrors.emailOrPhone = "Email or Phone Number is required";
    else if (
      !/\S+@\S+\.\S+/.test(formData.emailOrPhone) &&
      !/^\d{10}$/.test(formData.emailOrPhone)
    )
      newErrors.emailOrPhone = "Enter a valid email or 10-digit phone number";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        // Simulate an API call (replace with actual login logic)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Login form submitted:", formData);
        alert("Logged in successfully!");
        setFormData({ emailOrPhone: "", password: "" });
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google Sign-In logic
    console.log("Log in with Google");
    alert("Google Sign-In clicked (placeholder)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Background Image */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: signupImage ? `url(${signupImage})` : "none",
          }}
        ></div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          <form onSubmit={handleSubmit}>
            {/* Email or Phone Number Field */}
            <div className="mb-4">
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Email or Phone Number"
                className="w-full p-3 border b border-gray-300 focus:outline-none focus:border-black"
                disabled={isLoading}
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailOrPhone}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-black"
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Log in Button and Forgot Password Link */}
            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                className="bg-red-500 text-white py-3 px-8 rounded hover:bg-red-600 transition disabled:bg-red-300"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
              <Link
                to="/forgot-password"
                className="text-red-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Log in with Google Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded mb-4 hover:bg-gray-100 transition"
              disabled={isLoading}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              Log in with Google
            </button>

            {/* Don't have an account? Create an Account */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/account" className="text-black underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
