import GoogleIcon from '../assets/icons/google_icon';
import AppleIcon from '../assets/icons/apple_icon';
import downloadScreenshot from '../assets/screenshots/download_section.png';

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the Thinnan App</h2>
            <p className="text-xl opacity-90 mb-8">
              Start your culinary journey today. Connect with food enthusiasts, discover unique cookouts, 
              and create memorable dining experiences.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-accent bg-opacity-20 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg">Discover and join culinary events near you</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-accent bg-opacity-20 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg">Host your own cookouts and share your recipes</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-accent bg-opacity-20 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg">Build lasting connections through shared meals</p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <GoogleIcon />
                <div className="ml-2">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <AppleIcon />
                <div className="ml-2">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative mt-10 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[580px] bg-black rounded-[40px] p-4 overflow-hidden shadow-xl border border-gray-800">
                <div className="bg-white h-full w-full rounded-[32px] overflow-hidden">
                  {/* App content will be displayed here */}
                  
                  {/* App screenshot image */}
                  <img 
                    src={downloadScreenshot} 
                    alt="Thinnan app screenshot" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-accent opacity-20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection; 