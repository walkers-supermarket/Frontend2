import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoryImage from "../assets/images/categoryImage.svg";
import deliveryIcon from "../assets/images/deliveryIcon.svg";
import returnIcon from "../assets/images/returnIcon.svg";
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import rectangle from '../assets/images/rectangle.svg'

const Single = () => {
  // State to manage the selected main image
  const [selectedImage, setSelectedImage] = useState(categoryImage);

  // Array of thumbnail images (using the same placeholder for now)
  const thumbnailImages = [
    categoryImage,
    categoryImage,
    categoryImage,
    categoryImage,
  ];

  // State to manage quantity
  const [quantity, setQuantity] = useState(2);

  // Product details (static for now, can be replaced with API data)
  const product = {
    name: "3kg of Basmati white rice",
    rating: 5,
    reviews: 150,
    stock: "In Stock",
    price: 192.0,
    description:
      "Rice grown easy, high-quality vinyl with 8 channel modes removal. Pressure-sensitive for a secure fit. Perfect for kitchen decor or food-themed customization.",
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  // Related items data (static for now, can be replaced with API data)
  const relatedItems = [
    {
      id: 1,
      name: "white sugar 5kgs",
      originalPrice: 160,
      discountedPrice: 120,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: categoryImage,
    },
    {
      id: 2,
      name: "white sugar 5kgs",
      originalPrice: 160,
      discountedPrice: 96,
      discount: 35,
      rating: 5,
      reviews: 75,
      image: categoryImage,
    },
    {
      id: 3,
      name: "white sugar 5kgs",
      originalPrice: 400,
      discountedPrice: 370,
      discount: 30,
      rating: 5,
      reviews: 99,
      image: categoryImage,
    },
    {
      id: 4,
      name: "white sugar 5kgs",
      originalPrice: 170,
      discountedPrice: 160,
      discount: 30,
      rating: 5,
      reviews: 65,
      image: categoryImage,
    },
  ];

  // Handle thumbnail click to update the main image
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  // Placeholder event handlers for related items
  const handleFavorite = (id) => {
    console.log(`Added product ${id} to favorites`);
    // Add your logic here (e.g., update state or make an API call)
  };

  const handleView = (id) => {
    console.log(`Viewing product ${id}`);
    // Add my logic here (e.g., navigate to product page)
  };

  const handleAddToCart = (id) => {
    console.log(`Added product ${id} to cart`);
    // Add my logic here (e.g., update cart state or make an API call)
  };

  return (
    <div className="py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
          <Link to="/account" className="hover:underline">
            Account
          </Link>{" "}
          /{" "}
          <Link to="/cereals" className="hover:underline">
            Cereals
          </Link>{" "}
          / <span className="text-black">Basmati white</span>
        </nav>
      </div>

      {/* Main Content: Product Layout */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Thumbnail Images */}
        <div className="flex flex-col gap-4 md:w-1/6">
          {thumbnailImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 rounded cursor-pointer"
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>

        {/* Center: Main Image */}
        <div className="md:w-2/5">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="md:w-2/5">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}{" "}
          </h1>

          {/* Rating and Stock */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              ({product.reviews} Reviews)
            </span>
            <span className="text-green-600 ml-2">| {product.stock}</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Size Options */}
          <div className="mb-4 flex items-center gap-4">
            <p className="text-gray-800 font-semibold">Size:</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-[#DB4444] hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector and Buy Now */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 text-gray-600 hover:bg-[#DB4444] hover:text-white transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 text-gray-600 hover:bg-[#DB4444] hover:text-white transition-colors"
              >
                +
              </button>
            </div>
            <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-500 transition-colors">
              Buy Now
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100">
              <FaRegHeart className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Delivery and Return Info */}
          <div className="border border-gray-300 rounded p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-600">
                <img
                  src={deliveryIcon}
                  alt="Delivery Icon"
                  className="w-6 h-6"
                />
              </span>
              <p className="text-gray-800">
                <span className="font-semibold">Free Delivery</span>
                <br />
                <span className="text-sm">
                  Enter your postal code for Delivery Availability
                </span>
              </p>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                <img src={returnIcon} alt="Return Icon" className="w-6 h-6" />
              </span>
              <p className="text-gray-800">
                <span className="font-semibold">Return Delivery</span>
                <br />
                <span className="text-sm">
                  Free 30 Days Delivery Returns. Details
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className=" mt-[5%] max-w-6xl mx-auto px-4 mb-[5%]">
        <div className="mb-4 flex">
          <div>
            <img src={rectangle} alt="rectangle" className="w-4" />
          </div>
          <span className="text-[#DB4444] px-3 py-1 font-semibold text-md rounded-l">
            Related Item
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
          {relatedItems.map((relatedItem) => (
            <div
              key={relatedItem.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-48"
            >
              <div className="relative bg-gray-50 flex items-center justify-center">
                <img
                  src={relatedItem.image}
                  alt={relatedItem.name}
                  className="w-full h-40 object-contain mx-auto"
                />
                <div className="absolute top-1 right-1 rounded-full grid grid-rows-2 space-y-1">
                  <button onClick={() => handleFavorite(relatedItem.id)}>
                    <FaRegHeart className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </button>
                  <button onClick={() => handleView(relatedItem.id)}>
                    <FaEye className="h-4 w-4 text-gray-500 hover:text-blue-500" />
                  </button>
                </div>
              </div>

              <div className="p-2">
                <h3 className="text-xs text-gray-700 truncate">
                  {relatedItem.name}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-base font-semibold text-red-500">
                    ${relatedItem.discountedPrice}{" "}
                    {/* Fixed: Use discountedPrice */}
                  </span>
                  {relatedItem.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ${relatedItem.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center mt-1">
                  {typeof relatedItem.rating === "number" &&
                  relatedItem.rating > 0
                    ? [...Array(relatedItem.rating)].map((_, i) => (
                        <FaStar key={i} className="h-3 w-3 text-yellow-400" />
                      ))
                    : null}
                  <span className="text-xs text-gray-500 ml-1">
                    ({relatedItem.reviews})
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(relatedItem.id)}
                  className="mt-2 w-full bg-black text-white py-1 text-sm rounded-md hover:bg-gray-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Single;
