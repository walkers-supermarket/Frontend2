import React, { useState } from "react";
import { Link } from "react-router-dom";
import visa from "../assets/images/visa.svg";
import mastercard from "../assets/images/mastercard.svg";
import Bkash from "../assets/images/Bkash.svg";
import paypal from "../assets/images/paypal.svg";
import categoryImage from "../assets/images/categoryImage.svg";

const Checkout = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    saveInfo: false,
    couponCode: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add my form submission logic here (e.g., API call)
  };

  // Cart items
  const cartItems = [
    {
      id: "brown-sugar-1",
      name: "Brown Sugar",
      price: 650,
      quantity: 1,
      image: categoryImage,
    },
    {
      id: "brown-sugar-2",
      name: "Brown Sugar",
      price: 1100,
      quantity: 1,
      image: categoryImage,
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping as per the image
  const total = subtotal + shipping;

  return (
    <div className="py-12 mb-[5%] bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
        
          <Link to="/account" className="hover:underline">
            My Account
          </Link>{" "}
          /{" "}
          <Link to="/account" className="hover:underline">
            Product
          </Link>{" "}
          /{" "}
         
          <Link to="/cart" className="hover:underline">
            View Cart
          </Link>{" "}
          / <span className="text-black">Checkout</span>
        </nav>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Billing Details Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Billing Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {/* Company Name */}
              <div>
                <label className="block text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Street Address */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {/* Apartment, floor, etc. (optional) */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Town/City */}
              <div>
                <label className="block text-gray-700 mb-2">Town/City *</label>
                <input
                  type="text"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-[80%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {/* Save Information Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="mr-2 accent-[#DB4444] w-5 h-5"
                />
                <label className="text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className=" mt-[7%] md:w-1/2">
          <div className="space-y-4">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-[80%] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-4 rounded"
                  />
                  <span className="text-gray-800">{item.name}</span>
                </div>
                <span className="text-gray-800">${item.price}</span>
              </div>
            ))}
            {/* Subtotal */}
            <div className="w-[80%] flex justify-between border-t border-gray-200 pt-4">
              <span className="text-gray-800">Subtotal:</span>
              <span className="text-gray-800">${subtotal}</span>
            </div>
            {/* Shipping */}
            <div className="w-[80%] flex justify-between">
              <span className="text-gray-800">Shipping:</span>
              <span className="text-gray-800">Free</span>
            </div>
            {/* Total */}
            <div className="w-[80%] flex justify-between border-t border-gray-200 pt-4">
              <span className="text-gray-800 font-semibold">Total:</span>
              <span className="text-gray-800 font-semibold">${total}</span>
            </div>
            {/* Payment Options */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  className="mr-2 accent-[#1d1818] w-5 h-5"
                  defaultChecked
                />
                <span className="text-gray-800">Bank</span>
                <div className="ml-52 flex gap-4">
                  <img src={Bkash} alt="Visa" className="w-6 h-6" />
                  <img src={visa} alt="Visa" className=" w-8 h-6" />
                  <img
                    src={mastercard}
                    alt="Mastercard"
                    className="  w-8 h-6"
                  />
                  <img src={paypal} alt="Paypal" className="  w-8 h-6" />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  className="mr-2 accent-[#1d1818] w-5 h-5"
                />
                <span className="text-gray-800">Cash on delivery</span>
              </div>
            </div>
            {/* Coupon Code */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}
                placeholder="Coupon Code"
                className="w-[50%] p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                className="bg-[#DB4444] w-[40%] text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Apply Coupon
              </button>
            </div>
            {/* Place Order Button */}
            <div className="mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[30%] bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
