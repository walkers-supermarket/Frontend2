// src/components/Favorites.jsx
import React, { useState } from "react";
import BestSellers from "./BestSellers";
import NewStock from "./NewStock";
import FibreFriday from "./FibreFriday";
import rectangle from '../assets/images/rectangle.svg'

const Favorites= () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  return (
    <div className="py-8 mt-[5%] w-[80%] mx-auto">
      {/* Section Title */}
      {/* <h2 className="text-red-500 text-lg font-semibold mb-4">
        Explore our Favourites
      </h2> */}
      <div className="mb-4 flex">
        <div>
          <img src={rectangle} alt="rectangle" className="w-4" />
        </div>
        <span className="text-[#DB4444] px-3 py-1 font-semibold text-md rounded-l">
          Explore our Favourites
        </span>
      </div>

      {/* Container for Tabs and Cards to align them */}
      <div className="flex flex-col items-start">
        {" "}
        {/* Align content to the left */}
        {/* Tabs */}
        <div className="flex justify-start space-x-9  border-gray-200 mb-6">
          {["Best Sellers", "New Stock", "Fibre Friday"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-medium ${
                activeTab === tab
                  ? "text-black border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Render the active tab's component */}
        {activeTab === "Best Sellers" && <BestSellers />}
        {activeTab === "New Stock" && <NewStock />}
        {activeTab === "Fibre Friday" && <FibreFriday />}
      </div>
    </div>
  );
};

export default Favorites;
