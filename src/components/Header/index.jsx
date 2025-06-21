import React from 'react';
import { Link } from 'react-router-dom';

const navigationItems = [
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'SLE Articles', link: '/articles' },
  { label: 'Community Tools', link: '/tools' },
  { label: 'Business Tools', link: '/business-tools' },
  { label: 'Contact', link: '/contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full font-sans shadow" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <div className="flex items-center justify-between mx-auto px-8 py-4 max-w-screen-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://ext.same-assets.com/3112424916/3954646047.png"
            alt="Street Level Entrepreneur logo"
            className="h-14 md:h-20 w-auto mr-10"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="flex-1 flex items-center justify-start space-x-10">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="font-bold !text-black text-lg tracking-tight"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: 700 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Search bar */}
        <div className="hidden md:flex items-center ml-6">
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-64">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 outline-none border-none w-full text-gray-600 text-base"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
