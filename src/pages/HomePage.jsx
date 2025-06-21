import React from 'react'

import Hero from '../components/Hero';
import FeaturedGrid from '../components/FeaturedGrid';
import ServicesSection from '../components/ServicesSection';
import WeWorkWith from '../components/WeWorkWith';
import Testimonial from '../components/Testimonial';
import ToolsSection from '../components/ToolsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedGrid />
      <ServicesSection />
      <WeWorkWith />
      <Testimonial />
    </>
  );
};

export default HomePage;
