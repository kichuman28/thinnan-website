const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 via-white to-gray-900/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-accent/10 -rotate-45 blur-3xl opacity-70"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-accent/10 -rotate-45 blur-3xl opacity-70"></div>
      
      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.1) 2px, transparent 0)`,
          backgroundSize: `50px 50px`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            How Thinnan Works
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Connect, share, and enjoy food together in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {/* Step 1 */}
          <div className="relative group">
            {/* Connecting line between steps (visible on desktop) */}
            <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-r from-accent/20 to-accent/5 z-0 transform translate-x-1/2"></div>
            
            <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full z-10 relative border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                1
              </div>
              
              <div className="p-8 pt-20">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Discover & Connect</h3>
                <p className="text-gray-600 mb-4">
                  Browse cookouts in your area, filter by cuisine, date, or price. 
                  Connect with hosts and join events that match your preferences.
                </p>
                
                <div className="mt-6 bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-sm group-hover:shadow transition-shadow duration-300 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-3 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-80"></span>
                    From the app:
                  </div>
                  
                  <div className="flex space-x-4">
                    <div className="flex-1 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Discover</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Friends</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Cookouts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            {/* Connecting line between steps (visible on desktop) */}
            <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-r from-accent/20 to-accent/5 z-0 transform translate-x-1/2"></div>
            
            <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full z-10 relative border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                2
              </div>
              
              <div className="p-8 pt-20">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Host or Join</h3>
                <p className="text-gray-600 mb-4">
                  Reserve your spot at cookouts or host your own events. Share information about your culinary creations and set your preference.
                </p>
                
                <div className="mt-6 bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-sm group-hover:shadow transition-shadow duration-300 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-3 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-80"></span>
                    From the app:
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm w-full p-4 transform group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-bold">Macarons</div>
                      <div className="text-sm text-accent font-medium">€ 3.00</div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="text-xs text-gray-600">Sun, 03 Nov, 11:30 PM</div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-accent to-accent/90 text-white text-center py-2 rounded-md text-sm font-medium mt-2 w-full shadow-sm hover:shadow transition-shadow duration-300 flex items-center justify-center group">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Request to join</span>
                      <svg className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full z-10 relative border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                3
              </div>
              
              <div className="p-8 pt-20">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Share & Connect</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy meals together, make new friends, and create lasting memories. Share your experiences and grow your food network.
                </p>
                
                <div className="mt-6 bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-sm group-hover:shadow transition-shadow duration-300 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-3 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-80"></span>
                    From the app:
                  </div>
                  
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-md w-full h-28 flex items-center justify-center mb-3 shadow-sm overflow-hidden relative">
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <svg className="w-14 h-14 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div className="text-sm font-medium mb-1 text-gray-700">Hours spent sharing meals and stories</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent/90 to-accent bg-clip-text text-transparent">2,020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 