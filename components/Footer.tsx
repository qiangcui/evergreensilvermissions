import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-silver-900 border-t border-silver-800 py-8 text-silver-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-silver-500 text-sm text-center md:text-left">
          © 2026 {t.contact.footer.rights}
        </p>
        <div className="flex flex-col items-center md:items-end gap-2 text-silver-500 text-sm">
          <p className="text-center md:text-right max-w-md italic opacity-70">
            {t.contact.footer.legalNotice}
          </p>
          <div className="flex gap-6 mt-1">
            <Link to="#" className="hover:text-white transition-colors">{t.contact.footer.privacy}</Link>
            <Link to="#" className="hover:text-white transition-colors">{t.contact.footer.terms}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;