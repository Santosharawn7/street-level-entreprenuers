import React from 'react'

import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-sle-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Contact Us
            </h1>
            <p className="text-xl font-open-sans opacity-90">
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
