// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.svg";
import React from "react";

const Navbar2 = () => {
  const customMenu = [
    { id: "home", title: "Home", url: "/" },
    { id: "contact", title: "Contact", url: "/contact" },
    { id: "about", title: "About", url: "/about" },
    { id: "signup", title: "Sign Up", url: "/account" },
  ];

  return (
    <div className="header-wrapper">
      <div className="bg-black text-white flex justify-between items-center px-4 py-2 text-sm">
        <span className="promo-message flex-1 text-center">
          Summer Sale For All Fruits And Free Express Delivery - OFF 50%!{" "}
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
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px] h-[50px] ml-[5%]" />
        </Link>
        <nav className="flex gap-8">
          {customMenu.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="header-menu-item text-base font-medium text-black hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="header-ctas flex items-center gap-6">
          <div className="search-bar relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-sm w-[200px] h-[40px] border-none outline-none pl-4 pr-10 rounded"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-3" />
          </div>
          <Link to="/favorites" className="icon favorites text-black">
            <HeartIcon className="w-6 h-6" />
          </Link>
          <Link to="/cart" className="icon cart text-black relative">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
          <Link to="/account" className="icon account text-black">
            <UserIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
