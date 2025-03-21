import React from "react";
// Import social media icons from react-icons
import { FaInstagram, FaSnapchat, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Exclusive Subscribe */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <h4 className="text-base font-semibold mb-2">Subscribe</h4>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-gray-400 p-2 w-full outline-none"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-r hover:bg-gray-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm mb-2">The company physical address</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Column 3: My Account */}
        <div>
          <h3 className="text-lg font-bold mb-4">My Account</h3>
          <ul className="text-sm space-y-2">
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="text-sm space-y-2">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center space-x-6">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          <FaInstagram className="h-6 w-6" />
        </a>

        {/* Snapchat Icon */}
        <a
          href="https://www.snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          <FaSnapchat className="h-6 w-6" />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          <FaFacebook className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-6xl mx-auto px-4 mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © Copyright Walker Supermarket 2025. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
