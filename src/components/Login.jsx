import React, { useState } from "react";
import signupImage from "../assets/images/signupImage.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
// Import Firebase Auth functions
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { apiLogin } from "../services/auth";
// Import eye icons from Heroicons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState(""); // Add password state for controlled input
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      Swal.fire({
        icon: "warning",
        title: "Insert your details",
        text: "Please insert your email/phone and password to proceed.",
      });
      return;
    }
    try {
      setLoading(true);
      const payload = { emailOrPhone, password };
      const response = await apiLogin(payload);
      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Optionally, send the user data to your backend for login
      // For now, we'll just show a success message
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome, ${user.displayName}!`,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
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

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email or Phone Number Input */}
          <div>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password Input with Show/Hide Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-94 top-1/2 transform -translate-y-1/2 mr-3 text-gray-600"
            >
              {showPassword ? (
                <AiOutlineEye className="h-5 w-5" />
              ) : (
                <AiOutlineEyeInvisible className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Log In Button and Forget Password Link */}
          <div className="w-[50%] flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Log In"}
            </button>
            <a href="/forgot-password" className="text-red-600 hover:underline">
              Forget Password?
            </a>
          </div>

          {/* Google Sign-In Button */}
          <div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-[50%] flex items-center justify-center space-x-2 border border-gray-300 p-3 rounded hover:bg-gray-100 transition"
              disabled={loading}
            >
              <FcGoogle className="h-5 w-5" />
              <span>{loading ? "Loading..." : "Log in with Google"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
