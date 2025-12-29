import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Donate from './Donate';
import { CreditCard, Landmark, Check, Gift } from 'lucide-react';

const DonatePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-silver-50">
       {/* Hero */}
       <div className="bg-evergreen-900 py-20 text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
             <Gift className="mx-auto w-16 h-16 text-evergreen-300 mb-6" />
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.donate.title}</h1>
             <p className="text-xl text-evergreen-100">{t.donate.subtitle}</p>
          </div>
       </div>

       {/* Impact Metrics */}
       <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-16">{t.donatePage.impactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.donatePage.impactItems.map((item, index) => (
                <div key={index} className="bg-silver-50 rounded-2xl p-8 text-center border border-silver-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-evergreen-600 mb-4">{item.amount}</div>
                  <p className="text-lg text-silver-700">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
       </section>

       {/* Use the cards section */}
       <Donate />

       {/* Detailed Giving Info */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               
               {/* Bank Info */}
               <div>
                  <h3 className="text-2xl font-serif font-bold text-silver-900 mb-8 flex items-center gap-3">
                     <Landmark className="text-evergreen-600" />
                     {t.donatePage.bankTitle}
                  </h3>
                  <div className="bg-silver-50 p-8 rounded-xl border border-silver-200 font-mono text-silver-700 whitespace-pre-line">
                     {t.donatePage.bankInfo}
                  </div>
                  <div className="mt-8">
                    <button className="w-full bg-evergreen-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-evergreen-700 flex items-center justify-center gap-2">
                        <CreditCard />
                        Donate Online (Secure)
                    </button>
                  </div>
               </div>

               {/* Needs List */}
               <div>
                  <h3 className="text-2xl font-serif font-bold text-silver-900 mb-2">{t.donatePage.needsTitle}</h3>
                  <p className="text-silver-600 mb-8">{t.donatePage.needsSubtitle}</p>
                  <ul className="space-y-4">
                     {t.donatePage.needsList.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-silver-100">
                           <div className="bg-green-100 text-green-700 p-1 rounded-full">
                              <Check size={16} />
                           </div>
                           <span className="font-medium text-silver-800">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>

            </div>
         </div>
       </section>
    </div>
  );
};

export default DonatePage;