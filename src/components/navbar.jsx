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
    <div className="fixed w-full top-0 z-50 px-4 pt-4">
      <nav className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90'}`}>
        <div className="px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-black">thinnan</span>
              <span className="text-black">.</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">How It Works</a>
            <a href="#community" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Community</a>
            <a href="#founders" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">Founders</a>
            <a href="https://thinnan.page.link/download" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">Download App</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
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
          <div className="md:hidden bg-white absolute left-0 right-0 mx-4 mt-2 p-4 rounded-2xl shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium" onClick={toggleMenu}>Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium" onClick={toggleMenu}>How It Works</a>
              <a href="#community" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium" onClick={toggleMenu}>Community</a>
              <a href="#founders" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium" onClick={toggleMenu}>Founders</a>
              <a href="https://thinnan.page.link/download" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 text-center" onClick={toggleMenu}>Download App</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 