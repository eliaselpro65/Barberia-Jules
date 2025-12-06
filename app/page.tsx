import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-neon-cyan selection:text-black">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}
