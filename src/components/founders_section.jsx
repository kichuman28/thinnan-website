import React from 'react';

const FoundersSection = () => {
  const founders = [
    {
      name: "Elina Virtanen",
      role: "CEO & Co-Founder",
      bio: "With a background in food technology and community building, Elina leads our vision to connect people through shared culinary experiences.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mikko Järvinen",
      role: "CTO & Co-Founder",
      bio: "Mikko brings 15 years of software engineering experience, creating innovative solutions that make food sharing seamless and enjoyable.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sophia Kim",
      role: "CMO & Co-Founder",
      bio: "A marketing strategist with a passion for food cultures, Sophia drives our mission to bring diverse culinary traditions together.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Raj Patel",
      role: "COO & Co-Founder",
      bio: "Raj oversees our operations with expertise in scaling community platforms and a deep appreciation for bringing people together through food.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Anna Lindström",
      role: "Head of Product & Co-Founder",
      bio: "Anna shapes our product with insights from her background in UX design and her experiences hosting community dinners in three countries.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Tomas Kovačić",
      role: "Head of Partnerships & Co-Founder",
      bio: "Tomas builds our network of food enthusiasts and partners, with a vision of creating the world's most inclusive food-sharing platform.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="founders" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent opacity-5 rounded-full blur-xl"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Meet Our <span className="relative inline-block">
              Founders
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent opacity-30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The team behind Thinnan bringing the joy of shared meals to your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.02] to-transparent opacity-70 pointer-events-none z-10"></div>
              
              {/* Accent corner */}
              <div className="absolute top-0 right-0 border-t-[25px] border-r-[25px] border-t-accent/20 border-r-transparent"></div>
              
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                <p className="text-gray-500 mb-3 flex items-center">
                  {founder.role}
                  <span className="ml-2 w-1.5 h-1.5 bg-accent rounded-full inline-block opacity-70"></span>
                </p>
                <p className="text-gray-700">{founder.bio}</p>
                <div className="mt-5 pt-4 flex space-x-3 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-accent transition-colors"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-accent transition-colors"
                    aria-label={`${founder.name}'s Twitter profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                    </svg>
                  </a>
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