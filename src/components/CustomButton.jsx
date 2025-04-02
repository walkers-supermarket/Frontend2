import React from "react";
import { FcGoogle } from "react-icons/fc";

const CustomButton = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  isGoogleButton = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 rounded transition ${
        isGoogleButton
          ? "border border-gray-300 hover:bg-gray-100"
          : "bg-[#DB4444] text-white hover:bg-red-700"
      } ${className}`}
      disabled={disabled}
    >
      {isGoogleButton && <FcGoogle className="h-5 w-5" />}
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
