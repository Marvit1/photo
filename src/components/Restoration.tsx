 import { motion } from 'framer-motion';
 import { Check } from 'lucide-react';
 import { useLanguage } from '@/i18n/LanguageContext';
import restorationDemo from '@/assets/restoration-demo.jpg';
import aramImg from '@/assets/aram.jpg';
 
 export default function Restoration() {
   const { t } = useLanguage();
 
   const features = [
     t.restoration.features.damage,
     t.restoration.features.color,
     t.restoration.features.fade,
     t.restoration.features.scratch,
   ];
 
   const formats = [
     t.restoration.printing.wallet,
     t.restoration.printing.standard,
     t.restoration.printing.medium,
     t.restoration.printing.large,
     t.restoration.printing.poster,
     t.restoration.printing.custom,
   ];
 
   return (
     <section id="restoration" className="section-padding bg-studio-cream">
       <div className="container-studio">
         {/* Photo Restoration */}
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
               {t.restoration.title}
             </h2>
             <p className="text-primary font-medium mb-6">
               {t.restoration.subtitle}
             </p>
             <p className="text-muted-foreground leading-relaxed mb-8">
               {t.restoration.description}
             </p>
             
             <ul className="grid grid-cols-2 gap-3">
               {features.map((feature, index) => (
                 <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                   <Check className="w-4 h-4 text-primary flex-shrink-0" />
                   <span>{feature}</span>
                 </li>
               ))}
             </ul>
           </motion.div>
 
           {/* Before/After Placeholder */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
           >
             <div className="photo-frame">
              <img
                src={restorationDemo}
                alt="Photo restoration before and after"
                className="w-full h-auto rounded"
              />
              <div className="flex justify-between mt-3 px-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {t.restoration.before}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {t.restoration.after}
                </span>
              </div>
             </div>
           </motion.div>
         </div>
 
         {/* Printing Section */}
         <div className="gold-line mb-24" />
         
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="order-2 lg:order-1"
           >
             <div className="photo-frame">
               <div className="aspect-video rounded overflow-hidden">
                 <img
                   src={aramImg}
                   alt="Print sizes example"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="order-1 lg:order-2"
           >
             <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
               {t.restoration.printing.title}
             </h2>
             <p className="text-primary font-medium mb-6">
               {t.restoration.printing.subtitle}
             </p>
             <p className="text-muted-foreground leading-relaxed mb-8">
               {t.restoration.printing.description}
             </p>
             
             <div>
               <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                 {t.restoration.printing.formats}
               </h4>
               <div className="grid grid-cols-2 gap-2">
                 {formats.map((format, index) => (
                   <div
                     key={index}
                     className="px-4 py-2 bg-background border border-border rounded text-sm text-muted-foreground"
                   >
                     {format}
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }