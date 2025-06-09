import React from 'react'

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Removed type annotation (: string)
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'About', link: '/about', scrollTo: 'about' },
    { label: 'Services', link: '/services', scrollTo: 'services' },
    { label: 'SLE Articles', link: '/articles', scrollTo: 'articles' },
    { label: 'Community Tools', link: '/tools', scrollTo: 'tools' },
    { label: 'Business Tools', link: '/business-tools', scrollTo: 'business-tools' },
    { label: 'Contact', link: '/contact', scrollTo: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://ext.same-assets.com/3112424916/3954646047.png"
                alt="Street Level Entrepreneur logo"
                className="h-12 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {location.pathname === '/' ? (
                  <button
                    onClick={() => scrollToSection(item.scrollTo)}
                    className="text-sle-navy hover:text-sle-gold transition-colors font-nunito font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    className="text-sle-navy hover:text-sle-gold transition-colors font-nunito font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sle-navy z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'mb-1'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {location.pathname === '/' ? (
                  <button
                    onClick={() => scrollToSection(item.scrollTo)}
                    className="block w-full text-left py-3 px-4 text-sle-navy hover:text-sle-gold hover:bg-gray-50 rounded-md transition-colors font-nunito font-medium text-lg"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-sle-navy hover:text-sle-gold hover:bg-gray-50 rounded-md transition-colors font-nunito font-medium text-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
