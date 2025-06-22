import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="bg-white min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins text-black text-sle-navy mb-8">Privacy Policy</h1>

      <p className="text-lg text-black mb-4">
        Street Level Entrepreneur operates the website <span className="font-semibold">streetlevelentrepreneur.com</span>, which provides information about our services and resources for entrepreneurs.
      </p>

      <p className="text-lg text-black mb-4">
        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Information Collection and Use</h2>
      <p className="text-lg text-black mb-4">
        We collect several different types of information for various purposes to provide and improve our services to you.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Types of Data Collected</h2>
      <ul className="list-disc list-inside text-lg text-black mb-4">
        <li>
          <strong>Personal Data:</strong> While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, Province, Postal code</li>
            <li>Cookies and Usage Data</li>
            <li>Email address</li>
          </ul>
        </li>
        <li className="mt-4">
          <strong>Usage Data:</strong> We may also collect information on how the website is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
        </li>
      </ul>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Use of Data</h2>
      <ul className="list-disc list-inside text-lg text-black mb-4">
        <li>To provide and maintain our website</li>
        <li>To notify you about changes to our website</li>
        <li>To allow you to participate in interactive features of our website when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our website</li>
        <li>To monitor the usage of our website</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Retention of Data</h2>
      <p className="text-lg text-black mb-4">
        Street Level Entrepreneur will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Disclosure of Data</h2>
      <p className="text-lg text-black mb-4">
        We do not share your Personal Data with third parties except as necessary to provide services to you or as required by law.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Security of Data</h2>
      <p className="text-lg text-black mb-4">
        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Your Data Protection Rights</h2>
      <ul className="list-disc list-inside text-lg text-black mb-4">
        <li>The right to access – You have the right to request copies of your personal data.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>
      <p className="text-lg text-black mb-4">
        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our provided contact information.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Changes to This Privacy Policy</h2>
      <p className="text-lg text-black mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="font-semibold text-black mt-8 mb-2 text-xl">Contact Us</h2>
      <p className="text-lg text-black mb-4">
        If you have any questions about this Privacy Policy, please contact us:
        <br />
        <span className="font-semibold">By email:</span>{" "}
        <a
          href="mailto:info@streetlevelentrepreneur.com?subject=SLE%20Privacy%20Policy"
          className="!underline !text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@streetlevelentrepreneur.com
        </a>
        <br />
        <span className="font-semibold">By visiting our </span>
        <Link to="/contact" className="!underline !text-black transition">
          contact page
        </Link>
        .
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
