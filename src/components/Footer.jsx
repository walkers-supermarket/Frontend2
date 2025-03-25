import React from "react";
// Import social media icons and arrow icon from react-icons
import { FaInstagram, FaTiktok, FaFacebook, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className="bg-black text-white py-8 relative">
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
          <p className="text-sm mb-2">
            <a
              href="mailto:ketema.w@walkerssupermarket.co.uk"
              className="text-white hover:text-gray-400 transition"
              aria-label="Email us at ketema.w@walkerssupermarket.co.uk"
            >
              ketema.w@walkerssupermarket.co.uk
            </a>
          </p>
        </div>

        {/* Column 3: My Account */}
        <div>
          <h3 className="text-lg font-bold mb-4">My Account</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Login page"
              >
                Login
              </Link>{" "}
              /{" "}
              <Link
                to="/signup"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Register page"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Cart page"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Wishlist page"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Shop page"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to About page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Privacy Policy page"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-use"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to Terms of Use page"
              >
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-white hover:text-gray-400 transition"
                aria-label="Go to FAQ page"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/walkerssupermarket?igsh=MTRjaWk2Z2xnYzJvMw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
          aria-label="Visit our Instagram profile"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.tiktok.com/@walkerssupermarket?_t=ZN-8uycjni5Hs6&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
          aria-label="Visit our TikTok profile"
        >
          <FaTiktok className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/share/16ArmvjNp5/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
          aria-label="Visit our Facebook profile"
        >
          <FaFacebook className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-6xl mx-auto px-4 mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © Copyright Walker Supermarket 2025. All rights reserved
      </div>

      {/* Scroll to Top Arrow */}
      <div className="absolute right-4 bottom-4">
        <button
          onClick={scrollToTop}
          className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
