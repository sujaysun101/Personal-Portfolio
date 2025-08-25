import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navItems = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { 
      label: 'Education',
      subItems: [
        { to: '/education', label: 'Education' },
        { to: '/coursework', label: 'Coursework' },
      ]
    },
    { 
      label: 'Accomplishments',
      subItems: [
        { to: '/accomplishments', label: 'Accomplishments' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/research', label: 'Research' },
      ]
    },
  { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-lg' : ''
      }`}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
              >
                {item.subItems ? (
                  <button
                    className={`transition-colors duration-300 ${
                      item.subItems.some(sub => location.pathname === sub.to)
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to!}
                    className={`transition-colors duration-300 ${
                      location.pathname === item.to 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.subItems && openDropdown === item.label && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg glass py-1"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.to}
                        to={subItem.to}
                        className={`block px-4 py-2 text-sm ${
                          location.pathname === subItem.to
                            ? 'text-white font-semibold'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <div>
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full text-left py-2 text-gray-300 hover:text-white flex justify-between items-center"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.to}
                            to={subItem.to}
                            className={`block py-2 transition-colors duration-300 ${
                              location.pathname === subItem.to 
                                ? 'text-white font-semibold' 
                                : 'text-gray-300 hover:text-white'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to!}
                    className={`block py-2 transition-colors duration-300 ${
                      location.pathname === item.to 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;