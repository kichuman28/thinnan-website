import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-20 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-black">thinnan</span>
            <span className="text-thinnan-orange">.</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium">How It Works</a>
          <a href="#community" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium">Community</a>
          <a href="#download" className="bg-thinnan-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">Download App</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-16 p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium" onClick={toggleMenu}>How It Works</a>
            <a href="#community" className="text-gray-700 hover:text-thinnan-orange transition-colors duration-300 font-medium" onClick={toggleMenu}>Community</a>
            <a href="#download" className="bg-thinnan-orange text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-center" onClick={toggleMenu}>Download App</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 