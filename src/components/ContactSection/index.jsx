import React, { useState } from "react";

// Inline SVGs for social icons
const SOCIALS = [
  {
    href: "https://www.facebook.com/profile.php?id=61563365032915&mibextid=LQQJ4d",
    label: "Facebook",
    svg: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0ZM13 12.5V20h-3v-7.5H8V10h2V8.5C10 6.8 11.2 6 12.7 6h2.1V8h-1.4c-.5 0-.7.3-.7.7V10h2.4l-.3 2.5H13Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/street-level-entrepreneur/",
    label: "LinkedIn",
    svg: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM7 19v-7H4v7h3Zm-1.5-8.3A1.65 1.65 0 1 0 7.5 9a1.65 1.65 0 0 0-2 1.7ZM20 19v-4.2c0-2.1-1.1-3-2.6-3-1.1 0-1.6.6-1.9 1.1V12h-3v7h3v-3.6c0-.6.1-1.2.9-1.2.7 0 .8.6.8 1.2V19h3Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/streetlevelentrepreneur",
    label: "Instagram",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x={2} y={7} width={20} height={15} rx={5} fill="none" />
        <circle cx={12} cy={14.5} r={3.5} stroke="currentColor" fill="none" />
        <circle cx={18.2} cy={9.8} r={1.2} fill="currentColor" />
        <rect x={4} y={4} width={16} height={16} rx={5} stroke="currentColor" fill="none" />
      </svg>
    ),
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
        <div className="text-2xl text-[#176480] font-open-sans mb-16 max-w-4xl">
          Send us an email to set up an appointment, ask us questions, or find out more about our services. We look forward to working with you!
        </div>

        {/* Form Row */}
        <div className="w-full relative mb-0">
          {/* Social icons right aligned */}
          <div className="flex flex-row gap-5 absolute right-0 top-[-50px] md:top-0 md:right-0 md:mt-0 z-10">
            {SOCIALS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className="text-black hover:text-[#176480] transition-colors"
              >
                {soc.svg}
              </a>
            ))}
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
                  className="underline text-black font-open-sans text-[16px] font-bold"
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
