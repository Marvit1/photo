 import { motion } from 'framer-motion';
 import { ChevronDown } from 'lucide-react';
 import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/hop.png';
 
 export default function Hero() {
   const { t } = useLanguage();
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   };
 
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abovyan 35 Photo Studio"
          className="w-full h-full object-cover filter-vintage"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
       
       {/* Content */}
       <div className="container-studio relative z-10 text-center pt-20">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: 'easeOut' }}
         >
           {/* Decorative line */}
           <div className="flex items-center justify-center gap-4 mb-8">
             <span className="w-12 h-px bg-primary/40" />
             <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans">
               Est. 2002
             </span>
             <span className="w-12 h-px bg-primary/40" />
           </div>
 
           {/* Main title */}
           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 tracking-tight">
             {t.hero.studio}
           </h1>
 
           {/* Slogan */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-4"
           >
             {t.hero.slogan}
           </motion.p>
 
           {/* Tagline */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12"
           >
             {t.hero.tagline}
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7, duration: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <button
               onClick={() => scrollToSection('#services')}
               className="btn-studio-primary min-w-[180px]"
             >
               {t.hero.cta}
             </button>
             <button
               onClick={() => scrollToSection('#contact')}
               className="btn-studio-outline min-w-[180px]"
             >
               {t.hero.findUs}
             </button>
           </motion.div>
         </motion.div>
 
         {/* Scroll indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2, duration: 0.6 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
           <motion.button
             onClick={() => scrollToSection('#services')}
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
             className="text-muted-foreground hover:text-foreground transition-colors"
             aria-label="Scroll down"
           >
             <ChevronDown className="w-6 h-6" />
           </motion.button>
         </motion.div>
       </div>
     </section>
   );
 }