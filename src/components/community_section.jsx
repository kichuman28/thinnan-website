import { useState } from 'react';

const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Kalyani Anjana",
      role: "Pastry Chef",
      quote: "I moved to Helsinki from Paris and wanted to connect with locals through food. Thinnan helped me share my pastry skills and make friends who appreciate French cuisine.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vishnu George",
      role: "Home Cook",
      quote: "I host weekly Kerala cookouts through Thinnan. It's amazing to share my culture's food with people who are curious and excited to learn about new flavors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Julia Korhonen",
      role: "Food Enthusiast",
      quote: "I've tried dishes from around the world without leaving my neighborhood. The connections I've made through sharing meals have become some of my closest friendships.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="community" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/[0.02] via-gray-100 to-gray-900/[0.02]"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-2xl"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent opacity-5 rounded-full blur-xl"></div>
          <h2 className="section-title relative inline-block">
            Our Food Community
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
          </h2>
          <p className="section-subtitle mt-4">
            Join thousands of food enthusiasts sharing meals and creating connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="card p-8 md:p-10 bg-white backdrop-blur-sm bg-opacity-80 relative group">
              {/* Card decorative elements */}
              <div className="absolute -top-1 -bottom-1 left-0 w-1 bg-gradient-to-b from-transparent via-accent/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -left-4 -top-4 w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
              
              <div className="relative">
                <svg className="w-12 h-12 text-accent/20 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <div className="mb-6">
                  <p className="text-lg text-gray-700 italic mb-4 relative">
                    <span className="relative">
                      "{testimonials[activeIndex].quote}"
                      <span className="absolute -left-2 -top-2 text-4xl text-accent opacity-10">"</span>
                    </span>
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4 ring-2 ring-white shadow-md">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-gray-500 flex items-center">
                        {testimonials[activeIndex].role}
                        <span className="w-1 h-1 rounded-full bg-accent ml-2 opacity-70"></span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-8 border-t pt-4 border-gray-100">
                  <button 
                    onClick={prevTestimonial} 
                    className="p-2 rounded-full border border-gray-200 hover:border-accent/50 hover:text-accent transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'bg-accent scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial} 
                    className="p-2 rounded-full border border-gray-200 hover:border-accent/50 hover:text-accent transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="card relative backdrop-blur-sm bg-white/90 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-80"></span>
                      Community Stats
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Active users</span>
                      <span className="font-semibold">5,400+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Countries represented</span>
                      <span className="font-semibold">32</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Meals shared</span>
                      <span className="font-semibold">12,800+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average event rating</span>
                      <div className="flex items-center">
                        <span className="font-semibold mr-1">4.8</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-accent' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card overflow-hidden relative">
                {/* Creative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black"></div>
                <div className="absolute inset-0 opacity-20" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}
                ></div>
                
                <div className="p-6 relative z-10 text-white">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent opacity-30 rounded-full blur-xl"></div>
                  <h3 className="font-bold text-xl mb-3 flex items-center">
                    Join Our Community
                    <span className="w-1.5 h-1.5 bg-accent rounded-full ml-2"></span>
                  </h3>
                  <p className="mb-5 opacity-90">Experience the joy of cooking, sharing, and connecting with food enthusiasts in your area.</p>
                  <a href="#download" className="btn-secondary bg-white text-black hover:bg-gray-100 w-full block text-center group relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-accent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-20"></span>
                    <span className="relative">Download the App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 