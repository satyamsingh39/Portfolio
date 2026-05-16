import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-text-white cursor-pointer"
        >
          {personalInfo.name.toUpperCase()}
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a 
                href={link.href} 
                className="text-sm font-bold text-text-gray hover:text-white transition-colors"
              >
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="glow-button text-sm">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav absolute top-full left-0 w-full overflow-hidden"
          >
            <ul className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-lg font-bold text-text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-accent text-white py-3 rounded-xl font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
