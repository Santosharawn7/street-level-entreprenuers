import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// All searchable site content (you can expand as needed)
const searchData = [
  // Navigation links
  ...[
    { type: "Page", label: 'About', link: '/about' },
    { type: "Page", label: 'Services', link: '/services' },
    { type: "Page", label: 'SLE Articles', link: '/articles' },
    { type: "Page", label: 'Community Tools', link: '/community-tools' },
    { type: "Page", label: 'Business Tools', link: '/business-tools' },
    { type: "Page", label: 'Contact', link: '/contact' },
  ],

  // Example articles/blogs/services/tools/etc
  {
    type: "Article",
    label: "How to Start a Small Business",
    description: "Learn the steps to successfully launch your own business in your community.",
    link: "/articles/how-to-start-a-small-business"
  },
  {
    type: "Tool",
    label: "Asset Mapping Tool",
    description: "Map out your community's assets for strategic development.",
    link: "/tools/asset-mapping"
  },
  {
    type: "Service",
    label: "Grant Proposal Writing",
    description: "Professional writing services to help you secure funding.",
    link: "/services/grant-proposal-writing"
  },
  // ...add as much content as you like!
];

const navigationItems = [
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'SLE Articles', link: '/articles' },
  { label: 'Community Tools', link: '/tools' },
  { label: 'Business Tools', link: '/business-tools' },
  { label: 'Contact', link: '/contact' },
];

const Header = () => {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  // Simple instant search, match on label or description (case-insensitive)
  const filtered =
    search.trim().length > 0
      ? searchData.filter(
          (item) =>
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
        )
      : [];

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
        <div className="hidden md:flex items-center ml-6 relative">
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-sle-gold">
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
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 120)} // so you can click results
            />
          </div>
          {/* Dropdown results */}
          {focus && search.trim().length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md z-50 border border-gray-200 max-h-80 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="p-4 text-gray-400 text-center">No results found.</div>
              ) : (
                filtered.map((item, i) => (
                  <Link
                    to={item.link}
                    key={item.link + i}
                    className="block px-4 py-3 hover:bg-sle-gold/20 transition-colors"
                    style={{ textDecoration: 'none' }}
                    onMouseDown={e => e.preventDefault()} // Prevent input blur
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-sle-navy text-base">{item.label}</span>
                      {item.description && (
                        <span className="text-gray-600 text-sm">{item.description}</span>
                      )}
                      <span className="text-xs mt-1 text-sle-gold">{item.type}</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
