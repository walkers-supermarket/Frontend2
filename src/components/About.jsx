// src/components/About.jsx
import React from "react";


const About = ({ storyImage }) => {
  return (
    <div  className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2">
          <img
            src={storyImage}
            alt="Our Story"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
