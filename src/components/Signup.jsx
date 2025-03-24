import React, { useState } from "react";
import signupImage from "../assets/images/signupImage.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { apiSignup } from "../services/auth";
// Import Firebase Auth functions
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState(""); // Add password state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !emailOrPhone || !password) {
      Swal.fire({
        icon: "warning",
        title: "Insert your details",
        text: "Please insert your details to proceed.",
      });
      return;
    }
    try {
      setLoading(true);
       const formData = new FormData(e.target);
       const name = formData.get("Name");
      const emailOrPhone = formData.get("emailOrPhone");
       const password = formData.get("password");

      const payload = { name, emailOrPhone, password };
      const response = await apiSignup(payload);
      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: "You can now log in!",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: "Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Optionally, send the user data to your backend
      const payload = {
        name: user.displayName,
        emailOrPhone: user.email,
        // You might not need a password for Google Sign-Up
      };
      await apiSignup(payload); // Adjust this based on your backend requirements

      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: `Welcome, ${user.displayName}!`,
      });

      navigate("/dashboard"); // Redirect to dashboard or another page
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Google Sign Up Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
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

      {/* Right Section: Registration Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
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
          <div className="relative">
            <input
              type={showpassword ? "text" : "password"}
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
              className="absolute right-0 top-3 text-gray-600"
            >
              {showpassword ? "Hide" : "Show"}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-[50%] bg-[#DB4444] text-white p-3 rounded hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-[50%] flex items-center justify-center space-x-2 border border-gray-300 p-3 rounded hover:bg-gray-100 transition"
              disabled={loading}
            >
              <FcGoogle className="h-5 w-5" />
              <span>{loading ? "Loading..." : "Sign up with Google"}</span>
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

export default Signup;
