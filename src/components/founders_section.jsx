import React from 'react';

// Import all founder images
import kevinImg from '../assets/images/founders/kevin.png';
import vishnuImg from '../assets/images/founders/vishnu.jpg';
import annuImg from '../assets/images/founders/annu.png';
import adriaanImg from '../assets/images/founders/adriaan.png';
import calImg from '../assets/images/founders/cal.png';
import danaImg from '../assets/images/founders/dana.png';
import manyuImg from '../assets/images/founders/manyu.png';
import kishoreImg from '../assets/images/founders/kishore.png';
import adwaithImg from '../assets/images/founders/adwaith.png';

const FoundersSection = () => {
  const team = [
    {
      name: "kevin",
      role: "founder",
      areas: ["product", "finance", "business development"],
      image: kevinImg,
      linkedin: "https://www.linkedin.com/in/jacobkevin/"
    },
    {
      name: "vishnu",
      role: "co-founder",
      areas: ["sales", "operations"],
      image: vishnuImg,
      linkedin: "https://www.linkedin.com/in/vishnuaravind01/"
    },
    {
      name: "annu",
      role: "co-founder",
      areas: ["design", "marketing"],
      image: annuImg,
      linkedin: "https://www.linkedin.com/in/annu-mathew-service-designer/"
    },
    {
      name: "adriaan",
      role: "cto",
      areas: ["8 yrs IT experience", "co-founder, Unveiler"],
      image: adriaanImg,
      linkedin: "https://www.linkedin.com/in/adriaan-knapen/"
    },
    {
      name: "cal",
      role: "advisor, thinnan",
      areas: ["co-founder, Slack", "former head of eng, Flickr"],
      image: calImg,
      linkedin: "https://www.linkedin.com/in/iamcal/"
    },
    {
      name: "dana",
      role: "advisor, thinnan",
      areas: ["co-founder, Sulapac Ltd", "co-founder, Kuurai Oy"],
      image: danaImg,
      linkedin: "https://www.linkedin.com/in/loredanamoimas/"
    },
    {
      name: "manyu",
      role: "ui/ux lead design",
      areas: ["8+ years in digital product design"],
      image: manyuImg,
      linkedin: "https://www.linkedin.com/in/manyuvarma/"
    },
    {
      name: "kishore",
      role: "designer",
      areas: [],
      image: kishoreImg,
      linkedin: "https://www.linkedin.com/in/kishorenataraj/"
    },
    {
      name: "adwaith",
      role: "developer",
      areas: [],
      image: adwaithImg,
      linkedin: "https://www.linkedin.com/in/adwaith-jayasankar-156539200/"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white relative overflow-hidden font-manrope">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent opacity-5 rounded-full blur-xl"></div>
          <h2 className="section-title relative inline-block">
            Meet The Team
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
          </h2>
          <p className="section-subtitle mt-4">
            The team behind thinnan bringing the joy of shared meals to your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {team.map((member, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Image Container with Fixed Aspect Ratio - Reduced size */}
              <div className="relative w-full max-w-[280px] mx-auto pb-[100%] rounded-2xl overflow-hidden 
                            before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                            group-hover:before:opacity-100">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                
                {/* LinkedIn Icon */}
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-all duration-300 
                           z-10"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Text Content */}
              <div className="mt-6 space-y-2 max-w-[280px] mx-auto transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-2xl font-medium text-primary tracking-wide relative inline-block">
                  {member.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></div>
                </h3>
                <div className="space-y-1">
                  <p className="text-accent font-light tracking-wide transition-colors duration-300 group-hover:text-accent/80">
                    {member.role}
                  </p>
                  {member.areas.map((area, idx) => (
                    <p key={idx} className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">
                      - {area}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection; 