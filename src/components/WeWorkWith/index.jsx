import React from 'react'

const WeWorkWith = () => {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sle-navy mb-8 font-poppins">
              We work with:
            </h2>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Small Businesses */}
            <div>
              <h3 className="text-2xl font-bold text-sle-navy mb-4 font-poppins">
                Small Businesses
              </h3>
              <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
                With more than 30 years' combined experience, SLE has the know-how to help entrepreneurs start and grow their business, identify new and potential markets, and identify challenges they face along their path of growth.
              </p>
            </div>
  
            {/* Communities */}
            <div>
              <h3 className="text-2xl font-bold text-sle-navy mb-4 font-poppins">
                Communities
              </h3>
              <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
                With over 20 years' combined experience, SLE works with grassroots leaders, equipping them with the knowledge and tools necessary to create strategies, using their own talents and abilities, to help them move their communities forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WeWorkWith;
  