 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
 import { useLanguage } from '@/i18n/LanguageContext';
 import { locales, localeNames, Locale } from '@/i18n/translations';
 
 export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
   const [isDark, setIsDark] = useState(false);
   const { locale, setLocale, t } = useLanguage();
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 20);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   useEffect(() => {
     const savedTheme = localStorage.getItem('studio-theme');
     if (savedTheme === 'dark') {
       setIsDark(true);
       document.documentElement.classList.add('dark');
     }
   }, []);
 
   const toggleTheme = () => {
     setIsDark(!isDark);
     if (!isDark) {
       document.documentElement.classList.add('dark');
       localStorage.setItem('studio-theme', 'dark');
     } else {
       document.documentElement.classList.remove('dark');
       localStorage.setItem('studio-theme', 'light');
     }
   };
 
   const navItems = [
     { key: 'services', href: '#services' },
     { key: 'restoration', href: '#restoration' },
     { key: 'products', href: '#products' },
     { key: 'gallery', href: '#gallery' },
     { key: 'contact', href: '#contact' },
   ] as const;
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
     setIsMobileMenuOpen(false);
   };
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
         isScrolled
           ? 'bg-background/95 backdrop-blur-md shadow-sm'
           : 'bg-transparent'
       }`}
     >
       <div className="container-studio">
         <nav className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a href="#" className="flex items-center gap-2">
             <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              

Kodak Abovyan 35
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navItems.map((item) => (
               <button
                 key={item.key}
                 onClick={() => scrollToSection(item.href)}
                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
               >
                 {t.nav[item.key]}
               </button>
             ))}
           </div>
 
           {/* Right side controls */}
           <div className="flex items-center gap-2">
             {/* Language Switcher */}
             <div className="relative">
               <button
                 onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                 className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
               >
                 <Globe className="w-4 h-4" />
                 <span className="hidden sm:inline">{localeNames[locale]}</span>
               </button>
               <AnimatePresence>
                 {isLangMenuOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     className="absolute right-0 mt-2 py-2 bg-card border border-border rounded-md shadow-lg min-w-[140px]"
                   >
                     {locales.map((loc) => (
                       <button
                         key={loc}
                         onClick={() => {
                           setLocale(loc as Locale);
                           setIsLangMenuOpen(false);
                         }}
                         className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                           locale === loc
                             ? 'text-primary bg-primary/5'
                             : 'text-foreground hover:bg-muted'
                         }`}
                       >
                         {localeNames[loc]}
                       </button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
 
             {/* Theme Toggle */}
             <button
               onClick={toggleTheme}
               className="p-2 text-muted-foreground hover:text-foreground transition-colors"
               aria-label="Toggle theme"
             >
               {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
             </button>
 
             {/* Mobile Menu Button */}
             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 text-foreground"
               aria-label="Toggle menu"
             >
               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
           </div>
         </nav>
 
         {/* Mobile Menu */}
         <AnimatePresence>
           {isMobileMenuOpen && (
             <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: 'auto' }}
               exit={{ opacity: 0, height: 0 }}
               className="md:hidden overflow-hidden bg-background border-t border-border"
             >
               <div className="py-4 space-y-2">
                 {navItems.map((item) => (
                   <button
                     key={item.key}
                     onClick={() => scrollToSection(item.href)}
                     className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-colors"
                   >
                     {t.nav[item.key]}
                   </button>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </header>
   );
 }