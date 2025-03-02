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
    <section id="community" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Food Community</h2>
          <p className="section-subtitle">
            Join thousands of food enthusiasts sharing meals and creating connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="card p-8 md:p-10">
              <div className="relative">
                <svg className="w-12 h-12 text-gray-200 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <div className="mb-6">
                  <p className="text-lg text-gray-700 italic mb-4">"{testimonials[activeIndex].quote}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8 border-t pt-4 border-gray-100">
                  <button 
                    onClick={prevTestimonial} 
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                        aria-label={`Testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial} 
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="card">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Community Stats</h3>
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
                            <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-orange-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="p-6 bg-gradient-to-br from-gray-900 to-black text-white">
                  <h3 className="font-bold text-xl mb-3">Join Our Community</h3>
                  <p className="mb-5 opacity-90">Experience the joy of cooking, sharing, and connecting with food enthusiasts in your area.</p>
                  <a href="#download" className="btn-secondary bg-white text-black hover:bg-gray-100 w-full block text-center">
                    Download the App
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