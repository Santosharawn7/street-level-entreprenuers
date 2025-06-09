import React from 'react'

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // No TS: just use event type "e"
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@streetlevelentrepreneur.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sle-navy mb-4 font-poppins">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 font-open-sans">
              Find out how we can work together on your next big thing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-sle-navy mb-6 font-poppins">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-sle-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sle-navy font-nunito">Email</h4>
                    <a href="mailto:info@streetlevelentrepreneur.com" className="text-sle-gold hover:text-sle-brown transition-colors font-open-sans">
                      info@streetlevelentrepreneur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-sle-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sle-navy font-nunito">Location</h4>
                    <p className="text-gray-600 font-open-sans">Serving small businesses and communities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-sle-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sle-navy font-nunito">Experience</h4>
                    <p className="text-gray-600 font-open-sans">Over 30 years combined experience</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-sle-navy mb-4 font-nunito">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d"
                     className="hover:opacity-80 transition-opacity"
                     target="_blank" rel="noopener noreferrer">
                    <img src="https://ext.same-assets.com/3112424916/3405459597.png" alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a href="https://www.linkedin.com/company/street-level-entrepreneur/"
                     className="hover:opacity-80 transition-opacity"
                     target="_blank" rel="noopener noreferrer">
                    <img src="https://ext.same-assets.com/3112424916/984117610.png" alt="LinkedIn" className="w-8 h-8" />
                  </a>
                  <a href="https://www.instagram.com/streetlevelentrepreneur"
                     className="hover:opacity-80 transition-opacity"
                     target="_blank" rel="noopener noreferrer">
                    <img src="https://ext.same-assets.com/3112424916/2033636806.png" alt="Instagram" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-sle-navy mb-6 font-poppins">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sle-navy mb-2 font-nunito">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sle-gold focus:border-transparent font-open-sans"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sle-navy mb-2 font-nunito">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sle-gold focus:border-transparent font-open-sans"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sle-navy mb-2 font-nunito">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sle-gold focus:border-transparent font-open-sans"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sle-navy mb-2 font-nunito">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sle-gold focus:border-transparent font-open-sans"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sle-gold hover:bg-sle-brown text-white py-3 px-6 rounded-md font-semibold font-nunito transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
