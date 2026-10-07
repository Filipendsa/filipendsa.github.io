import React, { useState, useEffect, useMemo } from 'react';
import type { Language, TranslationKey } from '../../shared/i18n/locales';
import { locales } from '../../shared/i18n/locales';
import { I18nContext } from '../../shared/i18n/I18nContext';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'pt' || saved === 'es') {
      return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-br' : language;
  }, [language]);

  const value = useMemo(() => {
    const currentLocale = locales[language];
    return {
      language,
      setLanguage,
      t: (key: TranslationKey): string => {
        return currentLocale[key] || locales.en[key] || key;
      }
    };
  }, [language]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};
