// src/components/FibreFriday.jsx
import React from "react";
import ProductCard from "./ProductCard";
import categoryImage from "../assets/images/categoryImage.svg";

const FibreFriday = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: categoryImage,
      title: "whole grain pasta 500g",
      price: "180",
      originalPrice: "220",
      rating: 5,
      reviews: 47,
    },
    {
      id: 2,
      image: categoryImage,
      title: "quinoa 1kg",
      price: "420",
      originalPrice: "480",
      rating: 4,
      reviews: 36,
    },
    {
      id: 3,
      image: categoryImage,
      title: "chia seeds 250g",
      price: "190",
      originalPrice: "210",
      rating: 5,
      reviews: 51,
    },
    {
      id: 4,
      image: categoryImage,
      title: "oat bran 750g",
      price: "260",
      rating: 4,
      reviews: 33,
    },
  ];

  return (
    <div className="py-4">
      <div className="pb-4">
        <div className="flex space-x-2" style={{ minWidth: "100%" }}>
          {products.map((product) => (
            <div key={product.id} className="min-w-56">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
                onClick={
                  product.hasAddToCart
                    ? () => alert(`Added ${product.title} to cart`)
                    : null
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FibreFriday;
