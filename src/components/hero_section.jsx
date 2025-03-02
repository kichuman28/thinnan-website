import { useEffect, useState } from 'react';
import heroImage from '../assets/screenshots/hero_section.png';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">thinnan</span>
              <span className="text-accent">.</span><br />
              <span className="text-black">your social</span><br />
              <span className="text-accent">food</span> network
              <span className="text-accent">.</span>
            </h1>
            <p className="text-gray-700 text-xl md:pr-12">
              Bringing people together plate by plate! Connect with food enthusiasts, discover cookouts, 
              and share culinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#download" className="btn-primary text-center">
                Download App
              </a>
              <a href="#how-it-works" className="btn-secondary text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2.5rem] -z-10"></div>
              <img 
                src={heroImage} 
                alt="Thinnan app screenshot" 
                className="max-w-full h-auto shadow-lg rounded-3xl relative z-10"
                style={{ maxHeight: '600px' }} 
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 