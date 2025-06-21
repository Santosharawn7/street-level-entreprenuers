import React, { useState } from "react";

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
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create email body
    const body = `
First Name: ${formData.first}
Last Name: ${formData.last}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailto = `mailto:info@streetlevelentrepreneur.com?subject=Contact from Website&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailto;

    setFormData({
      first: "",
      last: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[60px] font-bold text-[#176480] leading-none font-poppins mb-8 mt-4">
          Contact
        </h1>
        <div className="text-2xl md:text-4xl font-light text-[#165F78] font-open-sans mb-16 max-w-6xl">
          Send us an email to set up an appointment, ask us questions, or find out more about our services. We look forward to working with you!
        </div>

        {/* Form Row */}
        <div className="w-full relative mb-0">
          {/* Social icons right aligned */}
          <div className="flex justify-end mb-6">
            <div className="flex flex-row gap-7">
              {SOCIALS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-black hover:text-[#e4b05a] transition-colors"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full mt-4">
            {/* Inputs Row */}
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex-1">
                <label className="block text-base mb-1 text-black font-open-sans">First Name</label>
                <input
                  type="text"
                  name="first"
                  required
                  value={formData.first}
                  onChange={handleInputChange}
                  className="w-full border border-black px-4 py-3 text-lg bg-white text-black font-open-sans rounded-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex-1">
                <label className="block text-base mb-1 text-black font-open-sans">Last Name</label>
                <input
                  type="text"
                  name="last"
                  required
                  value={formData.last}
                  onChange={handleInputChange}
                  className="w-full border border-black px-4 py-3 text-lg bg-white text-black font-open-sans rounded-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex-1">
                <label className="block text-base mb-1 text-black font-open-sans">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-black px-4 py-3 text-lg bg-white text-black font-open-sans rounded-none"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div className="mb-6">
              <label className="block text-base mb-1 text-black font-open-sans">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border border-black px-4 py-3 text-lg bg-white text-black font-open-sans rounded-none resize-none"
              />
            </div>

            {/* Email note and Send button row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <p className="font-bold text-black font-open-sans mb-0 text-[16px]">
                  If you prefer, you can send us an email:
                </p>
                <a
                  href="mailto:info@streetlevelentrepreneur.com"
                  className="underline !text-black font-open-sans text-[16px] font-bold"
                >
                  info@streetlevelentrepreneur.com
                </a>
              </div>
              <button
                type="submit"
                className="md:w-[350px] w-full bg-[#176480] hover:bg-[#0d4254] text-white text-lg py-3 font-open-sans font-normal rounded-none transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
