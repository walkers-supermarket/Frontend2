import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const CustomInput = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  togglePasswordVisibility,
  required = false,
}) => {
  return (
    <div className="relative">
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-[50%] p-3 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
          type === "password" ? "pr-12" : ""
        }`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-80 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          {showPassword ? (
            <AiOutlineEye className="h-5 w-5" />
          ) : (
            <AiOutlineEyeInvisible className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
