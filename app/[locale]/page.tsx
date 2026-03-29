import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Practices from '@/components/sections/Practices';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Precedents from '@/components/sections/Precedents';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export function generateStaticParams() {
  return [{ locale: 'he' }, { locale: 'en' }];
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Practices />
        <About />
        <Team />
        <Precedents />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
