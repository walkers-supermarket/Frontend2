import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import categoryImage from "../assets/images/categoryImage.svg";
import giantbread from "../assets/images/giantbread.svg";
import { Link } from "react-router-dom";

const FibreFriday = () => {
  const products = [
    {
      id: 1,
      name: "corn flour",
      currentPrice: 360,
      originalPrice: 390,
      rating: 5,
      reviews: 65,
      image: giantbread,
    },
    {
      id: 2,
      name: "goat meat 3kgs",
      currentPrice: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      image: categoryImage,
    },
    {
      id: 3,
      name: "goat meat 3kgs",
      currentPrice: 1160,
      originalPrice: 1370,
      rating: 5,
      reviews: 65,
      image: categoryImage,
    },
    {
      id: 4,
      name: "goat meat 3kgs",
      currentPrice: 360,
      originalPrice: null,
      rating: 5,
      reviews: 65,
      image: categoryImage,
    },
  ];

  const [quantities, setQuantities] = useState({});

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden w-48"
        >
          <div className="relative bg-gray-50 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mx-auto"
            />
            <div className="absolute top-1 right-1 rounded-full grid grid-rows-2 space-y-1">
              <button
                onClick={() => console.log(`Favorited product ${product.id}`)}
                bg-white
                mr-2
                mt-1
                rounded-full
                p-1
                shadow-sm
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-full bg-white mr-2 mt-1 p-1 shadow-sm text-black"
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
              <button
                onClick={() => console.log(`Viewing product ${product.id}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-full bg-white mr-2 mt-1 p-1 shadow-sm text-black"
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
          </div>

          <div className="p-2">
            <h3 className="text-xs text-gray-700 truncate">{product.name}</h3>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-base font-semibold text-red-500">
                ${product.currentPrice}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center mt-1">
              {[...Array(product.rating)].map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({product.reviews})
              </span>
            </div>
            {/* Moved quantity controls above the button */}
            <div className="mt-2">
              <div className="flex items-center justify-center space-x-14">
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
                className="mt-2 w-full bg-black text-white py-1 text-sm rounded-md hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FibreFriday;
