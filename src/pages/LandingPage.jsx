import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Subscription from "../components/Subscription";
import Categories from "../components/Categories";
import Favourites from "../components/Favorites";
import CampaignBanner from "../components/CampaignBanner ";
import ShopAndSave from "../components/ShopAndSave";
import FibreFridayDeals from "../components/FibreFridayDeals";



const LandingPage = () => {
  return (
    <div>
          <Navbar />
          <Hero />
          <Subscription />
          <Categories />
          <Favourites />
      <CampaignBanner />
      <ShopAndSave />
      <FibreFridayDeals/>
       
          <Footer/>
    </div>
  );
};

export default LandingPage;
