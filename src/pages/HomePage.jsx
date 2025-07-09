import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/Hero';
import FeaturedGrid from '../components/FeaturedGrid';
import ServicesSection from '../components/ServicesSection';
import WeWorkWith from '../components/WeWorkWith';
import Testimonial from '../components/Testimonial';
import ToolsSection from '../components/ToolsSection';
import ContactSection from '../components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const featuredGridRef = useRef(null);
  const servicesRef = useRef(null);
  const weWorkWithRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Hero section animation - fade in from top
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Featured Grid animation - fade in from bottom
    gsap.fromTo(
      featuredGridRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuredGridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Services section animation - slide in from left
    gsap.fromTo(
      servicesRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // We Work With section animation - slide in from right
    gsap.fromTo(
      weWorkWithRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: weWorkWithRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Testimonial section animation - scale up from center
    gsap.fromTo(
      testimonialRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={featuredGridRef}>
        <FeaturedGrid />
      </div>
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <div ref={weWorkWithRef}>
        <WeWorkWith />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;