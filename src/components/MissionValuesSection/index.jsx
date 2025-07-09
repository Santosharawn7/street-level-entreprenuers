import { motion } from "framer-motion";
import React from 'react';

const values = [
  {
    title: "EVERYONE has the opportunity to be an entrepreneur!",
    text: "You do not need to have a doctorate to succeed in business."
  },
  {
    title: "Preparation, preparation, preparation",
    text: "You don't have to have all the answers, but you DO need to anticipate them!"
  },
  {
    title: "Take calculated risks and be prepared to fail",
    text: "At a certain point, put it out there, and let the market tell you where you stand"
  },
  {
    title: "Confidence is EVERYTHING!",
    text: "Confidence in business can be achieved by knowing one's own strengths, and weaknesses, and by knowing your product and industry"
  },
  {
    title: "Try to have a bit of fun along the way",
    text: "Some may think you're crazy for trying – and they may be right – but at least you can try to enjoy the ride."
  }
];

export function MissionValuesSection() {
  return (
    <section
      className="bg-cover bg-center py-16 md:py-24 relative"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/58b12b_7f3b33aa10c640b48cacede450ffd584~mv2.jpg/v1/fill/w_1800,h_950,al_c,q_85,enc_avif,quality_auto/58b12b_7f3b33aa10c640b48cacede450ffd584~mv2.jpg')"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 bg-white/90 py-8 md:py-12 rounded-2xl shadow-xl">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#74a3cf] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 font-poppins"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base md:text-xl lg:text-2xl px-2 md:px-30 text-center font-light text-gray-900 font-open-sans mb-8 md:mb-10 leading-relaxed"
        >
          Our mission is to equip entrepreneurs and communities with the necessary tools to assist in the achievement of their business development goals.<br />
          <br />
          The vision of Street Level Entrepreneur is to improve the lives of individuals, by strengthening their business endeavours, utilizing easy-to-use tools, while maintaining the principles and strategies for success, leading to the empowerment of the community.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#052944] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 font-poppins"
        >
          Our Values
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-10 mx-2 md:mx-4 text-center">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-7 last:mb-0 md:last:mb-0"
            >
              <div className="font-bold text-lg md:text-xl text-[#052944] mb-3 md:mb-2 font-poppins leading-tight">
                {value.title}
              </div>
              <div className="text-base md:text-lg text-gray-700 font-open-sans leading-relaxed">
                {value.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}