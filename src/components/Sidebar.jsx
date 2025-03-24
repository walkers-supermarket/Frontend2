import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white p-6 border-r border-gray-200">
      {/* MANAGE MY ACCOUNT Section */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Manage My Account
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard"
                ? "text-red-500"
                : ""
            }`}
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addressbook"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard/addressbook"
                ? "text-red-500"
                : ""
            }`}
          >
            Address Book
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/payment-options"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard/payment-options"
                ? "text-red-500"
                : ""
            }`}
          >
            My Payment Options
          </Link>
        </li>
      </ul>

      {/* My Orders Section */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
        My Orders
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard/returns"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard/returns" ? "text-red-500" : ""
            }`}
          >
            My Returns
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/cancellations"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard/cancellations"
                ? "text-red-500"
                : ""
            }`}
          >
            My Cancellations
          </Link>
        </li>
      </ul>

      {/* My WishList Section */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
        My WishList
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard/wishlist"
            className={`block p-2 text-gray-600 hover:text-red-500 rounded transition-colors duration-200 ${
              location.pathname === "/dashboard/wishlist" ? "text-red-500" : ""
            }`}
          >
            My WishList
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
