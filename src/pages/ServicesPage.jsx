import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-sle-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Our Services
            </h1>
            <p className="text-xl font-open-sans opacity-90">
              Comprehensive business consulting and community development services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Business Consulting */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-sle-navy mb-6 font-poppins">
                  Business Consulting
                </h3>
                <ul className="space-y-4 text-gray-700 font-open-sans">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Business Plan Development:</strong> Comprehensive business plans that secure funding and guide growth
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Strategic Planning:</strong> Long-term strategic planning for sustainable growth
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Financial Forecasting:</strong> Revenue projections and financial planning
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Market Analysis:</strong> Understanding your target market and competition
                    </div>
                  </li>
                </ul>
              </div>

              {/* Community Development */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-sle-navy mb-6 font-poppins">
                  Community Development
                </h3>
                <ul className="space-y-4 text-gray-700 font-open-sans">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>ABCD Workshops:</strong> Asset-Based Community Development training and facilitation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Grant Writing:</strong> Professional grant and proposal writing services
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Community Mapping:</strong> Identifying assets and opportunities in your community
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sle-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Leadership Development:</strong> Training for community leaders and organizers
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sle-navy mb-12 text-center font-poppins">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-sle-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl font-poppins">1</span>
                </div>
                <h3 className="text-xl font-semibold text-sle-navy mb-2 font-poppins">Discovery</h3>
                <p className="text-gray-700 font-open-sans">
                  We start by understanding your goals, challenges, and resources through in-depth consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sle-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl font-poppins">2</span>
                </div>
                <h3 className="text-xl font-semibold text-sle-navy mb-2 font-poppins">Strategy</h3>
                <p className="text-gray-700 font-open-sans">
                  We develop a customized strategy and action plan tailored to your specific needs and circumstances.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sle-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl font-poppins">3</span>
                </div>
                <h3 className="text-xl font-semibold text-sle-navy mb-2 font-poppins">Implementation</h3>
                <p className="text-gray-700 font-open-sans">
                  We provide ongoing support and guidance as you implement your plan and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
