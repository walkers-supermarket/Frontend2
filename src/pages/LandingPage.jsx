import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Subscription from "../components/Subscription";
import Categories from "../components/Categories";
import Favourites from "../components/Favorites";
import ShopAndSave from "../components/ShopAndSave";
import FibreFridayDeals from "../components/FibreFridayDeals";
import { ScrollRestoration } from "react-router-dom";
import CampaignBanner from "../components/CampaignBanner ";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <Hero />
      <div className="mt-[10%]">
        <Subscription />
      </div>
      <div className="mt-[10%]">
        <Categories />
      </div>
      <div className="mt-[10%]">
        <Favourites />
      </div>
      <div className="mt-[10%]">
        <CampaignBanner/>
      </div>
      <div className="mt-[10%]">
        <ShopAndSave />
      </div>
      <div className="mt-[10%]">
        <FibreFridayDeals />
      </div>
      <div className="mt-[10%]">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
