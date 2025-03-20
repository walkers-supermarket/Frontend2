import React from "react";
import campaignBanner from "../assets/images/campaignBanner.svg";

const CampaignBanner = () => {
  return (
    <div className="relative w-[80%] mt-[5%] mx-auto my-auto h-[80%] bg-black overflow-hidden">
      {/* Dark gradient background for the entire banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 max-w-6xl mx-auto">
        {/* Text content */}
        <div className="text-white mb-8 md:mb-0 md:mr-4 z-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Waste Not Want Not <br />
            Campaign
          </h1>

          <div className="mt-24">
            <button className="bg-green-500 hover:bg-green-600 w-[60%] text-white px-10 py-3 rounded-md transition duration-300">
              Find out more
            </button>
          </div>
        </div>

        {/* Centered gradient positioned between text and image */}
        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-[40%] ml-[20%] h-[100%] bg-gradient-to-r from-gray-800 to-gray-700 rounded-full opacity-70 blur-xl z-0"></div>

        {/* Bin image container */}
        <div className="relative z-10">
          {/*bin image*/}
          <div className="relative w-96 h-96 md:w-96 md:h-96 flex items-center justify-center">
            <img
              src={campaignBanner}
              alt="Waste bin"
              className="max-w-full max-h-full mr-[15%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
