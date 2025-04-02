import React, { useState } from "react";
import signupImage from "../assets/images/signupImage.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiSignup } from "../services/auth";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const payload = { name, email, password };

      const response = await apiSignup(payload);
      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: "You can now log in!",
      });
      navigate("/login");
    } catch (error) {
      console.log("Sign Up Error:", error.message, error.response?.data);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: error.message || "Please check your details and try again.",
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

      const payload = {
        role: "user",
        name: user.displayName,
        email: user.email,
        password: "google-authenticated-user",
      };
      await apiSignup(payload);

      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: `Welcome, ${user.displayName}!`,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log("Google Sign Up Error:", error.message);
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
            <CustomInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <CustomInput
              type="text"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              required
            />
          </div>
          <div>
            <CustomInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
          <div>
            <CustomButton
              type="submit"
              disabled={loading}
              className="w-[50%] p-3"
            >
              {loading ? "Loading..." : "Create Account"}
            </CustomButton>
          </div>
          <div>
            <CustomButton
              type="button"
              onClick={handleGoogleSignUp}
              disabled={loading}
              isGoogleButton
              className="w-[50%] p-3"
            >
              {loading ? "Loading..." : "Sign up with Google"}
            </CustomButton>
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
