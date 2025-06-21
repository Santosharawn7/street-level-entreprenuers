import React from 'react';

const WeWorkWith = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
        {/* Heading */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <h2
            className="font-extrabold text-black"
            style={{
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '3.3rem',
              lineHeight: 1.1,
              marginBottom: 0,
            }}
          >
            We work with:
          </h2>
        </div>
        {/* Details */}
        <div className="w-full lg:w-2/3">
          <div className="mb-10">
            <h3
              className="font-bold"
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: '2.4rem',
                color: '#143c4c',
                marginBottom: '0.4rem',
                lineHeight: 1.15,
              }}
            >
              Small Businesses
            </h3>
            <p
              style={{
                fontFamily: "'Open Sans', Arial, sans-serif",
                fontSize: '1.5rem',
                color: '#143c4c',
                lineHeight: 1.45,
                marginBottom: 0,
              }}
            >
              With more than 30 years' combined experience, SLE has the know-how to help entrepreneurs start and grow their business, identify new and potential markets, and identify challenges they face along their path of growth.
            </p>
          </div>
          <div>
            <h3
              className="font-bold"
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: '2.4rem',
                color: '#143c4c',
                marginBottom: '0.4rem',
                lineHeight: 1.15,
              }}
            >
              Communities
            </h3>
            <p
              style={{
                fontFamily: "'Open Sans', Arial, sans-serif",
                fontSize: '1.5rem',
                color: '#143c4c',
                lineHeight: 1.45,
                marginBottom: 0,
              }}
            >
              With over 20 years' combined experience, SLE works with grassroots leaders, equipping them with the knowledge and tools necessary to create strategies, using their own talents and abilities, to help them move their communities forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWorkWith;
