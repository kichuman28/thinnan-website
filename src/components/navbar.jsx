import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full top-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <nav className={`max-w-7xl mx-auto rounded-xl sm:rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90'}`}>
        <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <a href="#" className="text-xl sm:text-2xl font-bold">
              <span className="text-black">thinnan</span>
              <span className="text-black">.</span>
            </a>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">How It Works</a>
            <a href="#community" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Community</a>
            <a href="#team" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Founders</a>
          </div>

          {/* Download Button - Right Aligned */}
          <div className="hidden md:block flex-1 md:flex-none text-right">
            <a href="https://thinnan.page.link/download" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">Download App</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none transition-transform duration-100"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[calc(100vh-200px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm mx-2 sm:mx-4 mb-4 p-4 rounded-xl shadow-lg">
            <div className="flex flex-col space-y-5">
              <a href="#features" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1" onClick={toggleMenu}>Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1" onClick={toggleMenu}>How It Works</a>
              <a href="#community" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1" onClick={toggleMenu}>Community</a>
              <a href="#team" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1" onClick={toggleMenu}>Founders</a>
              <div className="pt-2">
                <a href="https://thinnan.page.link/download" className="block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 text-center text-lg" onClick={toggleMenu}>Download App</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 