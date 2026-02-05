 export type Locale = 'en' | 'ru' | 'hy';
 
 export const locales: Locale[] = ['en', 'ru', 'hy'];
 
 export const localeNames: Record<Locale, string> = {
   en: 'English',
   ru: 'Русский',
  hy: 'Հայերեն',
};
 
 type TranslationContent = {
   nav: {
     services: string;
     restoration: string;
     products: string;
     gallery: string;
     contact: string;
   };
   hero: {
     studio: string;
     slogan: string;
     tagline: string;
     cta: string;
     findUs: string;
   };
   services: {
     title: string;
     subtitle: string;
     passport: { title: string; desc: string; features?: string[]; emailNote?: string };
     lifestyle: { title: string; desc: string };
     restoration: { title: string; desc: string };
     printing: { title: string; desc: string };
     retouching: { title: string; desc: string };
     framing: { title: string; desc: string };
   };
   restoration: {
     title: string;
     subtitle: string;
     description: string;
     before: string;
     after: string;
     features: {
       damage: string;
       color: string;
       fade: string;
       scratch: string;
     };
     printing: {
       title: string;
       subtitle: string;
       description: string;
       formats: string;
       wallet: string;
       standard: string;
       medium: string;
       large: string;
       poster: string;
       custom: string;
     };
   };
   products: {
     title: string;
     subtitle: string;
     frames: { title: string; price: string };
     album: { title: string; price: string };
     prints: { title: string; price: string };
     digital: { title: string; price: string };
   };
   gallery: {
     title: string;
     subtitle: string;
   };
   contact: {
     title: string;
     subtitle: string;
     address: string;
     addressValue: string;
     addressLink?: string;
     phone: string;
     phoneValue: string;
     hours: string;
     hoursValue: string;
     email: string;
     emailValue: string;
   };
   footer: {
     rights: string;
     privacy: string;
     terms: string;
   };
 };
 
 export const translations: Record<Locale, TranslationContent> = {
   en: {
     nav: {
       services: 'Services',
       restoration: 'Restoration',
       products: 'Products',
       gallery: 'Gallery',
       contact: 'Contact',
     },
     hero: {
       studio: 'Kodak Abovyan 35',
       slogan: 'Capturing moments that last forever',
      /// tagline: 'Professional photography services & classic photo printing since 2002',
       cta: 'View Services',
       findUs: 'Find Us',
     },
     services: {
       title: 'Our Services',
       subtitle: 'Professional photography for every occasion',
       passport: {
         title: 'Passport & ID Photos',
         desc: 'Official document photos for passports, visas, and identification cards. Quick service with guaranteed acceptance.',
         features: [
           'Official embassy/document photos taken on-site in minutes.',
           'We follow embassy size and specification requirements.',
           'Receive a digital copy sent to your email immediately.',
           'You may email your photo to us and pick up printed copies later.',
         ],
         emailNote: 'Email your photos to us for printing and pickup.'
       },
       lifestyle: {
         title: 'Lifestyle Photography',
         desc: 'Casual portraits, family sessions, and lifestyle photography in our comfortable studio environment.',
       },
       restoration: {
         title: 'Photo Restoration',
         desc: 'Bring your precious memories back to life. We restore damaged, faded, and old photographs.',
       },
       printing: {
         title: 'Photo Printing',
         desc: 'High-quality prints on premium paper. From wallet size to large format posters.',
       },
       retouching: {
         title: 'Professional Retouching',
         desc: 'Expert photo editing and enhancement. Color correction, blemish removal, and artistic effects.',
       },
       framing: {
         title: 'Custom Framing',
         desc: 'Beautiful frames and albums to preserve and display your cherished photographs.',
       },
     },
     restoration: {
       title: 'Photo Restoration',
       subtitle: 'Preserving Your Precious Memories',
       description: 'Our expert technicians carefully restore damaged, faded, or torn photographs. Using advanced digital techniques, we bring your family treasures back to their original glory.',
       before: 'Before',
       after: 'After',
       features: {
         damage: 'Tear & damage repair',
         color: 'Color restoration',
         fade: 'Fade correction',
         scratch: 'Scratch removal',
       },
       printing: {
         title: 'Professional Printing',
         subtitle: 'Premium Quality Prints',
         description: 'From small snapshots to large gallery prints, we offer a variety of formats and materials.',
         formats: 'Available Formats',
         wallet: 'Wallet (3.5×5 cm)',
         standard: 'Standard (10×15 cm)',
         medium: 'Medium (15×20 cm)',
         large: 'Large (20×30 cm)',
         poster: 'Poster (30×45 cm)',
         custom: 'Custom sizes',
       },
     },
     products: {
       title: 'Photo Products',
       subtitle: 'Everything you need for your memories',
       frames: {
         title: 'Classic Wooden Frame',
         price: 'From $15',
       },
       album: {
         title: 'Premium Photo Album',
         price: 'From $35',
       },
       prints: {
         title: 'Ready Prints Collection',
         price: 'From $5',
       },
       digital: {
         title: 'Digital Frame',
         price: 'From $89',
       },
     },
     gallery: {
       title: 'Our Work',
       subtitle: 'A glimpse into our studio',
     },
     contact: {
       title: 'Visit Our Studio',
       subtitle: 'We would love to meet you',
       address: 'Address',
       addressValue: 'Abovyan 35\nYerevan, Armenia',
       addressLink: 'https://www.google.com/maps/search/?api=1&query=Abovyan+35+Yerevan+Armenia',
       phone: 'Phone',
       phoneValue: '+374 91 60 26 20',
       hours: 'Working Hours',
       hoursValue: 'Mon - Sat: 9:00 - 20:00\nSunday: Closed',
       email: 'Email',
       emailValue: 'kodakabovyan35@gmail.com',
     },
     footer: {
       rights: 'All rights reserved',
       privacy: 'Privacy Policy',
       terms: 'Terms of Service',
     },
   },
   ru: {
     nav: {
       services: 'Услуги',
       restoration: 'Реставрация',
       products: 'Товары',
       gallery: 'Галерея',
       contact: 'Контакты',
     },
     hero: {
       studio: 'Kodak Abovyan 35',
       slogan: 'Запечатлеваем моменты навсегда',
       ///tagline: 'Профессиональные фотоуслуги и классическая фотопечать с 2002 года',
       cta: 'Наши услуги',
       findUs: 'Как нас найти',
     },
     services: {
       title: 'Наши услуги',
       subtitle: 'Профессиональная фотография для любого случая',
       passport: {
         title: 'Фото на документы',
         desc: 'Фотографии для паспортов, виз и удостоверений личности. Быстрое обслуживание с гарантией принятия.',
         features: [
           'Официальные фотографии для посольств/документов делаем на месте за несколько минут.',
           'Мы соблюдаем требования по размерам и спецификациям посольств.',
           'Получите цифровую копию, отправленную на вашу почту мгновенно.',
           'Вы можете прислать нам фото по e-mail и забрать напечатанные копии позже.',
         ],
         emailNote: 'Отправьте ваши фотографии на наш e-mail для печати и получения.'
       },
       lifestyle: {
         title: 'Лайфстайл фотография',
         desc: 'Повседневные портреты, семейные сессии и лайфстайл фотография в уютной студийной обстановке.',
       },
       restoration: {
         title: 'Реставрация фото',
         desc: 'Верните жизнь вашим драгоценным воспоминаниям. Мы восстанавливаем поврежденные и выцветшие фотографии.',
       },
       printing: {
         title: 'Фотопечать',
         desc: 'Высококачественная печать на премиальной бумаге. От карманного формата до больших постеров.',
       },
       retouching: {
         title: 'Профессиональная ретушь',
         desc: 'Экспертное редактирование фотографий. Цветокоррекция, удаление дефектов и художественные эффекты.',
       },
       framing: {
         title: 'Багетная мастерская',
         desc: 'Красивые рамки и альбомы для сохранения и демонстрации ваших любимых фотографий.',
       },
     },
     restoration: {
       title: 'Реставрация фотографий',
       subtitle: 'Сохраняем ваши драгоценные воспоминания',
       description: 'Наши опытные специалисты бережно восстанавливают поврежденные, выцветшие или порванные фотографии. Используя передовые цифровые технологии, мы возвращаем семейным реликвиям их первоначальный вид.',
       before: 'До',
       after: 'После',
       features: {
         damage: 'Восстановление разрывов',
         color: 'Восстановление цвета',
         fade: 'Коррекция выцветания',
         scratch: 'Удаление царапин',
       },
       printing: {
         title: 'Профессиональная печать',
         subtitle: 'Премиальное качество печати',
         description: 'От маленьких снимков до больших галерейных отпечатков — мы предлагаем разные форматы и материалы.',
         formats: 'Доступные форматы',
         wallet: 'Карманный (3,5×5 см)',
         standard: 'Стандартный (10×15 см)',
         medium: 'Средний (15×20 см)',
         large: 'Большой (20×30 см)',
         poster: 'Постер (30×45 см)',
         custom: 'Нестандартные размеры',
       },
     },
     products: {
       title: 'Фототовары',
       subtitle: 'Всё для ваших воспоминаний',
       frames: {
         title: 'Классическая деревянная рамка',
         price: 'От 6000 ֏',
       },
       album: {
         title: 'Премиум фотоальбом',
         price: 'От 14000 ֏',
       },
       prints: {
         title: 'Коллекция готовых принтов',
         price: 'От 2000 ֏',
       },
       digital: {
         title: 'Цифровая фоторамка',
         price: 'От 35000 ֏',
       },
     },
     gallery: {
       title: 'Наши работы',
       subtitle: 'Заглянем в нашу студию',
     },
     contact: {
       title: 'Посетите нашу студию',
       subtitle: 'Мы будем рады встрече с вами',
       address: 'Адрес',
       addressValue: 'Abovyan 35\nYerevan, Armenia',
       addressLink: 'https://www.google.com/maps/search/?api=1&query=Abovyan+35+Yerevan+Armenia',
       phone: 'Телефон',
       phoneValue: '+374 91 60 26 20',
       hours: 'Часы работы',
       hoursValue: 'Пн - Сб: 9:00 - 20:00\nВоскресенье: Выходной',
       email: 'Эл. почта',
       emailValue: 'kodakabovyan35@gmail.com',
     },
     footer: {
       rights: 'Все права защищены',
       privacy: 'Политика конфиденциальности',
       terms: 'Условия использования',
     },
   },
   hy: {
     nav: {
       services: 'Ծառայություններ',
       restoration: 'Վերականգնում',
       products: 'Ապրանքներ',
       gallery: 'Պատկերասրահ',
       contact: 'Կոնտակտ',
     },
     hero: {
       studio: 'Kodak Abovyan 35 ',
       slogan: 'Պահերը, որոնք կմնան հավերժ',
       ///tagline: 'Մասնագիտական լուսանկարչական ծառայություններ և դասական ֆոտոտպագրություն 2002 թվականից',
       cta: 'Տեսնել ծառայությունները',
       findUs: 'Գտնել մեզ',
     },
     services: {
       title: 'Մեր ծառայությունները',
       subtitle: 'Մասնագիտական լուսանկարչություն յուրաքանչյուր առիթի համար',
       passport: {
         title: 'Լուսանկարներ փաստաթղթերի համար',
         desc: 'Անձնագրի, վիզայի և նույնականացման քարտերի պաշտոնական լուսանկարներ։ Արագ սպասարկում և ընդունման երաշխիք։',
         features: [
           'Պաշտոնական դեսպանատուն/փաստաթուղթ լուսանկարներ պատրաստվում են տեղում՝ մի քանի րոպեում։',
           'Մեզ մոտ պահվում են դեսպանատան չափսերի և պահանջների պայմանները։',
           'Ստացեք թվային նմուշ՝ ուղարկված ձեր էլ. փոստին ընդամենը մի քանի րոպեի ընթացքում։',
           'Դուք նաև կարող եք մեզ էլ. փոստով ուղարկել լուսանկարը և հետո վերցնել տպված օրինակները։',
         ],
         emailNote: 'Ուղարկեք ձեր լուսանկարները մեզ էլ. փոստով՝ տպագրության և ստացման համար.'
       },
       lifestyle: {
         title: 'Լայֆստայլ լուսանկարչություն',
         desc: 'Օրգանական պորտրետներ, ընտանեկան սեանսներ և լայֆստայլ նկարներ մեր հարմար ստուդիայում։',
       },
       restoration: {
         title: 'Լուսանկարների վերականգնում',
         desc: 'Վերածում ենք ձեր թանկ հիշողությունները՝ վերականգնելով վնասված, հնացած և մաշված լուսանկարները։',
       },
       printing: {
         title: 'Ֆոտո տպագրություն',
         desc: 'Բարձրորակ տպագրություն պրեմիում թղթով։ Վերից փոքրից մինչև մեծ պաստառներ։',
       },
       retouching: {
         title: 'Պրոֆեսիոնալ ռետուշ',
         desc: 'Մասնագիտական լուսանկարների խմբագրում և վերականգնում։ Գույնի ճշգրտում, թերությունների վերացում և արվեստական էֆեկտներ։',
       },
       framing: {
         title: 'Մասնագիտական շրջանակավորում',
         desc: 'Գեղեցիկ շրջանակներ և ալբոմներ՝ ձեր լուսանկարները պահպանելու և ցուցադրելու համար։',
       },
     },
     restoration: {
       title: 'Լուսանկարների վերականգնում',
       subtitle: 'Ձեր թանկ հիշողությունների պահպանություն',
       description: 'Մեր փորձառու մասնագետները հոգածությամբ վերականգնում են վնասված, հնացած կամ պատռված լուսանկարները։ ՈՒժեղ թվային տեխնիկաները թույլ են տալիս վերադարձնել լուսանկարներին իրենց նախկին գեղեցկությունը։',
       before: 'Առաջ',
       after: 'Հետո',
       features: {
         damage: 'Պատռվածքների և վնասների վերականգնում',
         color: 'Գույնի վերականգնում',
         fade: 'Խամրության ուղղում',
         scratch: 'Ծակոտկենների վերացում',
       },
       printing: {
         title: 'Մասնագիտական տպագրություն',
         subtitle: 'Պրեմիում որակ',
         description: 'Փոքր լուսանկարներից մինչև մեծ պատկերներ՝ առաջարկում ենք տարբեր ֆորմատներ և նյութեր։',
         formats: 'Առկա ֆորմատներ',
         wallet: 'Wallet (3.5×5 սմ)',
         standard: 'Standard (10×15 սմ)',
         medium: 'Medium (15×20 սմ)',
         large: 'Large (20×30 սմ)',
         poster: 'Poster (30×45 սմ)',
         custom: 'Հարմարեցված չափեր',
       },
     },
     products: {
       title: 'Ֆոտո ապրանքներ',
       subtitle: 'Ինչով կարող ենք աջակցել ձեր հիշողություններին',
       frames: {
         title: 'Դասական փայտյա շրջանակ',
         price: 'Սկսած 6000 ֏',
       },
       album: {
         title: 'Պրեմիում ալբոմ',
         price: 'Սկսած 14000 ֏',
       },
       prints: {
         title: 'Պատրաստ տպերի հավաքածու',
         price: 'Սկսած 2000 ֏',
       },
       digital: {
         title: 'Թվային ֆոտորամка',
         price: 'Սկսած 35000 ֏',
       },
     },
     gallery: {
       title: 'Մեր աշխատանքները',
       subtitle: 'Նմուշներ մեր ստուդիայից',
     },
     contact: {
       title: 'Այցելեք մեր ստուդիա',
       subtitle: 'Մենք ուրախ կլինենք հանդիպել ձեզ',
       address: 'Հասցե',
       addressValue: 'Abovyan 35\nYerevan, Armenia',
       addressLink: 'https://www.google.com/maps/search/?api=1&query=Abovyan+35+Yerevan+Armenia',
       phone: 'Հեռախոս',
       phoneValue: '+374 91 60 26 20',
       hours: 'Աշխատանքային ժամեր',
       hoursValue: 'Երկ.-Շբ.: 9:00 - 20:00\nԿիրակի: Փակ',
       email: 'Էլ. փոստ',
       emailValue: 'kodakabovyan35@gmail.com',
     },
     footer: {
       rights: 'Բոլոր իրավունքները պաշտպանված են',
       privacy: 'Գաղտնիության քաղաքականություն',
       terms: 'Օգտագործման պայմաններ',
     },
   }
   
 };