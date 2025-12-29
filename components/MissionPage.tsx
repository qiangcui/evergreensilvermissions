import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Users, Book, Star } from 'lucide-react';
import MissionSection from './MissionSection';

const MissionPage: React.FC = () => {
  const { t } = useLanguage();

  const valuesIcons = [Heart, Users, Book, Star];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Page Hero */}
      <div className="relative h-[400px] bg-evergreen-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
          alt="Mist-covered mountains symbolizing a spiritual journey"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center px-4">
            {t.missionPage.heroTitle}
          </h1>
        </div>
      </div>

      {/* Re-use the nice summary section but maybe without the ID for scrolling */}
      <MissionSection />

      {/* History & Story */}
      <section className="py-20 bg-silver-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-silver-900 mb-8">{t.missionPage.historyTitle}</h2>
          <p className="text-lg text-silver-700 leading-relaxed font-light">
            {t.missionPage.historyText}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-silver-900 mb-16">{t.missionPage.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.missionPage.values.map((value, index) => {
              const Icon = valuesIcons[index];
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-evergreen-50 transition-colors">
                  <div className="inline-block p-4 bg-evergreen-100 text-evergreen-700 rounded-full mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-silver-900 mb-3">{value.title}</h3>
                  <p className="text-silver-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-evergreen-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-16">{t.missionPage.teamTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.missionPage.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-evergreen-700">
                  <img src={`https://i.pravatar.cc/300?img=${index + 10}`} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-evergreen-300 font-medium mb-3">{member.role}</p>
                <p className="text-silver-300 text-sm max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;