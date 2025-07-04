import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const scrollPosition = elementTop;

      if (window.innerWidth < 768) {
        setIsOpen(false);
        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
          });
        }, 500);
      } else {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(16, 185, 129, 0.8)"
            }}
            className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            SAI
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 rounded-lg group"
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-emerald-600 dark:bg-emerald-400 transform -translate-x-1/2"
                  initial={{ width: 0 }}
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {item.name}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)"
                  }}
                />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-600"
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: 90
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl mt-2 overflow-hidden border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className="relative block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="mobile-hover"
                    />
                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-emerald-600 dark:bg-emerald-400 rounded-r"
                      whileHover={{ height: "60%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
