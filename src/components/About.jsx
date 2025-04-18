import React from "react";
// Import the main image
import aboutImage from "../assets/images/aboutImage.svg";


const About = () => {
  return (
    <div className="py-12 bg-[#FFF0E0]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <nav className="text-gray-500 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / <span className="text-black">About</span>
        </nav>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <p className="mb-4">
              {" "}
              Guys, it’s time to take control of our own health.
            </p>
            This is something we have all echoed time and time again. We know
            that the population is living longer, but that does not equate to
            living better. People of African-Caribbean or South Asian descent
            are two to four times more likely to develop type 2 diabetes. Over
            65% of White British adults are overweight or obese.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We know that many socioeconomic factors play a major role in our
            health outcome, however, one factor we can take control of today is
            the way in which we eat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission goes beyond providing quality groceries—we are dedicated
            to creating <strong>healthier communities</strong> and building an{" "}
            <strong>inclusive company</strong> that serves everyone. We believe
            that access to{" "}
            <strong>fresh, nutritious, and affordable food</strong> is essential
            for well-being, and we are committed to offering products that
            support a <strong>healthier lifestyle</strong> for all.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            {" "}
            Along with a focus on{" "}
            <strong>customer satisfaction and sustainability</strong>, Walkers
            Supermarket is dedicated to supporting local suppliers, reducing
            waste, and making ethical choices that benefit both our shoppers and
            the environment.{" "}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            As we continue to grow, we want{" "}
            <strong>our customers to be part of our journey</strong>. Your
            feedback and suggestions help shape our supermarket, ensuring we
            meet the needs of the community we serve. Whether it’s new product
            ideas, better ways to shop, or ways we can improve our service, we’d
            love to hear from you!
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Check out our campaigns{" "}
          </p>
          {/* Fibre Fridays Section */}
          <h3 className="text-2xl font-semibold mt-6 mb-4">Fibre Fridays!</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fibre is an essential part of a healthy diet, yet many people don’t
            get enough of it. It plays a crucial role in digestion, heart
            health, and overall well-being, making it an important nutrient to
            focus on.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are two main types of fibre, each with its own health
            benefits:
          </p>
          <p className="list-disc list-inside text-gray-600 mb-4">
            Soluble Fibre which Lower cholesterol levels, Regulate blood sugar
            levels and Promote heart health. These can be found in foods such as
            Oats, beans, lentils, apples, citrus fruits, carrots
          </p>
          <p className="list-disc list-inside text-gray-600 mb-4">
            Insoluble Fibre which Promotes regular digestion and prevent
            constipation and Support a healthy gut microbiome. They can be found
            in foods such as Whole grains, nuts, seeds, chickpeas, lentils and
            leafy greens
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently it is estimated that only 9% of adults meet the daily
            recommended fibre amount of 30g. Getting enough fibre in your diet
            is a simple yet powerful way to improve your health.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Which is why we are launching our Fibre Friday campaign. Each and
            every Friday we will provide a 15% discount on selected fibre
            products
          </p>
          {/* Waste Not, Want Not Section */}
          <h3 className="text-2xl font-semibold mt-6 mb-4">
            Waste Not, Want Not
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe good food should never go to waste! Our{" "}
            <strong>“Waste Not, Want Not”</strong> campaign helps reduce food
            waste while giving you a great deal on fresh produce.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <p>
              <strong>
                {" "}
                📦Order a Mystery Box of Fresh Fruit & Vegetables!
              </strong>{" "}
            </p>
            <p>
              <strong>🥕£5 Box</strong>- A mix of fresh seasonal fruit & veg
            </p>
            <p>
              <strong>🍎£10 Box</strong>-A bigger selection for even more
              variety
            </p>
          </ul>{" "}
          <p className="text-gray-600 leading-relaxed mb-4">
            By purchasing <strong>a mystery box</strong>, you’re not only
            getting great-value produce, but you’re also{" "}
            <strong>helping us reduce food waste </strong> and support a{" "}
            <strong>more sustainable future</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>🌍Eat well, save money, and help the planet!</strong> Order
            your mystery box today, and why not combine it with Fibre Fridays.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Two people shopping with bags"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
