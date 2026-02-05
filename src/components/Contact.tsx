 import { motion } from 'framer-motion';
 import { MapPin, Phone, Clock, Mail } from 'lucide-react';
 import { useLanguage } from '@/i18n/LanguageContext';
 import Map from './Map';
 
 export default function Contact() {
   const { t } = useLanguage();
 
   const contactInfo = [
     {
       icon: MapPin,
       label: t.contact.address,
       value: t.contact.addressValue,
      link: t.contact.addressLink,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: t.contact.phoneValue,
     },
     {
       icon: Mail,
       label: t.contact.email,
       value: t.contact.emailValue,
     },
   ];
 
   return (
     <section id="contact" className="section-padding bg-background">
       <div className="container-studio">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
             {t.contact.title}
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             {t.contact.subtitle}
           </p>
           <div className="gold-line max-w-xs mx-auto mt-8" />
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
           {/* Contact Information */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="space-y-8">
               {contactInfo.map((info, index) => {
                 const IconComponent = info.icon;
                 return (
                   <div key={index} className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                       <IconComponent className="w-5 h-5" />
                     </div>
                     <div>
                       <h4 className="font-medium text-foreground mb-1">
                         {info.label}
                       </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground whitespace-pre-line text-sm underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line text-sm">
                          {info.value}
                        </p>
                      )}
                     </div>
                   </div>
                 );
               })}
             </div>
 
             {/* Social Links */}
             <div className="mt-10 pt-8 border-t border-border">
               <div className="flex gap-4">
                 {['facebook', 'instagram', 'telegram'].map((social) => (
                   <a
                     key={social}
                     href="#"
                     className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                     aria-label={social}
                   >
                     <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                   </a>
                 ))}
               </div>
             </div>
           </motion.div>
 
           {/* Map */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <div className="photo-frame h-full min-h-[400px]">
               <Map />
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }