
import React from "react";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-4">Get 10% off your order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="bg-purple-600 p-2 rounded-r">➔</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>111 Bijoy sarani, Dhaka, DH 1515</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8 text-gray-400">
        © Copyright Walter Supermarket 2023. All rights reserved.
      </div>

      {/* Scroll to Top Arrow */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
