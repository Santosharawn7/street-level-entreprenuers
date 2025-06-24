import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      {/* Image */}
      <div className="w-full">
        <img
          src="https://ext.same-assets.com/3112424916/3880795026.png"
          alt="Entrepreneurs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Statement */}
      <div className="flex justify-center py-12 px-4">
        <div>
          <h2
            className="font-black text-black text-4xl md:text-7xl leading-none text-center"
            style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
          >
            We Make<br />
            <span className="block">Entrepreneurship Simple!</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
