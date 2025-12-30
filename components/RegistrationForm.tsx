import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const RegistrationForm: React.FC = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        program: '',
        comments: ''
    });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyXOwsZyt3NDt9rcrtFVR1f7Jo0PmbchwnFLF82nn_rpcPQ3-17QspL-zDP9h55GAyj/exec';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');

        try {
            // Using fetch with no-cors or standard CORS depends on Apps Script configuration
            // Standard fetch to Apps Script Web App:
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple redirects
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Since 'no-cors' doesn't return response body, we assume success if no error is thrown
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', program: '', comments: '' });
        } catch (error) {
            console.error('Registration error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-evergreen-100 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-evergreen-100 text-evergreen-600 rounded-full mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-silver-900 mb-4">{t.registration.success}</h3>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-evergreen-600 font-bold hover:text-evergreen-700 transition-colors"
                >
                    {t.registration.submit}
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-silver-100">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-silver-700 mb-2">
                            {t.registration.name} *
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.registration.placeholderName}
                            className="w-full px-4 py-3 rounded-lg border border-silver-200 focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-silver-700 mb-2">
                            {t.registration.phone} *
                        </label>
                        <input
                            required
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t.registration.placeholderPhone}
                            className="w-full px-4 py-3 rounded-lg border border-silver-200 focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-silver-700 mb-2">
                        {t.registration.email}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.registration.placeholderEmail}
                        className="w-full px-4 py-3 rounded-lg border border-silver-200 focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="program" className="block text-sm font-bold text-silver-700 mb-2">
                        {t.registration.program} *
                    </label>
                    <select
                        required
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-silver-200 focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500 outline-none transition-all bg-white"
                    >
                        <option value="">-- {t.registration.program} --</option>
                        <option value="seminar">{t.registration.programs.seminar}</option>
                        <option value="mission">{t.registration.programs.mission}</option>
                        <option value="bible">{t.registration.programs.bible}</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comments" className="block text-sm font-bold text-silver-700 mb-2">
                        {t.registration.comments}
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder={t.registration.placeholderComments}
                        className="w-full px-4 py-3 rounded-lg border border-silver-200 focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500 outline-none transition-all resize-none"
                    />
                </div>

                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertCircle size={20} />
                        <span className="text-sm font-medium">{t.registration.error}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-evergreen-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-evergreen-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <Send size={20} />
                    )}
                    {t.registration.submit}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
