import React from 'react';
import { Gift, HandHeart, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Donate: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Gift, HandHeart, Calendar];

  return (
    <section id="donate" className="py-20 bg-evergreen-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute left-10 bottom-10 w-64 h-64 border-4 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{t.donate.title}</h2>
          <p className="max-w-2xl mx-auto text-evergreen-100 text-lg break-keep">
            {t.donate.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.donate.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-evergreen-700/50 backdrop-blur-sm border border-evergreen-600 p-8 rounded-2xl hover:bg-evergreen-700 transition-colors">
                <Icon className="w-12 h-12 text-evergreen-300 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-evergreen-100 mb-6 break-keep">
                  {card.description}
                </p>
                <button className={`w-full py-3 font-bold rounded-lg transition-colors ${
                    index === 0 
                    ? 'bg-white text-evergreen-800 hover:bg-evergreen-50' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-evergreen-800'
                }`}>
                  {card.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Donate;