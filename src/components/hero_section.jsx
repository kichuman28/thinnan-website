import { useEffect, useState } from 'react';
import heroImage from '../assets/screenshots/hero_section.png';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">thinnan</span>
              <span className="text-thinnan-orange">.</span><br />
              <span className="text-black">your social</span><br />
              <span className="text-thinnan-orange">food</span>
              <span className="text-black"> network</span>
              <span className="text-thinnan-orange">.</span>
            </h1>
            <p className="text-gray-700 text-xl md:pr-12">
              Bringing people together plate by plate! Connect with food enthusiasts, discover cookouts, 
              and share culinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#download" className="bg-thinnan-orange text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 text-center">
                Download App
              </a>
              <a href="#how-it-works" className="border-2 border-thinnan-black text-thinnan-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-thinnan-black hover:text-white transition-all duration-300 text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img 
              src={heroImage} 
              alt="Thinnan app screenshot" 
              className="max-w-full h-auto shadow-xl rounded-3xl"
              style={{ maxHeight: '600px' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 