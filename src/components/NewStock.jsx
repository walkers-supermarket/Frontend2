import React from "react";
import ProductCard from "./ProductCard";
import categoryImage from "../assets/images/categoryImage.svg"; 

const NewStock = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: categoryImage,
      title: "fresh peppers 500g",
      price: "120",
      originalPrice: "150",
      rating: 5,
      reviews: 42,
    },
    {
      id: 2,
      image: categoryImage,
      title: "organic rice 2kg",
      price: "480",
      originalPrice: "520",
      rating: 4,
      reviews: 38,
    },
    {
      id: 3,
      image: categoryImage,
      title: "premium olive oil 750ml",
      price: "350",
      originalPrice: "400",
      rating: 5,
      reviews: 53,
    },
    {
      id: 4,
      image: categoryImage,
      title: "fresh tomatoes 1kg",
      price: "180",
      rating: 4,
      reviews: 29,
    },
  ];

  return (
    <div className="py-4">
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
          {products.map((product) => (
            <div key={product.id} className="min-w-64">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewStock;
