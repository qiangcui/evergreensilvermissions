import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Contact from './Contact';
import { HelpCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-16 min-h-screen bg-silver-900">
            {/* Contact Form Section */}
            <Contact />

            {/* Map Placeholder */}
            <div className="h-96 w-full bg-silver-800 relative group overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220364426!2d-118.40035658476204!3d34.07604308059868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1645564858452!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Map"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs text-silver-900">
                    <p className="font-bold">Evergreen HQ</p>
                    <p className="text-sm">123 Serenity Lane</p>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <HelpCircle className="text-evergreen-600" size={32} />
                        <h2 className="text-3xl font-serif font-bold text-silver-900">{t.contactPage.faqTitle}</h2>
                    </div>

                    <div className="space-y-6">
                        {t.contactPage.faqs.map((faq, index) => (
                            <div key={index} className="bg-silver-50 rounded-xl p-6 border border-silver-100">
                                <h3 className="text-lg font-bold text-silver-900 mb-3">{faq.q}</h3>
                                <p className="text-silver-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;