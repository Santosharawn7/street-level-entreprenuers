import React from 'react'

import ToolsSection from '../components/ToolsSection';

const BusinessToolsPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-sle-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Business Tools
            </h1>
            <p className="text-xl font-open-sans opacity-90">
              Practical tools and templates to help you start and grow your business
            </p>
          </div>
        </div>
      </section>

      <ToolsSection />
    </div>
  );
};

export default BusinessToolsPage;
