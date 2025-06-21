import React, { useState } from "react";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import { MissionValuesSection } from "../components/MissionValuesSection";
import { FounderSection } from "../components/FounderSection";

const HEADER_IMAGE =
  "https://static.wixstatic.com/media/58b12b_9ef1956b629443f3b4dd1807cf2e632e~mv2.jpg/v1/fill/w_1280,h_186,al_c,q_80,enc_avif,quality_auto/58b12b_9ef1956b629443f3b4dd1807cf2e632e~mv2.jpg";

const LOGO_IMAGE =
  "https://static.wixstatic.com/media/58b12b_26d615ce11cd46ad9805e30022d1dfeb~mv2.png/v1/fill/w_352,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/streetlevelentrepreneur_sign_yellow_edited.png";

  const socialLinks = [
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
  

const FORMSPREE_URL = "https://formspree.io/f/xwkgldzk"; // Change to your Formspree endpoint

const AboutPage = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  // Simple form handler for Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (result.ok || response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Sorry, we couldn't send your message. Please try again.");
      }
    } catch {
      setError("Sorry, we couldn't send your message. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Image */}
      <div
        className="w-full h-48 md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${HEADER_IMAGE})`,
        }}
      />
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 pt-14 pb-24">
        {/* Logo + About Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={LOGO_IMAGE}
              alt="Street Level Entrepreneur logo"
              className="w-[340px] md:w-[420px] max-w-4xl mb-4"
            />
          </div>
          {/* About Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins tracking-tight">
              About
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-open-sans leading-relaxed">
              Street Level Entrepreneur is a consulting firm that uses the principles of entrepreneurship, strategic planning, and project management in a simplified way for the small business owner and community development practitioner. By using innovative tools such as the “Street Level Canvas” and the “Asset Mapping process”, the Street Level Entrepreneur has improved the lives of a myriad of small businesses, non-profit organizations, and communities.
            </p>
          </div>
        </div>

        {/* Contact & Social Row */}
        <div className="flex flex-col md:flex-row gap-12 mt-10 md:pt-20 items-start">
          {/* Contact Form Card */}
          <div className="flex-1">
            <div className="mb-7">
              <span className="block font-semibold font-poppins text-2xl text-black mb-1 leading-tight">
                Drop us a message below.
                <br />
                We look forward to hearing from you!
              </span>
            </div>
            {sent ? (
              <div className="text-lg text-green-700 font-bold">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4 mb-2">
                  <div className="flex-1">
                    <label className="block text-base mb-1 text-black font-poppins">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border border-black text-black rounded-none px-3 py-3 w-full text-lg"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-base mb-1 text-black font-poppins">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border border-black text-black rounded-none px-3 py-3 w-full text-lg"
                      name="lastName"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-base mb-1 text-black font-poppins">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="border border-black rounded-none text-black px-3 py-3 w-full text-lg"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-base mb-1 text-black font-poppins">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="border border-black text-black rounded-none px-3 py-3 w-full text-lg resize-none"
                    name="message"
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-600 text-sm mt-2">{error}</div>
                )}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="w-48 bg-[#156072] text-white py-2 font-semibold font-poppins hover:bg-sle-gold hover:text-black transition-colors text-lg"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
            <div className="mt-6">
              <p className="text-base font-bold text-black font-open-sans mb-0">
                If you prefer, you can send us an email:
              </p>
              <a
                href="mailto:info@streetlevelentrepreneur.com"
                className="text-base underline text-black font-open-sans"
              >
                info@streetlevelentrepreneur.com
              </a>
            </div>
          </div>

          {/* Social Media, right side */}
          <div className="flex justify-end mb-6">
            <div className="flex flex-row gap-7">
              {socialLinks.map((link) => (
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
             
        </div>
        
      </section>
      <WhyChooseUsSection/>
              <MissionValuesSection/>
              <FounderSection/>
    </div>
  );
};

export default AboutPage;
