import React from 'react';
import { Link } from 'react-router-dom';

// Remember to import Poppins font in your HTML or CSS!

const featuredItems = [
  {
    image: "https://ext.same-assets.com/3112424916/2467031915.jpeg",
    category: "Articles",
    subtitle: "Feature Article",
    title: "Help! I Want to Start a Business – Where Do I Begin?",
  },
  {
    image: "https://ext.same-assets.com/3112424916/1421138269.jpeg",
    category: "Tools",
    subtitle: "Easy to use tools",
    title: "More than 20 years' experience working with entrepreneurs",
    link: "/community-tools"
  },
  {
    image: "https://ext.same-assets.com/3112424916/2970008432.jpeg",
    category: "Information",
    subtitle: "Are you a Street Level Entrepreneur?",
    title: "Find out what it takes to make THE CUT!",
  },
  {
    image: "https://ext.same-assets.com/3112424916/3299657963.jpeg",
    category: "Information",
    subtitle: "Benefits",
    title: "Why should you work with Street Level Entrepreneur?",
    link: "/about"
  },
  {
    image: "https://ext.same-assets.com/3112424916/4026111487.jpeg",
    category: "Services",
    subtitle: "1-on-1 coaching support",
    title: "Easy to use seminars and effective growth strategies",
    link: "/services"
  },
  {
    image: "https://ext.same-assets.com/3112424916/3001859566.jpeg",
    category: "Resources",
    subtitle: "Street Level Entrepreneur tools",
    title: "Tips and tricks to help get you started",
    link: "/community-tools"
  },
  {
    image: "https://static.wixstatic.com/media/87b2650d03194846a3b3ec7e582bff21.jpg/v1/crop/x_610,y_0,w_4396,h_3744/fill/w_290,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bicycle%20Shop.jpg",
    category: "Articles",
    subtitle: "More Articles",
    title: "Learn insights, tips, and tricks from professionals with over 20 years' experience helping entrepreneurs, and community leaders to grow.",
    link: "/articles"
  },
  {
    image: "https://static.wixstatic.com/media/58b12b_5b75d7a770f94c5383acb3e669cfba94~mv2.jpg/v1/crop/x_0,y_201,w_1280,h_1519/fill/w_290,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SLE-woman02-v.jpg",
    category: "Contact",
    subtitle: "Get in touch",
    title: "Find out how we can work together on your next big thing",
    link: "contact"
  },
];

const gold = "#e4b05a"; // Brand gold color

const FeaturedGrid = () => (
  <section className="py-14 bg-white">
    <div className="max-w-[1700px] mx-auto px-4">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6 
          px-4
          items-stretch
        "
      >
        {featuredItems.map((item, idx) => (
          <Link to={item.link} key={idx}>
          <div
            className="
              bg-white
              rounded-xl
              border border-gray-200
              shadow-2xl
              flex flex-col 
              items-center
              overflow-hidden
              transition
              hover:shadow-4xl
              h-full
              w-full
            "
            style={{
              minHeight: 480,
              // width: 340,   // optional: fixed width
              fontFamily: "'Poppins', Arial, sans-serif",
            }}
          >
            <img
              src={item.image}
              alt={item.subtitle}
              className="w-full h-[230px] object-cover"
              style={{ minHeight: 215 }}
            />
            <div className="w-full flex justify-center -mt-6 mb-2">
              <span
                className="inline-block font-semibold tracking-wide"
                style={{
                  borderRadius: "9999px",
                  background: gold,
                  color: "#222",
                  minWidth: 150,
                  padding: "6px 0 6px 0",
                  fontSize: 16,
                  fontFamily: "'Poppins', Arial, sans-serif",
                  boxShadow: "0 2px 7px 0 rgba(0,0,0,0.09)",
                  textAlign: "center",
                  marginBottom: "-12px",
                }}
              >
                {item.category}
              </span>
            </div>
            <div className="flex flex-col flex-1 justify-start w-full px-6 pb-5">
              <h3
                className="text-2xl font-bold text-black text-center mt-4"
                style={{
                  fontFamily: "'Poppins', Arial, sans-serif",
                  letterSpacing: "-0.5px",
                  marginBottom: 10,
                }}
              >
                {item.subtitle}
              </h3>
              <p
                className="text-lg text-center mt-6 text-black"
                style={{
                  fontFamily: "'Poppins', Arial, sans-serif",
                  lineHeight: 1.27,
                  marginTop: 10,
                }}
              >
                {item.title}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGrid;
