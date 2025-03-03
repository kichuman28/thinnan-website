const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Gradient accent elements */}
      <div className="absolute -left-32 top-20 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-10 w-20 h-20 bg-white opacity-5 rounded-full blur-xl"></div>
      
      {/* Top decorative edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="mb-5 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent opacity-10 rounded-full blur-lg"></div>
              <h2 className="text-2xl font-bold mb-1">
                <span className="text-white">thinnan</span>
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">.</span>
              </h2>
              <p className="text-gray-300 text-sm">Your social food network</p>
            </div>
            <p className="text-gray-300 text-sm mb-6 backdrop-blur-sm mx-auto md:mx-0 max-w-md">
              Bringing people together, one meal at a time. Connect with food enthusiasts and share culinary experiences.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/company/thinnan/" 
                className="text-gray-300 hover:text-accent transition-all duration-300 transform hover:scale-110" 
                aria-label="LinkedIn"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/thinnan.app/" 
                className="text-gray-300 hover:text-accent transition-all duration-300 transform hover:scale-110" 
                aria-label="Instagram"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0001 2.75C14.9312 2.75 15.2851 2.75846 16.4861 2.80923C17.6852 2.86 18.4362 3.03808 19.0671 3.30077C19.7151 3.57192 20.2521 3.93885 20.7861 4.47308C21.3201 5.00654 21.6881 5.54385 21.9591 6.19154C22.2211 6.82231 22.4001 7.57385 22.4501 8.77269C22.5011 9.97385 22.5101 10.3278 22.5101 13.2587C22.5101 16.1896 22.5011 16.5433 22.4501 17.7447C22.4001 18.9438 22.2211 19.6947 21.9591 20.3258C21.6881 20.9738 21.3201 21.5107 20.7861 22.0447C20.2521 22.5785 19.7151 22.9456 19.0671 23.2167C18.4362 23.4785 17.6852 23.6576 16.4861 23.7082C15.2851 23.7591 14.9312 23.7674 12.0001 23.7674C9.06903 23.7674 8.71518 23.7591 7.51403 23.7082C6.31483 23.6576 5.56407 23.4785 4.93291 23.2167C4.28521 22.9456 3.74828 22.5785 3.21407 22.0447C2.68024 21.5107 2.31252 20.9738 2.04176 20.3258C1.77907 19.6947 1.59983 18.9438 1.55021 17.7447C1.49944 16.5433 1.49059 16.1896 1.49059 13.2587C1.49059 10.3278 1.49944 9.97385 1.55021 8.77269C1.59983 7.57385 1.77907 6.82231 2.04176 6.19154C2.31252 5.54385 2.68024 5.00654 3.21407 4.47308C3.74828 3.93885 4.28521 3.57192 4.93291 3.30077C5.56407 3.03808 6.31483 2.86 7.51403 2.80923C8.71518 2.75846 9.06903 2.75 12.0001 2.75ZM12.0001 5.19231C9.00524 5.19231 6.58635 7.61154 6.58635 10.6064C6.58635 13.6014 9.00524 16.0203 12.0001 16.0203C14.9949 16.0203 17.4136 13.6014 17.4136 10.6064C17.4136 7.61154 14.9949 5.19231 12.0001 5.19231ZM12.0001 14.1384C10.0471 14.1384 8.46828 12.5594 8.46828 10.6064C8.46828 8.65346 10.0471 7.07423 12.0001 7.07423C13.9529 7.07423 15.5319 8.65346 15.5319 10.6064C15.5319 12.5594 13.9529 14.1384 12.0001 14.1384ZM17.6091 6.93269C18.2756 6.93269 18.8156 6.39269 18.8156 5.72615C18.8156 5.05962 18.2756 4.52 17.6091 4.52C16.9425 4.52 16.4026 5.05962 16.4026 5.72615C16.4026 6.39269 16.9425 6.93269 17.6091 6.93269Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative text-center md:text-left">
              {/* Subtle accent for section */}
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent/5 rounded-full blur-md"></div>
              
              <h3 className="text-white font-semibold mb-4">
                <span className="relative inline-block">
                  Pages
                  <span className="absolute -bottom-1 left-0 right-0 md:right-auto md:left-0 md:w-8 w-12 h-0.5 bg-accent/30 rounded-full mx-auto md:mx-0"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">How It Works</a></li>
                <li><a href="#community" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Community</a></li>
                <li><a href="#founders" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Founders</a></li>
              </ul>
            </div>
            
            <div className="relative text-center md:text-left">
              {/* Subtle accent for section */}
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent/5 rounded-full blur-md"></div>
              
              <h3 className="text-white font-semibold mb-4">
                <span className="relative inline-block">
                  Download
                  <span className="absolute -bottom-1 left-0 right-0 md:right-auto md:left-0 md:w-8 w-12 h-0.5 bg-accent/30 rounded-full mx-auto md:mx-0"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                <li><a href="https://apps.apple.com/fi/app/thinnan/id6502411893" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">iOS App</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.jathikka.thinaan&hl=en" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Android App</a></li>
                <li><a href="https://www.thinnan.app/" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Web App</a></li>
              </ul>
            </div>
            
            <div className="relative text-center md:text-left">
              {/* Subtle accent for section */}
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent/5 rounded-full blur-md"></div>
              
              <h3 className="text-white font-semibold mb-4">
                <span className="relative inline-block">
                  Contact
                  <span className="absolute -bottom-1 left-0 right-0 md:right-auto md:left-0 md:w-8 w-12 h-0.5 bg-accent/30 rounded-full mx-auto md:mx-0"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Feedback</a></li>
                <li>
                  <a href="mailto:info@thinnan.com" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300 group">
                    <span className="group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">info@thinnan.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 relative">
          {/* Divider with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 relative group">
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              &copy; {currentYear} thinnan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="https://www.jathikka.com/#/thinnan/privacy-policy" className="hover:text-accent transition-all duration-300 relative group">
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 