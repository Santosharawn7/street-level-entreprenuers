import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => (
  <section className="w-full bg-[#6B9AC4] py-24 text-[#002642] flex flex-col items-center justify-center">
    <h2 className="text-5xl md:text-6xl font-bold text-sle-navy mb-6 font-poppins text-center">
      Get Started
    </h2>
    <p className="max-w-6xl text-lg md:text-3xl text-sle-navy font-open-sans text-center mb-8">
      We're here to help your business. Schedule an appointment, send us your questions<br />
      and get in touch with us today for more information on how we make entrepreneurship easy.
    </p>
    <Link
      to="/contact"
      className="bg-[#e4b05a] !font-extrabold text-2xl !text-[#002642]  rounded p-16 py-3 shadow hover:bg-[#d09c3f] transition-colors duration-200"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      Contact Us
    </Link>
  </section>
);

export default GetStartedSection;
