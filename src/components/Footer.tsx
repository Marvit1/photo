import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="py-12 bg-studio-charcoal text-studio-cream">
      <div className="container-studio">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-semibold">Abovyan 35</span>
            <p className="text-sm opacity-70 mt-1">Photo Studio</p>
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-70 text-center">
            © {currentYear} Kodak Abovyan 35 Photo Studio. {t.footer.rights}.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              {t.footer.privacy}
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>

      {/* Floating back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t.footer.backToTop ?? 'Back to top'}
        className={`fixed right-6 bottom-6 z-50 rounded-full bg-primary text-primary-foreground p-3 shadow-lg transition-transform transform ${showTop ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5 5 5" />
        </svg>
        <span className="sr-only">{t.footer.backToTop ?? 'Back to top'}</span>
      </button>
    </footer>
  );
}