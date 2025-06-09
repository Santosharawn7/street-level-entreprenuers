import React from 'react'

import NewsletterForm from '../NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-sle-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://ext.same-assets.com/3112424916/972271915.png"
              alt="Street Level Entrepreneur brandmark"
              className="h-16 w-auto mb-4"
            />
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-3">
              <a href="#about" className="block hover:text-sle-gold transition-colors font-nunito">
                About
              </a>
              <a href="#services" className="block hover:text-sle-gold transition-colors font-nunito">
                Services
              </a>
              <a href="#articles" className="block hover:text-sle-gold transition-colors font-nunito">
                SLE Articles
              </a>
              <a href="#tools" className="block hover:text-sle-gold transition-colors font-nunito">
                Entrepreneurship Tools
              </a>
              <a href="#contact" className="block hover:text-sle-gold transition-colors font-nunito">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d"
                 className="hover:opacity-80 transition-opacity"
                 target="_blank" rel="noopener noreferrer">
                <img src="https://ext.same-assets.com/3112424916/3405459597.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/street-level-entrepreneur/"
                 className="hover:opacity-80 transition-opacity"
                 target="_blank" rel="noopener noreferrer">
                <img src="https://ext.same-assets.com/3112424916/984117610.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/streetlevelentrepreneur"
                 className="hover:opacity-80 transition-opacity"
                 target="_blank" rel="noopener noreferrer">
                <img src="https://ext.same-assets.com/3112424916/2033636806.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Stay in touch with us!
            </h3>
            <p className="text-sm mb-4 font-open-sans opacity-90">
              The Street Level Pulse will give you helpful ideas, articles, and tools to get you moving forward.
            </p>
            <NewsletterForm />
            <div className="mt-4">
              <a
                href="mailto:info@streetlevelentrepreneur.com?subject=SLE%20Inquiry"
                className="text-sle-gold hover:text-white transition-colors font-nunito"
              >
                Contact us today
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-sle-blue mt-8 pt-8 text-center">
          <p className="text-sm opacity-75 font-open-sans">
            © 2025 Street Level Entrepreneur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
