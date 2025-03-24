import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
// Import dropdown icons
import user from "../assets/images/user.svg";
import myOrderIcon from "../assets/images/myOrderIcon.svg";
import myCancellationsIcon from "../assets/images/myCancellationsIcon.svg";
import myReviewsIcon from "../assets/images/myReviewsIcon.svg";
import logoutIcon from "../assets/images/logoutIcon.svg";

const Navbar2 = () => {
  const customMenu = [
    { id: "home", title: "Home", url: "/" },
    { id: "contact", title: "Contact", url: "/contact" },
    { id: "about", title: "About", url: "/about" },
    { id: "signup", title: "Sign Up", url: "/signup" },
  ];

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Dropdown menu items with icons
  const dropdownItems = [
    {
      id: "manage-account",
      title: "Manage My Account",
      url: "/dashboard",
      icon: user,
    },
    { id: "my-order", title: "My Order", url: "/orders", icon: myOrderIcon },
    {
      id: "my-cancellations",
      title: "My Cancellations",
      url: "/dashboard/cancellations",
      icon: myCancellationsIcon,
    },
    {
      id: "my-reviews",
      title: "My Reviews",
      url: "/reviews",
      icon: myReviewsIcon,
    },
    { id: "logout", title: "Logout", url: "/logout", icon: logoutIcon },
  ];

  return (
    <div className="header-wrapper">
      <div className="bg-black text-white flex justify-between items-center px-4 py-2 text-sm">
        <span className="promo-message flex-1 text-center">
          Summer Sale For Vegetables And Free Express Delivery - OFF 50%!{" "}
          <Link
            to="/collections"
            className="!text-white underline ml-1 bg-black p-1"
          >
            ShopNow
          </Link>
        </span>
        <div className="language-selector">
          <select
            defaultValue="English"
            className="bg-black text-white border-none focus:outline-none"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
      <header className="header flex justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="flex gap-6">
          {customMenu.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="header-menu-item text-sm font-semibold hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="header-ctas flex items-center gap-4">
          <div className="search-bar relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] text-sm w-[299px] h-[38px] border-none outline-none pl-3 pr-10 placeholder-small"
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-black absolute right-2" />
          </div>
          <Link to="/favorites" className="icon favorites text-black">
            <HeartIcon className="w-6 h-6" />
          </Link>
          <Link to="/cart" className="icon cart text-black relative">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </Link>
          {/* User Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="icon account text-black focus:outline-none"
            >
              <UserIcon className="w-6 h-6" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#3D3C3A] text-white rounded-lg shadow-lg z-10">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="flex text-sm items-center px-4 py-2 hover:bg-gray-600 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-5 h-5 mr-2 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        className="w-5 h-5"
                      />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
