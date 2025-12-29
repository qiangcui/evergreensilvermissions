import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-silver-900 border-t border-silver-800 py-8 text-silver-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-silver-500 text-sm mb-2 max-w-2xl">{(t.contact.footer as any).legalNotice}</p>
          <p className="text-silver-500 text-sm">
            © 2026 {t.contact.footer.rights}
          </p>
        </div>
        <div className="flex gap-6 text-sm text-silver-500">
          <Link to="/privacy" className="hover:text-white transition-colors">{t.contact.footer.privacy}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t.contact.footer.terms}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;