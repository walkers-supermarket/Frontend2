import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "MD",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United States",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add my form submission logic here (e.g., API call)
  };

  // Sidebar navigation items
  const sidebarItems = [
    {
      id: "manage-account",
      title: "Manage My Account",
      subItems: [
        { id: "my-profile", title: "My Profile", url: "/account" },
        { id: "address-book", title: "Address Book", url: "/address-book" },
        {
          id: "payment-options",
          title: "My Payment Options",
          url: "/payment-options",
        },
      ],
    },
    {
      id: "my-orders",
      title: "My Orders",
      subItems: [
        { id: "my-returns", title: "My Returns", url: "/returns" },
        {
          id: "my-cancellations",
          title: "My Cancellations",
          url: "/cancellations",
        },
      ],
    },
    { id: "my-wishlist", title: "My Wishlist", subItems: [], url: "/wishlist" },
  ];

  return (
    <div className="py-12 bg-white">
      {/* Breadcrumb Navigation and Welcome Message */}
      <div className="max-w-6xl mx-auto px-4 mb-8 flex justify-between items-center">
        <nav className="text-gray-500 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="text-black">My Account</span>
        </nav>
        <p className="text-red-500 font-medium">
          Welcome! <span className="text-black">MD Rimel</span>
        </p>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Sidebar */}
        <div className="md:w-1/4">
          {sidebarItems.map((section) => (
            <div key={section.id} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {section.title}
              </h3>
              {section.subItems && section.subItems.length > 0 ? (
                <ul className="space-y-2">
                  {section.subItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.url}
                        className={`text-gray-600 hover:text-red-500 ${
                          item.id === "my-profile" ? "text-grey-600" : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <Link
                  to={section.url}
                  className="text-gray-600 hover:text-red-500"
                >
                  {section.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Edit Profile Form */}
        <div className="md:w-3/4">
          <h2 className="text-2xl font-semibold text-[] mb-6">
            Edit Your Profile
          </h2>
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white shadow-md rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Address */}
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Password Changes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Password Changes
              </h3>
              <div className="space-y-4">
                {/* Current Password */}
                <div>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Current Password"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                </div>
                {/* New Password */}
                <div>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                </div>
                {/* Confirm New Password */}
                <div>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    placeholder="Confirm New Password"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="text-gray-600 hover:text-red-500"
                onClick={() =>
                  setFormData({
                    firstName: "MD",
                    lastName: "Rimel",
                    email: "rimel111@gmail.com",
                    address: "Kingston, 5236, United States",
                    currentPassword: "",
                    newPassword: "",
                    confirmNewPassword: "",
                  })
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
