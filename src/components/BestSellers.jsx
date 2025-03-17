
import React from "react";
import ProductCard from "./ProductCard";
import categoryImage from "../assets/images/categoryImage.svg"; 

const BestSellers = () => {
  // Sample product data based on the image
  const products = [
    {
      id: 1,
      image: categoryImage,
      title: "corn floor",
      price: "260",
      originalPrice: "360",
      rating: 5,
      reviews: 65,
      hasAddToCart: true,
    },
    {
      id: 2,
      image: categoryImage,
      title: "goat meat 3kgs",
      price: "960",
      originalPrice: "1160",
      rating: 5,
      reviews: 65,
    },
    {
      id: 3,
      image: categoryImage,
      title: "goat meat 3kgs",
      price: "160",
      originalPrice: "170",
      rating: 5,
      reviews: 65,
    },
    {
      id: 4,
      image: categoryImage,
      title: "goat meat 3kgs",
      price: "360",
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="py-4">
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-2" style={{ minWidth: "max-content" }}>
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

export default BestSellers;
