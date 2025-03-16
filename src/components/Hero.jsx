import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import CarouselImage from "../assets/images/CarouselImage.svg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Up to 10% off Voucher",
      buttonText: "Shop Now",
      bgColor: "bg-black",
    },
    {
      title: "Fresh Organic Produce",
      buttonText: "Browse Now",
      bgColor: "bg-black",
    },
    {
      title: "Local Farm Fresh",
      buttonText: "Discover",
      bgColor: "bg-black",
    },
    {
      title: "Spring Specials",
      buttonText: "See Offers",
      bgColor: "bg-black",
    },
    {
      title: "Seasonal Picks",
      buttonText: "Shop Seasonal",
      bgColor: "bg-black",
    },
  ];

  const menuItems = [
    { name: "kitchen staples", hasSubmenu: false },
    { name: "Best of British", hasSubmenu: false },
    { name: "Meat & Fish", hasSubmenu: true },
    { name: "Fridge & freezer", hasSubmenu: true },
    { name: "Assortments", hasSubmenu: true },
    { name: "Uk Farmers", hasSubmenu: true },
    { name: "Fruits & vegetables", hasSubmenu: true },
    { name: "Super foods", hasSubmenu: true },
    { name: "Seasonal fruits and veg", hasSubmenu: true },
    { name: "Snacks", hasSubmenu: true },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex w-full">
      <div className="w-1/4 bg-white p-4 border-r">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              {item.hasSubmenu && (
                <ChevronRightIcon
                  width={16}
                  height={16}
                  className="text-gray-500"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 relative">
        <div className="relative h-96 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full h-full ${slide.bgColor}`}
              >
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-full w-full relative">
                      <div className="absolute top-1/4 left-16 text-white z-10">
                        <h1 className="text-5xl font-bold mb-2">
                          {slide.title}
                        </h1>
                        <Link
                          to="/shop"
                          className="mt-8 text-white flex items-center hover:underline"
                        >
                          {slide.buttonText}
                          <ChevronRightIcon
                            width={16}
                            height={16}
                            className="ml-2"
                          />
                        </Link>
                      </div>
                      <div className="absolute right-0 bottom-0">
                        <img
                          src={CarouselImage}
                          alt="Groceries in paper bag"
                          className="h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className={`w-3 h-3 rounded-full ${
                  activeSlide === dotIndex ? "bg-red-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
