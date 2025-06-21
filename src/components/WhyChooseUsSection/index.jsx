import { motion } from "framer-motion";
import React from 'react';

const whyCards = [
  {
    title: "For Start-Ups and Small Businesses",
    text: `We understand the demands faced by the business owner, how to recognize it, and how to pivot when necessary. With customized workshops featuring tools such as the Street Level Canvas, business plan writing, strategic planning and sales strategy development, we can help you get started, or get your business back on track.`
  },
  {
    title: "For Non-Profits",
    text: `For over 15 years, Street Level Entrepreneur has worked with countless individuals and groups in the nonprofit sector to help them achieve their goals for the betterment of their communities. With services such as the Proposal Application Starter Kit, strategic planning sessions, or organizational assessment/development workshops, we can help your organization take the next step forward.`
  },
  {
    title: "For Communities",
    text: `Our signature product, the “Asset-Based-Community-Development (ABCD)” workshop, is a powerful tool to mobilize community members in a way that empowers and unites them towards a common goal. By employing this approach, development strategies become more effective and more impactful.`
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#052944] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-center font-bold text-4xl md:text-5xl mb-5 font-poppins"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-center text-lg md:text-xl max-w-2xl mx-auto mb-14 font-open-sans"
        >
          SLE improves the level of success for any businessperson with simple, easy-to-use tools that streamline the strategic planning process. We help individuals and organizations of all types, including:
        </motion.p>
        <div className="grid md:grid-cols-3 gap-10">
          {whyCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl px-7 py-10 shadow-lg text-center flex flex-col items-center"
            >
              <div className="font-bold text-xl md:text-2xl text-[#052944] mb-4 font-poppins">{card.title}</div>
              <div className="text-gray-700 text-lg md:text-xl font-open-sans">{card.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
