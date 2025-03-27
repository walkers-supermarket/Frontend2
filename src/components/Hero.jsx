import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import CarouselImage from "../assets/images/CarouselImage.svg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    { title: "Local Farm Fresh", buttonText: "Discover", bgColor: "bg-black" },
    { title: "Spring Specials", buttonText: "See Offers", bgColor: "bg-black" },
    {
      title: "Seasonal Picks",
      buttonText: "Shop Seasonal",
      bgColor: "bg-black",
    },
  ];

  const menuItems = [
    { name: "Kitchen staples", path: "/kitchen-staples", hasSubmenu: false },
    { name: "Best of British", path: "/best-of-british", hasSubmenu: false },
    {
      name: "Meat & Fish",
      hasSubmenu: true,
      subItems: [
        { name: "Beef", path: "/meat-fish/beef" },
        { name: "Chicken", path: "/meat-fish/chicken" },
      ],
    },
    {
      name: "Fridge & freezer",
      hasSubmenu: true,
      subItems: [
        { name: "Dairy", path: "/fridge-freezer/dairy" },
        { name: "Frozen Foods", path: "/fridge-freezer/frozen" },
      ],
    },
    {
      name: "Assortments",
      hasSubmenu: true,
      subItems: [{ name: "Gift Packs", path: "/assortments/gift-packs" }],
    },
    {
      name: "UK Farmers",
      hasSubmenu: true,
      subItems: [{ name: "Organic honey", path: "/uk-farmers" }],
    },
    {
      name: "Fruits & vegetables",
      hasSubmenu: true,
      subItems: [
        { name: "Apples", path: "/fruits-vegetables/apples" },
        { name: "Carrots", path: "/fruits-vegetables/carrots" },
      ],
    },
    {
      name: "Super foods",
      hasSubmenu: true,
      subItems: [
        { name: "Oats", path: "/super-foods/oats" },
        { name: "Chia", path: "/super-foods/chia" },
        { name: "Quinoa", path: "/super-foods/chia" },
      ],
    },
    {
      name: "Seasonal fruits and veg",
      hasSubmenu: true,
      subItems: [
        { name: "Mangos", path: "/seasonal-fruits-veg/mangoes" },
        { name: "Okra", path: "/seasonal-fruits-veg/okra" },
      ],
    },
    {
      name: "Snacks",
      hasSubmenu: true,
      subItems: [
        { name: "Chips", path: "/snacks/chips" },
        { name: "Nuts", path: "/snacks/nuts" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleDotClick = (dotIndex) => {
    setActiveSlide(dotIndex);
  };

  return (
    <div className="flex w-full">
      <div className="w-[20%] ml-[6%] bg-white p-4 border-gray-200 border-r h-[500px] overflow-auto">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => item.hasSubmenu && toggleDropdown(index)}
              >
                <Link
                  to={item.path || "#"}
                  className="text-gray-800 font-medium hover:underline"
                >
                  {item.name}
                </Link>
                {item.hasSubmenu &&
                  (openDropdown === index ? (
                    <ChevronDownIcon
                      width={16}
                      height={16}
                      className="text-gray-500"
                    />
                  ) : (
                    <ChevronRightIcon
                      width={16}
                      height={16}
                      className="text-gray-500"
                    />
                  ))}
              </div>
              {item.hasSubmenu && openDropdown === index && (
                <ul className="ml-4 mt-2 space-y-2 border-l border-gray-300 pl-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="text-gray-700 hover:underline"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 relative">
        <div className="relative h-[68%] max-w-[80%] mt-[5%] mx-[10%] my-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full h-full ${slide.bgColor}`}
              >
                <div className="relative h-full overflow-hidden ">
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
                          className="h-full w-[84%]  ml-[25%] "
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
