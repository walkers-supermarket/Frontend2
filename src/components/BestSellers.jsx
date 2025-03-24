// src/components/BestSellers.jsx
import React from "react";
import { StarIcon, HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import categoryImage from "../assets/images/categoryImage.svg";
import giantbread from "../assets/images/giantbread.svg";

const BestSellers = () => {
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

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  const handleFavorite = (productId) => {
    console.log(`Favorited product ${productId}`);
  };

  const handleView = (productId) => {
    console.log(`Viewing product ${productId}`);
  };

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

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
              <button onClick={() => handleFavorite(product.id)}>
                <HeartIcon className="h-4 w-4 text-gray-500 hover:text-red-500" />
              </button>
              <button onClick={() => handleView(product.id)}>
                <EyeIcon className="h-4 w-4 text-gray-500 hover:text-blue-500" />
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
              {typeof product.rating === "number" && product.rating > 0
                ? [...Array(product.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
                  ))
                : null}
              <span className="text-xs text-gray-500 ml-1">
                ({product.reviews})
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="mt-2 w-full bg-black text-white py-1 text-sm rounded-md hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellers;
