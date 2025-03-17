
import React from "react";
import groceryImage from "../assets/images/groceryImage.svg";
import deliveryImage from "../assets/images/deliveryImage.svg";
import sitbackImage from "../assets/images/sitbackImage.svg";

const Subscription = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto border-b border-t border-gray-200 px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl mt-[3%] font-bold text-gray-800 mb-4">
          Our Subscription Programme
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-xl font-semibold mb-12">
          Join our subscription programme to get your weekly fruit and veg box,
          or send shopping to a love ones
        </p>

        {/* Features Section */}
        <div className="flex justify-center gap-40 mb-12">
          {/* Feature 1: Grocery Option */}
          <div className="flex flex-col items-center max-w-xs">
            <img
              src={groceryImage}
              alt="Grocery box"
              className="w-[280px] h-[200px] mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              select from a variety of <br /> grocery option
            </h3>
          </div>

          {/* Feature 2: Delivery Schedule */}
          <div className="flex flex-col items-center max-w-xs">
            <img
              src={deliveryImage}
              alt="Delivery van"
              className="w-[291.06px] h-[200px] mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Select Delivery Schedule <br /> and Address
            </h3>
            {/* Start Shopping Button */}
            <button className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600">
              start shopping
            </button>
          </div>

          {/* Feature 3: Sit Back */}
          <div className="flex flex-col items-center max-w-xs">
            <img
              src={sitbackImage}
              alt="Person sitting"
              className="w-[157.58px] h-[200px] mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Sit Back Let’s Do <br /> the Rest
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
