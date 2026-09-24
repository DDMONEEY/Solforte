import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityBar } from './components/CredibilityBar';
import { SolutionsSection } from './components/SolutionsSection';
import { TrackingSection } from './components/TrackingSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { TechSection } from './components/TechSection';
import { SecuritySection } from './components/SecuritySection';
import { CoverageSection } from './components/CoverageSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FAQSection } from './components/FAQSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { QuoteModal } from './components/QuoteModal';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedQuoteService(undefined);
  };

  const handleOpenLegalModal = (type: 'privacy' | 'terms') => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegalModal = () => {
    setLegalModalState({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-[#F58220] selection:text-black antialiased">
      {/* 4. Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 5. Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6. Bloco de Credibilidade */}
        <CredibilityBar />

        {/* 7. Seção de Soluções */}
        <SolutionsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Rastreamento */}
        <TrackingSection />

        {/* Institucional SolForte & Origem */}
        <AboutSection />

        {/* 9. Como Funciona */}
        <HowItWorks />

        {/* 10. Tecnologia */}
        <TechSection />

        {/* 11. Segurança */}
        <SecuritySection />

        {/* 12. Cobertura */}
        <CoverageSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 13. Prova Social & Conformidade Cadastral */}
        <SocialProofSection />

        {/* 14. FAQ */}
        <FAQSection />

        {/* 15. Formulário de Cotação */}
        <QuoteSection />

        {/* Contato & Matriz */}
        <ContactSection />
      </main>

      {/* 17. Footer */}
      <Footer
        onOpenLegalModal={handleOpenLegalModal}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 16. WhatsApp Flutuante */}
      <WhatsAppFloating />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        serviceName={selectedQuoteService}
      />

      {/* Legal Modal (Privacy & Terms) */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
};

export default App;
