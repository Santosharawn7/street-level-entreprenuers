import React from "react";

const Footer = ({ suffix = "" }) => {
  // you can use suffix to make ids/data-cy dynamic if needed per page
  return (
    <footer
      className="bg-[#002945] py-10 w-full"
      id={`footer${suffix}`}
      data-cy={`footer${suffix}`}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0 px-6 md:px-12"
        id={`footer-main-row${suffix}`}
        data-cy={`footer-main-row${suffix}`}
      >
        {/* Logo & Copyright */}
        <div
          className="flex flex-col items-center min-w-[320px] mb-8 md:mb-0"
          id={`footer-logo-section${suffix}`}
          data-cy={`footer-logo-section${suffix}`}
        >
          <img
            src="https://ext.same-assets.com/3112424916/972271915.png"
            alt="SLE Logo"
            className="h-24 w-auto mb-2"
            id={`footer-logo-img${suffix}`}
            data-cy={`footer-logo-img${suffix}`}
          />
          <div
            className="text-center leading-tight text-xs text-white"
            id={`footer-copyright${suffix}`}
            data-cy={`footer-copyright${suffix}`}
          >
            <div id={`footer-site-title${suffix}`} data-cy={`footer-site-title${suffix}`}>Street Level Entrepreneur</div>
            <div id={`footer-year${suffix}`} data-cy={`footer-year${suffix}`}>Copyright © 2025</div>
            <div id={`footer-rights${suffix}`} data-cy={`footer-rights${suffix}`}>All rights reserved.</div>
            <div id={`footer-legal-links${suffix}`} data-cy={`footer-legal-links${suffix}`}>
              <a
                href="/toc"
                className="!underline hover:text-[#e4b05a] transition-colors !text-white"
                target="_blank"
                rel="noopener noreferrer"
                id={`footer-tos-link${suffix}`}
                data-cy={`footer-tos-link${suffix}`}
              >
                Terms of Service
              </a>{" "}
              |{" "}
              <a
                href="/pp"
                target="_blank"
                className="!underline hover:text-[#e4b05a] transition-colors !text-white"
                id={`footer-privacy-link${suffix}`}
                data-cy={`footer-privacy-link${suffix}`}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Navigation + Social */}
        <div
          className="flex flex-col items-center md:min-w-[340px]"
          id={`footer-nav-social-section${suffix}`}
          data-cy={`footer-nav-social-section${suffix}`}
        >
          <div
            className="flex flex-col items-left mb-6 space-y-0.5"
            id={`footer-nav-links${suffix}`}
            data-cy={`footer-nav-links${suffix}`}
          >
            <a
              href="#about"
              className="!font-bold text-lg hover:text-[#e4b05a] transition-colors !text-white"
              id={`footer-link-about${suffix}`}
              data-cy={`footer-link-about${suffix}`}
            >
              About
            </a>
            <a
              href="#services"
              className="!font-bold text-lg hover:text-[#e4b05a] transition-colors !text-white"
              id={`footer-link-services${suffix}`}
              data-cy={`footer-link-services${suffix}`}
            >
              Services
            </a>
            <a
              href="#articles"
              className="!font-bold text-lg hover:text-[#e4b05a] transition-colors !text-white"
              id={`footer-link-articles${suffix}`}
              data-cy={`footer-link-articles${suffix}`}
            >
              SLE Articles
            </a>
            <a
              href="#tools"
              className="!font-bold text-lg hover:text-[#e4b05a] transition-colors !text-white"
              id={`footer-link-tools${suffix}`}
              data-cy={`footer-link-tools${suffix}`}
            >
              Entrepreneurship Tools
            </a>
            <a
              href="#contact"
              className="!font-bold text-lg hover:text-[#e4b05a] transition-colors !text-white"
              id={`footer-link-contact${suffix}`}
              data-cy={`footer-link-contact${suffix}`}
            >
              Contact
            </a>
          </div>
          <div
            className="flex flex-row gap-7 mt-3"
            id={`footer-social-icons${suffix}`}
            data-cy={`footer-social-icons${suffix}`}
          >
            <a
              href="https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              id={`footer-social-facebook${suffix}`}
              data-cy={`footer-social-facebook${suffix}`}
            >
              <img
                src="https://ext.same-assets.com/3112424916/3405459597.png"
                alt="Facebook"
                className="w-10 h-10"
                id={`footer-img-facebook${suffix}`}
                data-cy={`footer-img-facebook${suffix}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/street-level-entrepreneur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id={`footer-social-linkedin${suffix}`}
              data-cy={`footer-social-linkedin${suffix}`}
            >
              <img
                src="https://ext.same-assets.com/3112424916/984117610.png"
                alt="LinkedIn"
                className="w-10 h-10"
                id={`footer-img-linkedin${suffix}`}
                data-cy={`footer-img-linkedin${suffix}`}
              />
            </a>
            <a
              href="https://www.instagram.com/streetlevelentrepreneur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              id={`footer-social-instagram${suffix}`}
              data-cy={`footer-social-instagram${suffix}`}
            >
              <img
                src="https://ext.same-assets.com/3112424916/2033636806.png"
                alt="Instagram"
                className="w-10 h-10"
                id={`footer-img-instagram${suffix}`}
                data-cy={`footer-img-instagram${suffix}`}
              />
            </a>
          </div>
        </div>

        {/* Stay in touch */}
        <div
          className="flex flex-col items-center md:items-start min-w-[320px]"
          id={`footer-touch-section${suffix}`}
          data-cy={`footer-touch-section${suffix}`}
        >
          <div
            className="font-bold mb-2 text-lg text-white"
            id={`footer-touch-title${suffix}`}
            data-cy={`footer-touch-title${suffix}`}
          >
            Stay in touch with us!
          </div>
          <div
            className="mb-2 text-base opacity-90 leading-tight text-white max-w-[300px] text-center md:text-left"
            id={`footer-touch-desc${suffix}`}
            data-cy={`footer-touch-desc${suffix}`}
          >
            The Street Level Pulse will give you helpful ideas, articles, and
            tools to get you moving forward.
          </div>
          <div
            className="w-full flex flex-col items-center md:items-start"
            id={`footer-touch-actions${suffix}`}
            data-cy={`footer-touch-actions${suffix}`}
          >
            <a
              href="#"
              className="inline-flex items-center hover:text-[#e4b05a] mb-2 text-base font-semibold transition-colors !text-white"
              id={`footer-signup-link${suffix}`}
              data-cy={`footer-signup-link${suffix}`}
            >
              <span role="img" aria-label="Sign up" className="mr-1">
                📝
              </span>{" "}
              Sign up here
            </a>
            <a
              href="mailto:info@streetlevelentrepreneur.com?subject=SLE%20Inquiry"
              className="inline-flex items-center hover:text-[#e4b05a] text-base font-semibold transition-colors !text-white"
              id={`footer-contact-link${suffix}`}
              data-cy={`footer-contact-link${suffix}`}
            >
              <span role="img" aria-label="Contact" className="mr-1">
                ✉️
              </span>{" "}
              Contact us today.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
