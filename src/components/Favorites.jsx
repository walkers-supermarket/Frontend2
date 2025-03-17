import React, { useState } from "react";
import BestSellers from "./BestSellers";
import NewStock from "./NewStock";
import rectangle from "../assets/images/rectangle.svg"
import FibreFriday from "./FibreFriday";

const Favorites = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("Best Sellers");

  // Function to render the appropriate component based on active tab
  const renderComponent = () => {
    switch (activeTab) {
      case "Best Sellers":
        return <BestSellers />;
      case "New Stock":
        return <NewStock />;
      case "Fibre Friday":
        return <FibreFriday />;
      default:
        return <BestSellers />;
    }
  };

  return (
    <div className="mx-auto mt-[5%] my-auto w-[80%] px-4">
      {/* Favourites header */}
     
      <div className="mb-4 flex">
        <div>
          <img src={rectangle} alt="rectangle" className="w-4" />
        </div>
        <span className="text-[#DB4444] px-3 py-1 font-semibold text-md rounded-l">
          Explore our Favourites
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {["Best Sellers", "New Stock", "Fibre Friday"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-medium ${
              activeTab === tab ? "text-black" : "text-gray-500"
            }`}
            style={{
              borderBottom: activeTab === tab ? "2px solid #ef4444" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Favorites;
