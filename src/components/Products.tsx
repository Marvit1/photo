 import { motion } from 'framer-motion';
 import { useLanguage } from '@/i18n/LanguageContext';
import imgFrames from '../assets/gallery-portrait-1.jpg';
import imgAlbum from '../assets/gallery-family.jpg';
import imgPrints from '../assets/fot.jpg';
import imgDigital from '../assets/hero-studio.jpg';
 
 export default function Products() {
   const { t } = useLanguage();
 
   const products = [
    { key: 'frames', image: imgFrames, ...t.products.frames },
    { key: 'album', image: imgAlbum, ...t.products.album },
    { key: 'prints', image: imgPrints, ...t.products.prints },
    { key: 'digital', image: imgDigital, ...t.products.digital },
  ];

   return (
     <section id="products" className="section-padding bg-background">
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
             {t.products.title}
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             {t.products.subtitle}
           </p>
           <div className="gold-line max-w-xs mx-auto mt-8" />
         </motion.div>
 
         {/* Products Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.map((product, index) => (
             <motion.div
               key={product.key}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group"
             >
               <div className="photo-frame h-full">
                 <div className="aspect-square bg-gradient-to-br from-muted/50 to-card flex items-center justify-center mb-4 rounded overflow-hidden group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500">
                  {product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {product.emoji}
                    </span>
                  )}
                 </div>
                 <h3 className="font-serif text-lg text-foreground mb-1">
                   {product.title}
                 </h3>
                 <p className="text-primary font-medium text-sm">
                   {product.price}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }