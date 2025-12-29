import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero.png"
          alt="Serene nature landscape with evergreen trees and a peaceful lake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-evergreen-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-evergreen-900 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 animate-fade-in-up">
          {t.hero.titleLine1} <br />
          <span className="text-evergreen-300">{t.hero.titleLine2}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-silver-100 mb-10 font-light leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/mission"
            className="px-8 py-4 bg-evergreen-500 hover:bg-evergreen-400 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-evergreen-500/30 flex items-center gap-2 group"
          >
            {t.hero.missionButton}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/donate"
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-evergreen-900 rounded-full font-bold text-lg transition-all"
          >
            {t.hero.supportButton}
          </Link>
        </div>
      </div>

      {/* Scroll indicator - Only show on home page when scrolling is expected? We'll leave it as a visual decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-silver-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;