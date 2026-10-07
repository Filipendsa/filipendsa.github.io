import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import type { Language } from '../../i18n/locales';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const handleSelect = (lang: Language) => () => {
    setLanguage(lang);
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language selection">
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={handleSelect('en')}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={handleSelect('pt')}
        aria-label="Português"
      >
        PT
      </button>
      <button
        type="button"
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={handleSelect('es')}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
};
