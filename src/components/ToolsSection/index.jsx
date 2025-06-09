import React from 'react'

const ToolsSection = () => {
    return (
      <section id="business-tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sle-navy mb-4 font-poppins">
              Business Tools & Resources
            </h2>
            <p className="text-lg text-gray-700 font-open-sans max-w-3xl mx-auto">
              Access our collection of practical tools and resources designed to help entrepreneurs and community leaders succeed.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Plan Template */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Business Plan Template</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Comprehensive business plan template to help you structure your ideas and secure funding.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Download Template →
              </button>
            </div>
  
            {/* Financial Forecasting Tool */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Financial Forecasting</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Easy-to-use spreadsheet for projecting revenue, expenses, and cash flow for your business.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Get Tool →
              </button>
            </div>
  
            {/* Marketing Strategy Guide */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Marketing Strategy</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Step-by-step guide to developing effective marketing strategies for small businesses.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Download Guide →
              </button>
            </div>
  
            {/* Community Assessment Tool */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Community Assessment</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Framework for assessing community assets and identifying development opportunities.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Access Tool →
              </button>
            </div>
  
            {/* Proposal Writing Guide */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Proposal Writing</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Comprehensive guide and templates for writing winning grant and business proposals.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Download Guide →
              </button>
            </div>
  
            {/* Street Level Canvas */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <h3 className="text-xl font-semibold text-sle-navy font-poppins">Street Level Canvas</h3>
              </div>
              <p className="text-gray-600 font-open-sans mb-4">
                Our signature tool for mapping out business models and community development strategies.
              </p>
              <button className="text-sle-gold hover:text-sle-brown font-semibold font-nunito">
                Get Canvas →
              </button>
            </div>
          </div>
  
          <div className="text-center mt-12">
            <p className="text-gray-600 font-open-sans mb-6">
              Need help using these tools or want personalized guidance?
            </p>
            <a
              href="#contact"
              className="inline-block bg-sle-gold hover:bg-sle-brown text-white px-8 py-3 rounded-md font-semibold font-nunito transition-colors"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ToolsSection;
  