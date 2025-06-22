import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => (
  <div className="bg-white min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold font-poppins text-black text-sle-navy mb-10">Terms of Service</h1>
      <p className="text-xl text-black mb-6">
        These terms and conditions outline the rules and regulations for the use of the Street Level Entrepreneur website located at{" "}
        <a
          href="https://streetlevelentrepreneur.com"
          className="!underline !text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          streetlevelentrepreneur.com
        </a>
        .
      </p>
      <p className="text-xl text-black mb-6">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Street Level Entrepreneur if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">Disclaimer</h2>
      <p className="text-xl text-black mb-6">
        The information on this website is provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">Limitations</h2>
      <p className="text-xl text-black mb-6">
        In no event shall Street Level Entrepreneur or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Street Level Entrepreneur's website, even if Street Level Entrepreneur or a Street Level Entrepreneur authorized representative has been notified orally or in writing of the possibility of such damage.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">Governing Law</h2>
      <p className="text-xl text-black mb-6">
        These terms and conditions are governed by and construed in accordance with the laws of Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">Changes</h2>
      <p className="text-xl text-black mb-6">
        We reserve the right to modify these terms of service at any time. By using this website, you agree to be bound by the current version of these terms of service.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">Contact Us</h2>
      <p className="text-xl text-black mb-6">
        If you have any questions about these Terms of Service, please{" "}
        <Link to="/contact" className="!underline !text-black transition">
          contact us
        </Link>
        .
      </p>
    </div>
  </div>
);

export default TermsOfService;
