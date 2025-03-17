
import React from "react";
import categoryImage from "../assets/images/categoryImage.svg"; 

const ProductCard = ({
  image = categoryImage,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  onClick,
}) => (
  <div className="rounded-lg w-48 h-64 p-4 flex flex-col items-center text-center bg-gray-50 relative">
    {/* Wishlist and Quick View icons */}
    <div className="grid grid-cols-1 gap-1 absolute top-4 right-4">
      <button className="p-1 bg-white rounded-full">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <button className="p-1 bg-white rounded-full">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    </div>

    {/* Product Image */}
    <img src={image} alt={title} className="w-24 h-32 object-contain mb-2" />

    {/* Add to Cart Button */}
    {onClick ? (
      <button
        onClick={onClick}
        className="bg-black text-white px-3 py-1 rounded mb-1 text-sm"
      >
        Add To Cart
      </button>
    ) : null}

    {/* Product Title */}
    <p className="text-gray-600 font-bold text-sm">{title}</p>

    {/* Price and Rating */}
    <div className="flex items-center space-x-1">
      <span className="text-red-500 text-sm">${price}</span>
      {originalPrice && (
        <span className="text-gray-400 line-through text-sm">
          ${originalPrice}
        </span>
      )}
      <span className="text-gray-500 text-xs">({reviews})</span>
    </div>

    {/* Rating Stars */}
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

export default ProductCard;
