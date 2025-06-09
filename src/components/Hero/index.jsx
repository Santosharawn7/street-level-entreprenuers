import React from 'react'

const Hero = () => {
    return (
      <section className="relative">
        {/* Background Image */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://ext.same-assets.com/3112424916/3880795026.png)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />
  
          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
                We Make<br />
                Entrepreneurship Simple!
              </h1>
            </div>
          </div>
        </div>
  
        {/* Decorative SVG */}
        <div className="relative">
          <img
            src="https://ext.same-assets.com/3112424916/2667644551.svg"
            alt="decorative element"
            className="w-full h-8 object-cover"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  