import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image:
      "https://static.wixstatic.com/media/5238def5c2624723ab217bfb08a3ef78.jpg/v1/fill/w_3110,h_832,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5238def5c2624723ab217bfb08a3ef78.jpg",
    text: `“I couldn't have launched my catering business without the amazing business plan created by Richard. His strategic vision and attention to detail made all the difference. Not only did he lay out a clear roadmap for success, but Richard also brought a fresh perspective to the table. Thanks you Richard for your expertise, I'm confidently serving up success on a silver platter. Cheers!”`,
    name: "Tanya Marriott",
  },
  {
    image:
      "https://static.wixstatic.com/media/58b12b_6dae656a6b8c4796995bab3dbf7ae6a7~mv2.jpg/v1/fill/w_1800,h_481,al_c,q_85,enc_avif,quality_auto/58b12b_6dae656a6b8c4796995bab3dbf7ae6a7~mv2.jpg",
    text: `"Richard's vast experience in the not-for-profit sector, combined with his steadfast work ethic, makes him an outstanding professional. He consistently went the extra mile to fulfill our organization's missions and objectives. His proficiency in operations, grant writing, fundraising strategies, and community engagement is immense."`,
    name: "Janice Providence Lucenay\nLuvBay Afrobeat Music Radio",
  },
  {
    image:
      "https://static.wixstatic.com/media/58b12b_6fa0671ed6e343d38765f52e493a69c3~mv2.jpg/v1/fill/w_1800,h_481,al_c,q_85,enc_avif,quality_auto/58b12b_6fa0671ed6e343d38765f52e493a69c3~mv2.jpg",
    text: `"Richard was a Business Development Officer for the Jamaica Business Development Corporation. In this capacity, he offered business formalisation, financial records management, networking and marketing, business plan preparation, business consultancy, and monitoring and mentoring to start-up businesses with integrity, clear communication, and teamwork."`,
    name: "Colin Coley\nJamaica Business Development Corporation",
  },
];

const arrowButtonStyle =
  "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-150 cursor-pointer z-20";

const dotButtonStyle =
  "inline-block mx-1 w-3 h-3 rounded-full transition-all duration-200 border border-white";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = right, -1 = left
  const timeoutRef = useRef();

  const total = testimonials.length;

  // Slide transition variant based on direction
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      position: "absolute",
    }),
  };

  // Auto-slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 10000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleDot = (i) => {
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center overflow-hidden py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-700 z-0"
        style={{
          backgroundImage: `url('${testimonials[index].image}')`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Arrow Left */}
      <button
        className={`${arrowButtonStyle} left-6`}
        aria-label="Previous testimonial"
        onClick={handlePrev}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            d="M15 19l-7-7 7-7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Arrow Right */}
      <button
        className={`${arrowButtonStyle} right-6`}
        aria-label="Next testimonial"
        onClick={handleNext}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            d="M9 5l7 7-7 7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Testimonial Box */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="relative flex justify-center w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <div className="bg-[#33708d] bg-opacity-95 rounded-[40px] shadow-2xl px-8 py-10 md:px-16 md:py-14 max-w-4xl flex flex-col items-center text-center text-white font-bold mx-2">
                <blockquote className="text-2xl md:text-3xl leading-relaxed font-[Poppins,sans-serif] mb-8 font-semibold whitespace-pre-line">
                  {testimonials[index].text}
                </blockquote>
                <div className="text-lg md:text-xl mt-2 font-[Poppins,sans-serif] font-medium whitespace-pre-line">
                  {testimonials[index].name}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 z-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`${dotButtonStyle} ${
                index === i
                  ? "bg-white scale-125 border-2 border-white"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
