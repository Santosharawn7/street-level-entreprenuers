import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002945] py-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0 px-6 md:px-12">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center min-w-[320px] mb-8 md:mb-0">
          <img
            src="https://ext.same-assets.com/3112424916/972271915.png"
            alt="SLE Logo"
            className="h-24 w-auto mb-2"
          />
          <div className="text-center leading-tight text-xs text-white">
            <div>Street Level Entrepreneur</div>
            <div>Copyright © 2025</div>
            <div>All rights reserved.</div>
            <div>
              <a href="#" className="underline text-white hover:text-[#e4b05a] transition-colors !text-white">
                Terms of Service
              </a>{" "}
              |{" "}
              <a href="#" className="underline text-white hover:text-[#e4b05a] transition-colors !text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Navigation + Social */}
        <div className="flex flex-col items-center md:min-w-[340px]">
          <div className="flex flex-col items-left mb-6 space-y-0.5">
            <a href="#about" className="font-semibold text-lg text-white hover:text-[#e4b05a] transition-colors !text-white">About</a>
            <a href="#services" className="font-semibold text-lg text-white hover:text-[#e4b05a] transition-colors !text-white">Services</a>
            <a href="#articles" className="font-semibold text-lg text-white hover:text-[#e4b05a] transition-colors !text-white">SLE Articles</a>
            <a href="#tools" className="font-semibold text-lg text-white hover:text-[#e4b05a] transition-colors !text-white">Entrepreneurship Tools</a>
            <a href="#contact" className="font-semibold text-lg text-white hover:text-[#e4b05a] transition-colors !text-white">Contact</a>
          </div>
          <div className="flex flex-row gap-7 mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="https://ext.same-assets.com/3112424916/3405459597.png" alt="Facebook" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/company/street-level-entrepreneur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="https://ext.same-assets.com/3112424916/984117610.png" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="https://www.instagram.com/streetlevelentrepreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="https://ext.same-assets.com/3112424916/2033636806.png" alt="Instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Stay in touch */}
        <div className="flex flex-col items-center md:items-start min-w-[320px]">
          <div className="font-bold mb-2 text-lg text-white">Stay in touch with us!</div>
          <div className="mb-2 text-base opacity-90 leading-tight text-white max-w-[300px] text-center md:text-left">
            The Street Level Pulse will give you helpful ideas, articles, and tools to get you moving forward.
          </div>
          <div className="w-full flex flex-col items-center md:items-start">
            <a
              href="#"
              className="inline-flex items-center text-white hover:text-[#e4b05a] mb-2 text-base font-semibold transition-colors !text-white"
            >
              <span role="img" aria-label="Sign up" className="mr-1">📝</span> Sign up here
            </a>
            <a
              href="mailto:info@streetlevelentrepreneur.com?subject=SLE%20Inquiry"
              className="inline-flex items-center text-white hover:text-[#e4b05a] text-base font-semibold transition-colors !text-white"
            >
              <span role="img" aria-label="Contact" className="mr-1">✉️</span> Contact us today.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
