 import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
 import { useLanguage } from '@/i18n/LanguageContext';
import galleryNjik from '../assets/njik.jpg';
import galleryNkast from '../assets/nkast.jpg';
import galleryNker from '../assets/nker.jpg';
import galleryNka from '../assets/nka.jpg';
import galleryNko from '../assets/nko.jpg';
import galleryMer from '../assets/mer.jpg';
import galleryNk from '../assets/nk.jpg';
import galleryNkia from '../assets/nkia.jpg';
import galleryNkj from '../assets/nkj.jpg';
import galleryNkuo from '../assets/nkuo.jpg';
import galleryNm from '../assets/nm.jpg';

 
 export default function Gallery() {
   const { t } = useLanguage();
 
   // Placeholder gallery items with varied heights for masonry effect
   const galleryItems = [
    { id: 1, aspect: 'aspect-square', label: 'Nkast', image: galleryNkast },
    { id: 2, aspect: 'aspect-square', label: 'NKO', image: galleryNko },
    { id: 3, aspect: 'aspect-square', label: 'Njik', image: galleryNjik },
    { id: 4, aspect: 'aspect-square', label: 'Nker', image: galleryNker },
    { id: 5, aspect: 'aspect-square', label: 'NKA', image: galleryNka },
    { id: 7, aspect: 'aspect-square', label: 'Mer', image: galleryMer },
    { id: 8, aspect: 'aspect-square', label: 'NK', image: galleryNk },
    { id: 11, aspect: 'aspect-square', label: 'Nkia', image: galleryNkia },
    { id: 12, aspect: 'aspect-square', label: 'Nkj', image: galleryNkj },
    { id: 13, aspect: 'aspect-square', label: 'Nkuo', image: galleryNkuo },
    { id: 14, aspect: 'aspect-square', label: 'Nm', image: galleryNm },
    
   ];

   // Entrance offset helper — creates a mixed origin for the reveal animation
   const getOffset = (i: number) => {
     const offsets = [
       { x: -60, y: -10, rotate: -6 },
       { x: 60, y: 10, rotate: 6 },
       { x: -30, y: 40, rotate: -4 },
       { x: 30, y: -40, rotate: 4 },
       { x: -45, y: 25, rotate: -5 },
     ];
     return offsets[i % offsets.length];
   };

  // Lightbox state & handlers
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => setLightboxIndex((i) => i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length), [galleryItems.length]);
  const showNext = useCallback(() => setLightboxIndex((i) => i === null ? null : (i + 1) % galleryItems.length), [galleryItems.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeLightbox, showPrev, showNext]);
 
   return (
     <section id="gallery" className="section-padding bg-studio-cream">
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
             {t.gallery.title}
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             {t.gallery.subtitle}
           </p>
           <div className="gold-line max-w-xs mx-auto mt-8" />
         </motion.div>
 
         {/* Gallery Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
           {galleryItems.map((item, index) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, scale: 0.95, ...getOffset(index) }}
               whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
               viewport={{ once: true, amount: 0.25 }}
               transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
               className="gallery-image"
             >
               <div className="photo-frame">
                <div className="rounded relative overflow-hidden flex items-center justify-center bg-muted min-h-[120px] md:min-h-[160px] lg:min-h-[200px]">
                  <img
                    src={item.image}
                    srcSet={`${item.image} 1x, ${item.image} 2x`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={item.label}
                    onClick={() => openLightbox(index)}
                    className="max-w-full max-h-full object-contain cursor-pointer"
                  />
                </div>
               </div>
             </motion.div>
           ))}
         </div>

         {/* Lightbox Modal */}
         {lightboxIndex !== null && (
           <div
             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
             role="dialog"
             aria-modal="true"
             onClick={closeLightbox}
           >
             <button
               className="absolute top-6 right-6 text-white text-2xl"
               onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
               aria-label="Close"
             >
               ✕
             </button>
             <button
               className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl"
               onClick={(e) => { e.stopPropagation(); showPrev(); }}
               aria-label="Previous"
             >
               ‹
             </button>
             <div className="max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
               <img
                 src={galleryItems[lightboxIndex].image}
                 alt={galleryItems[lightboxIndex].label}
                 className="max-w-full max-h-[80vh] object-contain"
               />
             </div>
             <button
               className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl"
               onClick={(e) => { e.stopPropagation(); showNext(); }}
               aria-label="Next"
             >
               ›
             </button>
           </div>
         )}
       </div>
     </section>
   );
 }