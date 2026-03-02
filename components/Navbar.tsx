import React, { useState } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.mission, path: '/mission' },
    { label: t.nav.programs, path: '/programs' },
    { label: t.nav.donate, path: '/donate' },
    { label: t.nav.register, path: '/register' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const activeClass = 'font-bold underline underline-offset-4';

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-2">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Evergreen Senior Mission - 에버그린 선교회"
              className="h-12 sm:h-11 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu - only on large screens to avoid cramped/wrapping nav on tablet */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-200 text-silver-600 hover:text-evergreen-600 ${isActive ? activeClass : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-base font-bold px-3 py-1 rounded-full border border-silver-300 text-silver-700 hover:bg-silver-100 transition-all"
            >
              <Globe size={14} />
              {language === 'en' ? 'KO' : 'EN'}
            </button>

            <Link
              to="/donate"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold bg-evergreen-600 text-white hover:bg-evergreen-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart size={16} fill="currentColor" />
              {t.nav.donateButton}
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-base font-bold px-2 py-1 rounded-md border border-silver-300 text-silver-700 hover:bg-silver-100"
            >
              {language === 'en' ? 'KO' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors text-evergreen-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-silver-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium hover:bg-evergreen-50 ${location.pathname === item.path ? 'text-evergreen-700 font-bold' : 'text-silver-700'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-3 py-3 rounded-md text-base font-bold bg-evergreen-600 text-white hover:bg-evergreen-700"
            >
              {t.nav.donateButton}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;