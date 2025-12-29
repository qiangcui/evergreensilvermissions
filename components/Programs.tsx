import React from 'react';
import { Coffee, Home, Music, Users, BookOpen, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch(index) {
        case 0: return <Home className="w-6 h-6" />;
        case 1: return <Coffee className="w-6 h-6" />;
        case 2: return <Music className="w-6 h-6" />;
        case 3: return <Users className="w-6 h-6" />;
        case 4: return <BookOpen className="w-6 h-6" />;
        case 5: return <HeartHandshake className="w-6 h-6" />;
        default: return <Home className="w-6 h-6" />;
    }
  };

  const getValues = (index: number) => {
    // Stable random-like images based on index
    const images = [
        "https://picsum.photos/400/300?random=1",
        "https://picsum.photos/400/300?random=2",
        "https://picsum.photos/400/300?random=3",
        "https://picsum.photos/400/300?random=4",
        "https://picsum.photos/400/300?random=5",
        "https://picsum.photos/400/300?random=6"
    ];
    return images[index];
  };

  return (
    <section id="programs" className="py-20 bg-silver-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-silver-900 mb-4">{t.programs.title}</h2>
          <p className="max-w-2xl mx-auto text-silver-600 text-lg break-keep">
            {t.programs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.programs.items.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-silver-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getValues(index)} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-evergreen-600">
                  {getIcon(index)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-silver-900 mb-2 font-serif group-hover:text-evergreen-700 transition-colors">
                  {program.title}
                </h3>
                <p className="text-silver-600 leading-relaxed break-keep">
                  {program.description}
                </p>
                <Link to="/contact" className="inline-block mt-4 text-evergreen-600 font-bold text-sm hover:underline">
                  {t.programs.learnMore} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;