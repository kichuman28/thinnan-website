import idliImage from '../assets/screenshots/Idli.png';
import berryPorridgeImage from '../assets/screenshots/berry_porridge.png';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div 
        className="absolute inset-0 opacity-25" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Creating Connections Through Food
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            thinnan helps you discover, connect, and share memorable meals with friends and food enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Feature 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            {/* Accent border */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-colors duration-500"></div>
            {/* Accent corner */}
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
            
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-5 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Host Cookouts</h3>
              <p className="text-gray-600 mb-4">
                Share your culinary skills by hosting cookouts. Invite friends, set dates, and create memorable food experiences together.
              </p>

              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden relative mt-6 group-hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-[180px] rounded-xl flex items-center justify-center p-4">
                  <div className="w-full max-w-[220px] bg-white rounded-lg shadow-md p-3 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium">Podi Idli & Mint Chutney</div>
                    </div>
                    <div className="h-[100px] rounded-md mb-2 relative overflow-hidden">
                      <img 
                        src={idliImage} 
                        alt="Podi Idli & Mint Chutney" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-accent font-medium">€ 5.00</div>
                      <div className="text-xs text-gray-500">Wed, 25 Dec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            {/* Accent border */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-colors duration-500"></div>
            {/* Accent corner */}
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
            
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-5 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Discover Experiences</h3>
              <p className="text-gray-600 mb-4">
                Find unique culinary experiences in your area. Filter by cuisine, date, or location to discover your next favorite meal.
              </p>

              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden relative mt-6 group-hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-[180px] rounded-xl flex items-center justify-center p-4">
                  <div className="w-full max-w-[220px] bg-white rounded-lg shadow-md p-3 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium">Berry porridge</div>
                    </div>
                    <div className="h-[100px] rounded-md mb-2 relative overflow-hidden">
                      <img 
                        src={berryPorridgeImage} 
                        alt="Berry porridge" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-accent font-medium">€ 8.00</div>
                      <div className="text-xs text-gray-500">Sat, 9 Mar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            {/* Accent border */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-colors duration-500"></div>
            {/* Accent corner */}
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
            
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-5 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Build Community</h3>
              <p className="text-gray-600 mb-4">
                Create and join food-focused groups, make new friends, and strengthen bonds through shared culinary adventures.
              </p>

              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden relative mt-6 group-hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-[180px] rounded-xl flex items-center justify-center p-4">
                  <div className="w-full max-w-[220px] flex flex-col space-y-3 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-2 bg-white/80 rounded-lg hover:bg-white transition-colors duration-200">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full shadow-sm"></div>
                      <div className="text-sm font-medium">Friday tea</div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-white/80 rounded-lg hover:bg-white transition-colors duration-200">
                      <div className="w-8 h-8 bg-blue-200 rounded-full shadow-sm"></div>
                      <div className="text-sm font-medium">Weekend assembly</div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-white/80 rounded-lg hover:bg-white transition-colors duration-200">
                      <div className="w-8 h-8 bg-green-200 rounded-full shadow-sm"></div>
                      <div className="text-sm font-medium">Coffee and book nerds</div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-white/80 rounded-lg hover:bg-white transition-colors duration-200">
                      <div className="w-8 h-8 bg-purple-200 rounded-full shadow-sm"></div>
                      <div className="text-sm font-medium">Sunday streamers</div>
                    </div>
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

export default FeaturesSection; 