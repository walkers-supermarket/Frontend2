import React from "react";
import fibreDeals from "../assets/images/fibreDeals.svg";
import wheat3 from "../assets/images/wheat3.svg";
import wheat1 from "../assets/images/wheat1.svg";
import wheat2 from "../assets/images/wheat2.svg";
import blueberries from "../assets/images/blueberries.svg";
import tangerine from "../assets/images/tangerine.svg";
import plate from "../assets/images/plate.svg";
import maize from "../assets/images/maize.svg";
import avocado from "../assets/images/avocado.svg";

const FibreFridayDeals = () => {
  return (
    <div className="relative w-[80%] mb-[10%] mt-[5%] mx-auto h-96 bg-[#A0BCE0] flex items-center justify-center overflow-hidden rounded-none">
      {/* Fibre Friday Deals Image */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-2/4 -translate-y-1/2 z-10">
        <img
          src={fibreDeals}
          alt="Fibre Friday Deals"
          className=" w-[130%] h-32"
        />
      </div>

      {/* Button: Find out more */}
      <button className="absolute w-[15%] bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-4 text-sm font-medium z-10">
        Find out more
      </button>

      {/* Wheat Stalks (Left Side) */}
      <div className="absolute left-40 top-1/2 transform -translate-x-5 -translate-y-1/2">
        <img src={wheat3} alt="Wheat Stalks" className=" w-[100%] h-60 mt-36" />
      </div>

      {/* Blueberries (Top-Left Corner) */}
      <div className="absolute top-4 left-0">
        <img
          src={blueberries}
          alt="Blueberries"
          className="w-[90%] h-40 mt-[-15%]"
        />
      </div>

      {/* Orange/Tangerine (Top-Right Corner) */}
      <div className="absolute top-4 right-16">
        <img src={tangerine} alt="Tangerine" className="h-20" />
      </div>

      {/* Plate with Food (Center-Right) */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/3">
        <img
          src={plate}
          alt="Plate with Food"
          className="w-[150%] h-60 mr-[10%]"
        />
      </div>

      {/* Corn (Bottom-Right) */}
      <div className="absolute bottom-10 right-80">
        <img
          src={maize}
          alt="Corn"
          className=" w-[100%] h-36 mb-[-20%] ml-[17%]"
        />
      </div>
      {/* Wheat Grains  */}
      <div className="absolute top-1/4 right-80">
        <img src={wheat2} alt="Corn" className=" w-[100%] h-44  mt-[-15%]" />
      </div>

      {/* Avocado (Bottom-Right) */}
      <div className="absolute bottom-6 right-16">
        <img src={avocado} alt="Avocado" className="h-18" />
      </div>

      {/* Wheat Grains (Scattered near the plate) */}
      <div className="absolute right-20 top-24">
        <img
          src={wheat1}
          alt="Wheat Grains"
          className="h-15 ml-[25%] mt-[35%]"
        />
      </div>
    </div>
  );
};

export default FibreFridayDeals;
