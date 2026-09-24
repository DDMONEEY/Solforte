import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FreightCalculator } from './components/FreightCalculator';
import { CoverageMap } from './components/CoverageMap';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrackingSection } from './components/TrackingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-[#F58220] selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FreightCalculator />
        <CoverageMap />
        <WhyChooseUs />
        <TrackingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive CTA */}
      <WhatsAppFloating />
    </div>
  );
};

export default App;

