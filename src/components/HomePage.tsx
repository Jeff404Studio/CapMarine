
import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AmenitiesSection from './sections/AmenitiesSection';
import GallerySection from './sections/GallerySection';
import LocationSection from './sections/LocationSection';
import Footer from './sections/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default HomePage;
