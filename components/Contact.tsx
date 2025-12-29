import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-silver-900 text-silver-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-silver-400 mb-8 leading-relaxed break-keep">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-silver-800 rounded-lg text-evergreen-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.visit}</h4>
                  <p>123 Serenity Lane, Silver Springs<br />CA 90210, United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-silver-800 rounded-lg text-evergreen-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.call}</h4>
                  <p>+1 (555) 123-4567<br /><span className="text-sm text-silver-500">Mon-Fri, 9am - 5pm</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-silver-800 rounded-lg text-evergreen-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.email}</h4>
                  <p>hello@evergreensilver.org<br />volunteers@evergreensilver.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-silver-800 p-8 rounded-2xl border border-silver-700">
            <h3 className="text-xl font-bold text-white mb-6">{t.contact.form.title}</h3>
            {submitted ? (
              <div className="bg-green-900/30 border border-green-800 text-green-200 p-4 rounded-lg flex items-center gap-2">
                <span className="text-xl">✨</span>
                <p>{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    data-lpignore="true"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-silver-900 border border-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-evergreen-500 focus:ring-1 focus:ring-evergreen-500"
                    placeholder={t.contact.form.placeholderName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    data-lpignore="true"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-silver-900 border border-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-evergreen-500 focus:ring-1 focus:ring-evergreen-500"
                    placeholder={t.contact.form.placeholderEmail}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    data-lpignore="true"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-silver-900 border border-silver-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-evergreen-500 focus:ring-1 focus:ring-evergreen-500"
                    placeholder={t.contact.form.placeholderMessage}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-evergreen-600 hover:bg-evergreen-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {t.contact.form.submit}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;