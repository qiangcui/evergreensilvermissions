import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Programs from './Programs';
import { Calendar, CheckCircle } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-silver-50">
      {/* Hero */}
      <div className="relative bg-evergreen-900 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic mountain landscape"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t.programs.title}
          </h1>
          <p className="text-evergreen-100 max-w-2xl mx-auto text-lg">
            {t.programs.subtitle}
          </p>
        </div>
      </div>

      {/* Reuse Card Grid */}
      <Programs />

      {/* Weekly Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-evergreen-600 font-bold uppercase tracking-wider text-sm">{t.programsPage.scheduleTitle}</span>
            <h2 className="text-3xl font-serif font-bold text-silver-900 mt-2">{t.programsPage.scheduleSubtitle}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-silver-200">
            <div className="grid grid-cols-5 bg-evergreen-600 text-white text-center py-4 font-bold text-sm sm:text-base">
              {t.programsPage.days.map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="divide-y divide-silver-100">
              {t.programsPage.events.map((item, idx) => (
                <div key={idx} className="grid grid-cols-5 py-6 hover:bg-silver-50 transition-colors">
                  <div className="col-span-1 flex items-center justify-center text-sm font-bold text-evergreen-700 border-r border-silver-100">
                    {item.time}
                  </div>
                  <div className="col-span-4 px-6 flex items-center text-silver-700">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-silver-50 text-center text-sm text-silver-500 italic border-t border-silver-100">
              * Schedule subject to change on holidays
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-evergreen-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-silver-900 mb-12">{t.programsPage.testimonialTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.programsPage.testimonials.map((testi, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-silver-100 relative">
                <div className="text-4xl text-evergreen-200 absolute top-4 left-4 font-serif">"</div>
                <p className="text-silver-700 text-lg italic mb-6 relative z-10 pt-4">{testi.quote}</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-evergreen-100 rounded-full flex items-center justify-center text-evergreen-600 font-bold">
                    {testi.author[0]}
                  </div>
                  <span className="font-bold text-silver-900">{testi.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;