import React from "react";

// Inline SVGs for social icons
const SOCIALS = [
  {
    href: "https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt="Facebook"
        className="w-8 h-8"
      />
    ),
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/street-level-entrepreneur/",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn"
        className="w-8 h-8"
      />
    ),
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/streetlevelentrepreneur",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className="w-8 h-8"
      />
    ),
    label: "Instagram",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-[60px] font-bold text-[#176480] leading-none font-poppins mb-6 md:mb-8 mt-4">
          Contact
        </h1>
        <div className="text-xl md:text-2xl lg:text-4xl font-light text-[#165F78] font-open-sans mb-12 md:mb-16 max-w-6xl leading-relaxed">
          Send us an email to set up an appointment, ask us questions, or find out more about our services. We look forward to working with you!
        </div>

        {/* Contact Information */}
        <div className="w-full relative mb-0">
          {/* Social icons right aligned */}
          <div className="flex justify-center md:justify-end mb-8">
            <div className="flex flex-row gap-5 md:gap-7">
              {SOCIALS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-black hover:text-[#e4b05a] transition-colors hover:scale-110 transform"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact us section */}
          <div className="text-center py-8 md:py-12">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#176480] font-poppins mb-3 md:mb-4">
                Get in Touch
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#165F78] font-open-sans mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
                Ready to start your entrepreneurial journey or need support for your existing business? 
                We're here to help you succeed at the street level.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#176480] font-poppins mb-3 md:mb-4">
                  Contact Us
                </h3>
                <p className="text-base md:text-lg text-black font-open-sans mb-4 md:mb-6 px-2">
                  For inquiries, appointments, or more information about our services:
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <a
                  href="mailto:info@streetlevelentrepreneur.com"
                  className="inline-flex items-center justify-center bg-[#176480] hover:bg-[#0d4254] text-white text-lg md:text-xl font-open-sans font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email Us
                </a>
              </div>

              <div className="border-t border-gray-300 pt-4 md:pt-6">
                <p className="text-sm md:text-base text-gray-600 font-open-sans px-2">
                  We typically respond to emails within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}