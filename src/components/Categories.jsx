
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import categoryImage from "../assets/images/categoryImage.svg";
import giantbread from "../assets/images/giantbread.svg";
import rectangle from "../assets/images/rectangle.svg";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { name: "Meats", image: giantbread },
    { name: "Dairy", image: categoryImage },
    { name: "Sea Food", image: categoryImage }, 
    { name: "Breakfast Foods", image: categoryImage },
    { name: "Pork", image: categoryImage },
    { name: "Fruits", image: categoryImage },
    { name: "Vegetables", image: categoryImage },
  ];

  const visibleCategories = 5; // Number of categories visible at once
  const totalCategories = categories.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= totalCategories - visibleCategories + 1
          ? 0
          : prevIndex + 1
      );
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [totalCategories, visibleCategories]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCategories - visibleCategories : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalCategories - visibleCategories + 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleCategoryClick = (categoryName) => {
    console.log(
      `Clicked on ${categoryName} - Add navigation logic here (e.g., Link to /category/${categoryName})`
    );
    // Example: <Link to={`/category/${categoryName.toLowerCase()}`}> logic can be added
  };

  return (
    <section className="py-12 border-b mt-[-7%] border-gray-200 w-[80%] mx-auto my-auto bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Label */}
        <div className="mb-4 flex">
          <div>
            <img src={rectangle} alt="rectangle" className="w-4" />
          </div>
          <span className="text-[#DB4444] px-3 py-1 font-semibold text-md rounded-l">
            Categories
          </span>
        </div>

        {/* Browse By Category Header and Arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Browse By Category
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCategories)
              }%)`,
              width: `${(totalCategories / visibleCategories) * 100}%`,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/5 px-1"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div
                  className={`w-[60%] h-40 border rounded-lg flex flex-col items-center justify-center cursor-pointer bg-white text-gray-800 border-gray-200 hover:bg-[#DB4444] hover:text-white transition-colors duration-300`}
                >
                  <img
                    src={category.image}
                    alt={`${category.name} category`}
                    className="w-18 h-28 object-contain mb-1"
                  />
                  <p className="text-center text-base font-medium">
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
