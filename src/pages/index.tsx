import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Restoration from '@/components/Restoration';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Restoration />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
