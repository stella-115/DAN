import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaServicestack, FaEnvelope } from 'react-icons/fa';
import logo from "../../assets/png post 2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/service', label: 'Services', icon: <FaServicestack /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="shrink-0 transition-transform hover:scale-105 duration-300">
            <img src={logo} alt="Dan Williams Global" className="h-12 md:h-14 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 text-[#09032E] font-semibold text-base tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-[#EC3237]' 
                      : 'hover:text-[#EC3237]'
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC3237] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC3237] transition-all duration-300 [.active>&]:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-[#09032E] hover:bg-[#EC3237]/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4 border-t border-gray-100 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#EC3237] text-white shadow-lg shadow-[#EC3237]/20'
                      : 'text-[#09032E] hover:bg-[#EC3237]/10'
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;