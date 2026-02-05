 import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
 import { Locale, translations, locales } from './translations';
 
 type LanguageContextType = {
   locale: Locale;
   setLocale: (locale: Locale) => void;
   t: typeof translations.en;
 };
 
 const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
 
 export function LanguageProvider({ children }: { children: React.ReactNode }) {
   const [locale, setLocaleState] = useState<Locale>(() => {
     if (typeof window !== 'undefined') {
       const saved = localStorage.getItem('studio-locale') as Locale;
       if (saved && locales.includes(saved)) {
         return saved;
       }
       // Detect browser language
       const browserLang = navigator.language.slice(0, 2);
       if (browserLang === 'ru') return 'ru';
       if (browserLang === 'hy') return 'hy';
     }
     return 'en';
   });
 
   const setLocale = useCallback((newLocale: Locale) => {
     setLocaleState(newLocale);
     localStorage.setItem('studio-locale', newLocale);
   }, []);
 
   useEffect(() => {
     document.documentElement.lang = locale;
   }, [locale]);
 
   const t = translations[locale];
 
   return (
     <LanguageContext.Provider value={{ locale, setLocale, t }}>
       {children}
     </LanguageContext.Provider>
   );
 }
 
 export function useLanguage() {
   const context = useContext(LanguageContext);
   if (!context) {
     throw new Error('useLanguage must be used within a LanguageProvider');
   }
   return context;
 }