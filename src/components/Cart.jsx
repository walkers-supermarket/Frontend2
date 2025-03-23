import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoryImage from "../assets/images/categoryImage.svg";

const Cart = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    {
      id: "white-rice-1",
      name: "White Rice",
      price: 550,
      quantity: 1,
      image: categoryImage,
    },
    {
      id: "white-rice-2",
      name: "White Rice",
      price: 550,
      quantity: 2,
      image: categoryImage,
    },
  ]);

  // State for coupon code
  const [couponCode, setCouponCode] = useState("");

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle remove item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle coupon code change
  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  // Handle apply coupon
  const handleApplyCoupon = () => {
    console.log("Coupon applied:", couponCode);
    // Add your coupon logic here (e.g., API call)
  };

  // Handle update cart
  const handleUpdateCart = () => {
    console.log("Cart updated:", cartItems);
    // Add your update cart logic here (e.g., API call)
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping as per the image
  const total = subtotal + shipping;

  return (
    <div className="py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="text-black">Cart</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Cart Table */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-4 text-gray-800 font-semibold border-b border-gray-200 pb-2">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 items-center border-b border-gray-200 py-4"
            >
              {/* Product */}
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 mr-4 rounded"
                />
                <span className="text-sm">{item.name}</span>
              </div>
              {/* Price */}
              <div>${item.price}</div>
              {/* Quantity - Modified to match the image */}
              <div className="relative flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    value={item.quantity.toString().padStart(2, "0")}
                    readOnly
                    className="w-16 h-10 text-center border border-gray-300 rounded"
                  />
                  <div className="absolute right-0 top-0 bottom-0 flex flex-col border-l border-gray-300">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="h-5 w-5 flex items-center justify-center text-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="h-5 w-5 flex items-center justify-center text-xs border-t border-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span>${item.price * item.quantity}</span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Buttons and Totals */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left: Return to Shop, Update Cart, and Coupon */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Link
                to="/shop"
                className="border border-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                Return To Shop
              </Link>
              <button
                onClick={handleUpdateCart}
                className="border border-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                Update Cart
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={handleCouponChange}
                placeholder="Coupon Code"
                className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Right: Cart Totals */}
          <div className="md:w-1/3 border border-gray-300 rounded p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Cart Total
            </h3>
            <div className="space-y-2">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-gray-800">Subtotal:</span>
                <span className="text-gray-800">${subtotal}</span>
              </div>
              {/* Shipping */}
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-800">Shipping:</span>
                <span className="text-gray-800">Free</span>
              </div>
              {/* Total */}
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-800 font-semibold">Total:</span>
                <span className="text-gray-800 font-semibold">${total}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block mt-4 bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
