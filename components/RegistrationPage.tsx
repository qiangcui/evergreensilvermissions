import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import RegistrationForm from './RegistrationForm';
import { ClipboardCheck } from 'lucide-react';

const RegistrationPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-16 min-h-screen bg-silver-50">
            {/* Hero Section */}
            <div className="relative bg-evergreen-900 py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
                        alt="Person writing in a notebook"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-evergreen-500/20 rounded-full mb-6 border border-evergreen-400/30">
                        <ClipboardCheck className="text-evergreen-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        {t.registration.title}
                    </h1>
                    <p className="text-evergreen-100 max-w-2xl mx-auto text-lg">
                        {t.registration.subtitle}
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <section className="py-16 -mt-12 relative z-20">
                <div className="max-w-3xl mx-auto px-4">
                    <RegistrationForm />
                </div>
            </section>

            {/* Extra Info */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-8 rounded-2xl border border-silver-100 shadow-sm">
                        <h2 className="text-2xl font-serif font-bold text-silver-900 mb-4">{t.contactPage.faqTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                            {t.contactPage.faqs.slice(0, 2).map((faq, idx) => (
                                <div key={idx}>
                                    <h3 className="font-bold text-evergreen-700 mb-2">Q: {faq.q}</h3>
                                    <p className="text-silver-600 text-sm">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegistrationPage;
