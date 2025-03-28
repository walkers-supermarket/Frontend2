import React, { useState } from "react";
import categoryImage from "../assets/images/categoryImage.svg";
import saveAndShop from "../assets/images/saveAndShop.svg";
import rectangle from "../assets/images/rectangle.svg";

const ShopAndSave = () => {
  // Define exactly 8 cards
  const products = [
    {
      id: 1,
      image: saveAndShop,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "",
      rating: 4.5,
      reviews: 65,
      new: false,
      colors: [],
    },
    {
      id: 2,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "$350",
      rating: 4.0,
      reviews: 65,
      new: true,
      colors: [],
    },
    {
      id: 3,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "",
      rating: 4.5,
      reviews: 65,
      new: false,
      colors: [],
    },
    {
      id: 4,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "",
      rating: 4.5,
      reviews: 140,
      new: false,
      colors: [],
    },
    {
      id: 5,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "$350",
      rating: 4.5,
      reviews: 65,
      new: true,
      colors: [],
    },
    {
      id: 6,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "$350",
      rating: 4.0,
      reviews: 65,
      new: false,
      colors: [],
    },
    {
      id: 7,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "",
      rating: 4.5,
      reviews: 65,
      new: true,
      colors: [
        { color: "red", selected: true },
        { color: "black", selected: false },
      ],
    },
    {
      id: 8,
      image: categoryImage,
      name: "great meat 5kgs",
      originalPrice: "$500",
      discountedPrice: "$350",
      rating: 4.5,
      reviews: 65,
      new: false,
      colors: [],
    },
  ];

  // State for navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4; // Number of cards to show at a time (md and above)

  // State for quantities
  const [quantities, setQuantities] = useState({});

  // Navigation handlers with looping
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - cardsPerPage
        : prevIndex - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - cardsPerPage ? 0 : prevIndex + cardsPerPage
    );
  };

  // Quantity handlers
  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };

  const handleAddToCart = (productId) => {
    console.log(
      `Added product ${productId} to cart with quantity ${
        quantities[productId] || 1
      }`
    );
  };

  // Calculate the number of pages (2 pages with 4 cards each)
  const totalPages = Math.ceil(products.length / cardsPerPage); // 8 cards / 4 cards per page = 2 pages
  const currentPage = Math.floor(currentIndex / cardsPerPage) % totalPages;

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-amber-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-amber-400">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto mt-[5%] px-4 py-8">
      {/* Header with red notice */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="mb-4 flex">
            <div>
              <img src={rectangle} alt="rectangle" className="w-4" />
            </div>
            <span className="text-[#DB4444] px-3 py-1 font-semibold text-md rounded-l">
              Special is on offer this week
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">Shop & Save Today</h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="border rounded-full p-2 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="border rounded-full p-2 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product grid with navigation */}
      <div className="overflow-hidden">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="p-2 rounded relative">
              {/* Wishlist and quick view buttons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className="bg-white mr-2 mt-1 rounded-full p-1 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="bg-white mr-2 mt-1 rounded-full p-1 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>

              {/* New badge */}
              {product.new && (
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  NEW
                </div>
              )}

              {/* Product image */}
              <div className="flex justify-center mb-2 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain"
                />
              </div>

              {/* Product details */}
              <div>
                <h3 className="text-sm text-gray-600 mb-1">{product.name}</h3>
                <div className="flex items-center mb-1">
                  {product.discountedPrice && (
                    <span className="text-gray-500 line-through text-sm mr-2">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-base font-semibold text-red-500">
                    {product.discountedPrice || product.originalPrice}
                  </span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                {/* Quantity controls and Add to Cart button */}
                <div className="mt-2">
                  <div className="flex items-center justify-center space-x-24">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="mt-2 w-full bg-black text-white py-1 text-sm rounded hover:bg-gray-800"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots (moved below cards) */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentPage ? "bg-red-500" : "bg-black"
            }`}
          ></div>
        ))}
      </div>

      {/* View all button */}
      <div className="flex justify-center mt-4">
        <button className="bg-red-600 text-white px-8 py-2 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ShopAndSave;
