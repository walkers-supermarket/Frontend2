import React from "react";
// Import the main image
import aboutImage from "../assets/images/aboutImage.svg";
import Services from "../assets/images/Services.svg";
import services1 from "../assets/images/services1.svg";
import services2 from "../assets/images/services2.svg";
import services3 from "../assets/images/services3.svg";
import services4 from "../assets/images/services4.svg";
import services5 from "../assets/images/services5.svg";
import services6 from "../assets/images/services6.svg";

const About = () => {
  return (
    <div className="py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / <span className="text-black">About</span>
        </nav>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
            <br />
            <br />
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Two people shopping with bags"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Statistics Section (Cards) */}
      <div className="mt-[10%] py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Sellers Active */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#DB4444] hover:text-white transition">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <img src={Services} alt="Sellers Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 hover:text-white">
              10.5k
            </h3>
            <p className="text-gray-600 hover:text-white">
              Sellers active our site
            </p>
          </div>

          {/* Card 2: Monthly Product Sale */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#DB4444] hover:text-white transition">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <img src={services2} alt="Sale Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 hover:text-white">
              33k
            </h3>
            <p className="text-gray-600 hover:text-white">
              Monthly Product Sale
            </p>
          </div>

          {/* Card 3: Customers Active */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#DB4444] hover:text-white transition">
            <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
              <img src={services3} alt="Customers Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 hover:text-white">
              45.5k
            </h3>
            <p className="text-gray-600 hover:text-white">
              Customer active in our site
            </p>
          </div>

          {/* Card 4: Annual Gross Sale */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#DB4444] hover:text-white transition">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <img
                src={services4}
                alt="Gross Sale Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 hover:text-white">
              25k
            </h3>
            <p className="text-gray-600 hover:text-white">
              Annual gross sale in our site
            </p>
          </div>
        </div>
      </div>

      {/* Services Section (Free Delivery, Customer Service, Money Back Guarantee) */}
      <div className="py-12 mt-[10%] bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Service 1: Free and Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <img src={services5} alt="Delivery Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-gray-600">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Service 2: 24/7 Customer Service */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img
                src={services6}
                alt="Customer Service Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Service 3: Money Back Guarantee */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img
                src={services1}
                alt="Money Back Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
