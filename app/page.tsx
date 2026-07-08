'use client';

import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import TrustBar from '@/sections/TrustBar';
import BeforeAfter from '@/sections/BeforeAfter';
import WhyCompressor from '@/sections/WhyCompressor';
import ServiceApps from '@/sections/ServiceApps';
import WhyUs from '@/sections/WhyUs';
import Coverage from '@/sections/Coverage';
import WorkProcess from '@/sections/WorkProcess';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';
import StickyBar from '@/sections/StickyBar';
import Footer from '@/sections/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="font-tajawal" dir="rtl" lang="ar">
      <Navigation />
      
      <main id="main-content">
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <WhyCompressor />
        <ServiceApps />
        <WhyUs />
        <Coverage />
        <WorkProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      <StickyBar />
    </div>
  );
}
