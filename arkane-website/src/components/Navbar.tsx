import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3, TrendingUp, Cpu, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Algorithms', path: '/algorithms', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Investments', path: '/investments', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Automation', path: '/automation', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold tracking-wider text-white">A R K A N E</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-violet-400 bg-violet-900/30'
                    : 'text-gray-300 hover:text-violet-400 hover:bg-gray-800'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-violet-400 hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-violet-400 bg-violet-900/30'
                    : 'text-gray-300 hover:text-violet-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center bg-violet-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-violet-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
