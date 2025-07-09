import React from 'react'

import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="">
      <section className="bg-sle-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-poppins leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl font-open-sans opacity-90 max-w-2xl mx-auto px-2 leading-relaxed">
              Ready to start your entrepreneurial journey? Let's work together!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ContactPage;