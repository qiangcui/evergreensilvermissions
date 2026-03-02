import React, { useEffect, useState } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { getDailyInspiration } from '../services/geminiService';
import { DailyVerse } from '../types';
import { useLanguage } from '../context/LanguageContext';

const MissionSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [inspiration, setInspiration] = useState<DailyVerse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Hardcoded fallback data to completely bypass API
    const staticData = language === 'ko' ? {
      text: "백발은 영화의 면류관이라 공의로운 길에서 얻으리라",
      reference: "잠언 16:31",
      reflection: "살아온 모든 날들이 하나님의 은혜이자 지혜의 증거입니다."
    } : {
      text: "Gray hair is a crown of splendor; it is attained in the way of righteousness.",
      reference: "Proverbs 16:31",
      reflection: "Every year lived is a testament to grace and wisdom gained along the journey."
    };

    setLoading(true);
    // Simulate slight delay for effect, but no API call
    const timer = setTimeout(() => {
      setInspiration(staticData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [language]);

  return (
    <section id="mission" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-evergreen-100 text-evergreen-800 rounded-full text-sm font-bold tracking-wide uppercase">
              {t.mission.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif font-bold text-silver-900 leading-tight">
              {t.mission.titleLine1} <br />
              <span className="text-evergreen-600">{t.mission.titleLine2}</span>
            </h2>
            <div className="space-y-4 text-lg text-silver-600 break-keep">
              <p>
                {t.mission.p1}
              </p>
              <p>
                {t.mission.p2}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-silver-200">
              <div>
                <div className="text-3xl font-bold text-evergreen-600">500+</div>
                <div className="text-sm text-silver-500 uppercase tracking-wide mt-1 break-keep">{t.mission.stats.served}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-evergreen-600">120+</div>
                <div className="text-sm text-silver-500 uppercase tracking-wide mt-1 break-keep">{t.mission.stats.volunteers}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-evergreen-600">24/7</div>
                <div className="text-sm text-silver-500 uppercase tracking-wide mt-1 break-keep">{t.mission.stats.care}</div>
              </div>
            </div>
          </div>

          {/* Dynamic Card */}
          <div className="relative">
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-evergreen-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-silver-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-silver-100">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-silver-800">{t.mission.inspiration.title}</h3>
              </div>

              {!loading && inspiration ? (
                <div className="animate-fade-in">
                  <Quote size={40} className="text-evergreen-200 mb-4" />
                  <p className="text-2xl font-serif text-silver-800 italic mb-4 leading-relaxed break-keep">
                    "{inspiration.text}"
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-silver-100 pt-4">
                    <span className="font-bold text-evergreen-700">— {inspiration.reference}</span>
                  </div>
                  <p className="mt-4 text-sm text-silver-500 bg-silver-50 p-3 rounded-lg border border-silver-100 break-keep">
                    <span className="font-bold text-evergreen-600">{t.mission.inspiration.reflection}</span> {inspiration.reflection}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 space-y-4 min-h-[250px]">
                  <div className="w-8 h-8 border-4 border-evergreen-200 border-t-evergreen-600 rounded-full animate-spin"></div>
                  <p className="text-silver-400 text-sm">{t.mission.inspiration.loading}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;