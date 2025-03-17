import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.svg";
import React from "react";

const Navbar = () => {
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
        <Link to="/">
          <img src={logo} alt="logo" className="w-[233px] h-[81px]  ml-[5%] " />
        </Link>
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
          <Link to="/account" className="icon account text-black">
            <UserIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
