import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Leaf, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.mission, path: '/mission' },
    { label: t.nav.programs, path: '/programs' },
    { label: t.nav.donate, path: '/donate' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const isHome = location.pathname === '/';

  // Dynamic styling based on route and scroll state
  // On Home: transparent -> white on scroll
  // On other pages: always white
  const isTransparent = isHome && !scrolled;

  const navClass = isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-lg py-2';
  const textClass = isTransparent ? 'text-white drop-shadow-sm' : 'text-silver-600';
  const logoBgClass = isTransparent ? 'bg-white text-evergreen-700' : 'bg-evergreen-700 text-white';
  const logoTextClass = isTransparent ? 'text-white drop-shadow-md' : 'text-evergreen-900';
  const hoverClass = isTransparent ? 'hover:text-evergreen-200' : 'hover:text-evergreen-600';
  const activeClass = 'font-bold underline underline-offset-4';

  const btnClass = isTransparent
    ? 'bg-white text-evergreen-700 hover:bg-evergreen-50'
    : 'bg-evergreen-600 text-white hover:bg-evergreen-700';

  const langBtnClass = isTransparent
    ? 'border-white/50 text-white hover:bg-white/10'
    : 'border-silver-300 text-silver-700 hover:bg-silver-100';

  const mobileMenuBtnColor = isTransparent ? 'text-white' : 'text-evergreen-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-2 rounded-full ${logoBgClass}`}>
              <Leaf size={24} />
            </div>
            <span className={`font-serif text-xl font-bold ${logoTextClass}`}>
              {t.nav.logo}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-200 ${textClass} ${hoverClass} ${isActive ? activeClass : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-base font-bold px-3 py-1 rounded-full border transition-all ${langBtnClass}`}
            >
              <Globe size={14} />
              {language === 'en' ? 'KO' : 'EN'}
            </button>

            <Link
              to="/donate"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${btnClass}`}
            >
              <Heart size={16} fill="currentColor" />
              {t.nav.donateButton}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-base font-bold px-2 py-1 rounded-md border ${langBtnClass}`}
            >
              {language === 'en' ? 'KO' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${mobileMenuBtnColor}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-silver-100">
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