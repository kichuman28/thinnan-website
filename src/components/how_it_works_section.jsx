const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Thinnan Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, share, and enjoy food together in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="absolute top-4 left-4 w-10 h-10 bg-thinnan-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-xl font-bold mb-3">Discover & Connect</h3>
                <p className="text-gray-600 mb-4">
                  Browse cookouts in your area, filter by cuisine, date, or price. 
                  Connect with hosts and join events that match your preferences.
                </p>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2 font-medium">From the app:</div>
                  <div className="flex space-x-4">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-thinnan-gray rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-thinnan-dark-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Discover</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-thinnan-gray rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-thinnan-dark-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Friends</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-thinnan-gray rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-thinnan-dark-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="absolute top-4 left-4 w-10 h-10 bg-thinnan-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-xl font-bold mb-3">Host or Join</h3>
                <p className="text-gray-600 mb-4">
                  Reserve your spot at cookouts or host your own events. Share information about your culinary creations and set your preference.
                </p>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2 font-medium">From the app:</div>
                  <div className="bg-white rounded-lg shadow-sm w-full p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium">Macarons</div>
                      <div className="text-sm text-thinnan-orange font-medium">€ 3.00</div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="text-xs text-gray-500">Sun, 03 Nov, 11:30 PM</div>
                    </div>
                    <div className="bg-thinnan-orange text-white text-center py-2 rounded-md text-sm font-medium mt-4">
                      Request to join
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="absolute top-4 left-4 w-10 h-10 bg-thinnan-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-xl font-bold mb-3">Share & Connect</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy meals together, make new friends, and create lasting memories. Share your experiences and grow your food network.
                </p>
                <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-2 font-medium">From the app:</div>
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-md w-full h-24 flex items-center justify-center mb-2">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div className="text-sm font-medium mb-1">Hours spent sharing meals and stories</div>
                    <div className="text-3xl font-bold text-thinnan-dark-gray">2,020</div>
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