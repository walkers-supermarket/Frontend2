import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / <span className="text-black">Contact</span>
        </nav>
      </div>

      {/* Main Content: Two Columns */}
          <div className="max-w-6xl  mb-[7%] mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Contact Information */}
        <div className="md:w-1/3">
          {/* Call To Us Section */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center mr-3">
                <FaPhoneAlt className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Call To Us
              </h3>
            </div>
            <p className="text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 mt-2">Phone: +880161112222</p>
          </div>

          {/* Write To Us Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center mr-3">
                <FaEnvelope className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Write To Us
              </h3>
            </div>
            <p className="text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 mt-2">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {/* Your Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
                <span className="absolute left-24 top-1/2 transform -translate-y-1/2 text-[#db4444]">
                  *
                </span>
              </div>
              {/* Your Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
                <span className="absolute left-23 top-1/2 transform -translate-y-1/2 text-[#db4444]">
                  *
                </span>
              </div>
              {/* Your Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full p-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
                <span className="absolute left-24 top-1/2 transform -translate-y-1/2 text-[#db4444]">
                  *
                </span>
              </div>
            </div>
            {/* Your Message */}
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 bg-white border border-gray-300 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              />
            </div>
            {/* Send Message Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
