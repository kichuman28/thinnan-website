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
                href="#" 
                className="text-gray-300 hover:text-accent transition-all duration-300 transform hover:scale-110" 
                aria-label="Facebook"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3084 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1748V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.0828 22 12.0611Z" />
                  </svg>
                </div>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-accent transition-all duration-300 transform hover:scale-110" 
                aria-label="Twitter"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9938 4.53339C23.0942 4.97873 22.1445 5.2751 21.164 5.40905C22.2009 4.77794 22.9676 3.79748 23.3305 2.62839C22.3744 3.21629 21.3144 3.64406 20.2106 3.87451C19.4921 3.09945 18.5458 2.58766 17.5082 2.41856C16.4706 2.24947 15.4076 2.43208 14.4771 2.93833C13.5466 3.44457 12.8031 4.24684 12.35 5.2208C11.8969 6.19477 11.7612 7.29095 11.9634 8.3455C10.1554 8.24555 8.38809 7.76087 6.77807 6.92058C5.16805 6.0803 3.75347 4.89846 2.62192 3.44924C2.22148 4.15479 1.98558 4.97539 1.98558 5.84747C1.9851 6.63451 2.18178 7.40864 2.55798 8.10241C2.93418 8.79619 3.47753 9.38583 4.13916 9.8166C3.35284 9.79205 2.58356 9.56709 1.89642 9.15887V9.22342C1.8964 10.3539 2.28303 11.4489 2.98583 12.3292C3.68863 13.2095 4.66563 13.8223 5.76649 14.0607C5.03398 14.2712 4.26522 14.3037 3.51775 14.1551C3.78939 15.1354 4.35954 16.0021 5.14922 16.6367C5.9389 17.2714 6.90646 17.6452 7.90949 17.7071C6.31122 18.9869 4.35782 19.6831 2.34607 19.6799C1.97315 19.6799 1.60039 19.6542 1.2301 19.603C3.27163 20.9698 5.63691 21.6912 8.05183 21.6882C15.9495 21.6882 20.2786 15.2887 20.2786 9.75778C20.2786 9.53347 20.273 9.30746 20.2626 9.08315C21.215 8.37199 22.0303 7.49 22.6759 6.47974C21.803 6.87824 20.8771 7.14207 19.9291 7.26246C20.9192 6.653 21.6612 5.68777 22.0186 4.55348L23.9938 4.53339Z" />
                  </svg>
                </div>
              </a>
              <a 
                href="#" 
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
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">iOS App</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Android App</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">Web App</a></li>
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
              &copy; {currentYear} Thinnan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-all duration-300 relative group">
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-all duration-300 relative group">
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-all duration-300 relative group">
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 