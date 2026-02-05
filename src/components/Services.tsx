 import { motion } from 'framer-motion';
 import { Camera, Image, Sparkles, Printer, Palette, Frame, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
 import { useLanguage } from '@/i18n/LanguageContext';
 
 const serviceIcons = {
   passport: Camera,
   lifestyle: Image,
   restoration: Sparkles,
   printing: Printer,
   retouching: Palette,
   framing: Frame,
 };
 
 export default function Services() {
   const { t } = useLanguage();
 
   const services = [
     { key: 'passport' as const, ...t.services.passport },
     { key: 'lifestyle' as const, ...t.services.lifestyle },
     { key: 'restoration' as const, ...t.services.restoration },
     { key: 'printing' as const, ...t.services.printing },
     { key: 'retouching' as const, ...t.services.retouching },
     { key: 'framing' as const, ...t.services.framing },
   ];
 
   return (
     <section id="services" className="section-padding bg-background">
       <div className="container-studio">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
             {t.services.title}
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             {t.services.subtitle}
           </p>
           <div className="gold-line max-w-xs mx-auto mt-8" />
         </motion.div>
 
         {/* Services Grid */}
         {/* Passport block - wide at top */}
         {(() => {
           const passportService = services.find((s) => s.key === 'passport');
           const otherServices = services.filter((s) => s.key !== 'passport');
           const [menuOpen, setMenuOpen] = useState(false);
           const menuRef = useRef<HTMLDivElement | null>(null);

           useEffect(() => {
             const onDoc = (e: MouseEvent) => {
               if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                 setMenuOpen(false);
               }
             };
             document.addEventListener('mousedown', onDoc);
             return () => document.removeEventListener('mousedown', onDoc);
           }, []);

           return (
             <>
               {passportService && (
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: '-50px' }}
                   transition={{ duration: 0.5 }}
                   className="service-card group bg-primary/5 p-6 lg:p-8 rounded-lg"
                 >
                   <div className="flex flex-col md:flex-row items-start gap-6">
                     <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                       {(() => {
                         const PassportIcon = serviceIcons.passport;
                         return PassportIcon ? <PassportIcon className="w-6 h-6" /> : null;
                       })()}
                     </div>
                     <div className="flex-1">
                       <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                         <div className="md:flex-1">
                           <h3 className="font-serif text-2xl text-foreground mb-2">{passportService.title}</h3>
                           <p className="text-muted-foreground text-sm leading-relaxed mb-4">{passportService.desc}</p>

                            <p className="mt-3 text-sm text-muted-foreground">{t.services.passport.emailNote}</p>

                          {/* Split button: primary Gmail compose + dropdown for mail app */}
                          <div className="mt-3 text-center relative ">
                            <div className="inline-flex rounded-md shadow-sm my-20">
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=kodakabovyan35@gmail.com&su=${encodeURIComponent('Passport photo submission')}&body=${encodeURIComponent('Hello,\n\nI would like to submit photos for printing. Please attach your files to this email.\n\nName:\nPhone:\nService: Passport photos\n\nThank you.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-l-md font-semibold hover:opacity-95 w-full sm:w-auto text-center"
                              >
                                Send Photos
                              </a>
                              <button
                                type="button"
                                onClick={() => setMenuOpen((s) => !s)}
                                className="inline-flex items-center justify-center px-3 bg-primary text-primary-foreground rounded-r-md border-l border-primary/30"
                                aria-haspopup="true"
                                aria-expanded={menuOpen}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>

                            {menuOpen && (
                              <div
                                ref={menuRef}
                                className="absolute z-30 mt-2 right-0 w-44 bg-background border border-border rounded shadow-md py-1"
                              >
                                <a
                                  href={`mailto:kodakabovyan35@gmail.com?subject=${encodeURIComponent('Passport photo submission')}&body=${encodeURIComponent('Hello,\n\nI would like to submit photos for printing. Please attach your files to this email.\n\nName:\nPhone:\nService: Passport photos\n\nThank you.')}`}
                                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  Open in Mail App
                                </a>
                              </div>
                            )}
                          </div>
                         </div>

                         <div className="md:w-1/3">
                           <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3"></h4>
                           <div className="space-y-3">
                             {t.services.passport.features?.map((f, i) => (
                               <div key={i} className="flex items-start gap-3">
                                 <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                 <p className="text-sm text-muted-foreground leading-relaxed">{f}</p>
                               </div>
                             ))}
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}

               {/* Other services grid underneath */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
                 {otherServices.map((service, index) => {
                   const IconComponent = serviceIcons[service.key as keyof typeof serviceIcons];
                   return (
                     <motion.div
                       key={service.key}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: '-50px' }}
                       transition={{ duration: 0.5, delay: index * 0.07 }}
                       className="service-card group"
                     >
                       <div className="flex items-start gap-4">
                         <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                           <IconComponent className="w-5 h-5" />
                         </div>
                         <div>
                           <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                           <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                         </div>
                       </div>
                     </motion.div>
                   );
                 })}
               </div>
             </>
           );
         })()}
       </div>
     </section>
   );
 }