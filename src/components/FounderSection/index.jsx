import { motion } from "framer-motion";
import React from "react";

export function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src="https://static.wixstatic.com/media/58b12b_7783882158c548a6b036a428f1ad63e5~mv2.png/v1/fill/w_732,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SLE-RichardLambie-circle.png"
          alt="Richard Lambie"
          className="rounded-full w-72 h-72 object-cover shadow-xl"
        />
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#074b68] text-4xl md:text-5xl font-bold mb-6 font-poppins"
          >
            Hello!
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 font-open-sans"
          >
            <p className="mb-2">My name is Richard Lambie.</p>
            <p className="mb-2">
              I founded Street Level Entrepreneur in 2023. I am a Project
              Management and Strategic Planning specialist with more than 20
              years' experience working in the for- and non-profit sectors.
            </p>
            <p className="mb-2">
              My experience includes small business development, capacity
              building of community organizations, and managing projects for
              national and international funding agencies.
            </p>
            <p>
              Utilizing the principles of project management, business
              development and sales strategy, I have developed several tools and
              techniques to help empower entrepreneurs and community development
              practitioners alike to achieve their goals.
            </p>
          </motion.div>
          <div className="mt-8 flex flex-col sm:flex-row gap-5">
            <a
              href="mailto:info@streetlevelentrepreneur.com"
              className="bg-[#156072] hover:bg-[#0f4552] !text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 text-lg font-poppins"
            >
              Email Me
              <svg
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="white"
                strokeWidth="2"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                <circle cx="16" cy="16" r="13" />
                <circle cx="11.5" cy="13.5" r="1.3" fill="white" />
                <circle cx="20.5" cy="13.5" r="1.3" fill="white" />
                <path
                  d="M12 20c1.5 2 6.5 2 8 0"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="/"
              className="bg-[#156072] hover:bg-[#0f4552] !text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg font-poppins"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
