 import { useLanguage } from '@/i18n/LanguageContext';
 
 export default function Footer() {
   const { t } = useLanguage();
   const currentYear = new Date().getFullYear();
 
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
     </footer>
   );
 }