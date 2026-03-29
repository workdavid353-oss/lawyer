import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Practices from '@/components/sections/Practices';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Precedents from '@/components/sections/Precedents';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
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
