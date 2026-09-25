import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { FloatingInfoBar } from './components/FloatingInfoBar';
import { AboutParadigm } from './components/AboutParadigm';
import { CampusMinistry } from './components/CampusMinistry';
import { TestimonialSlider } from './components/TestimonialSlider';
import { NewsSection } from './components/NewsSection';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { CampusTourModal } from './components/CampusTourModal';
import { SearchModal } from './components/SearchModal';
import { UtilityPortalModal } from './components/UtilityPortalModal';
import { Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [preselectedConcentration, setPreselectedConcentration] = useState<string | undefined>(undefined);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePortalType, setActivePortalType] = useState<
    'journal' | 'library' | 'student' | 'staff' | 'accreditation' | 'location' | null
  >(null);

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenRegistration = (concentrationId?: string) => {
    setPreselectedConcentration(concentrationId);
    setIsRegistrationOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'status') {
      setActivePortalType('accreditation');
      return;
    }
    if (sectionId === 'lokasi') {
      setActivePortalType('location');
      return;
    }
    if (sectionId === 'asrama') {
      setIsTourOpen(true);
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSearchResult = (type: 'program' | 'article' | 'faq', id: string) => {
    if (type === 'program') {
      handleScrollToSection('konsentrasi');
    } else if (type === 'article') {
      handleScrollToSection('berita');
    } else if (type === 'faq') {
      handleScrollToSection('faq');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-[#8B0000] selection:text-white">
      {/* Layer 1: Top Announcement Bar (Utility Bar) */}
      <AnnouncementBar
        onOpenPortal={(portal) => setActivePortalType(portal)}
        onOpenRegistration={() => handleOpenRegistration()}
      />

      {/* Layer 2: Main Navigation Bar (Primary Nav) */}
      <MainNavbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRegistration={() => handleOpenRegistration()}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Layer 3: Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenRegistration={() => handleOpenRegistration()}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* Layer 4: Floating Quick Info Bar */}
        <FloatingInfoBar
          onOpenSearch={() => setIsSearchOpen(true)}
          onScrollToSection={handleScrollToSection}
          onOpenAccreditationModal={() => setActivePortalType('accreditation')}
          onOpenLocationModal={() => setActivePortalType('location')}
        />

        {/* Section A: Paradigma Teologi (About & 5 Konsentrasi) */}
        <AboutParadigm onOpenRegistration={handleOpenRegistration} />

        {/* Section B: Ministry & Kehidupan Kampus */}
        <CampusMinistry />

        {/* Section C: Testimoni Alumni */}
        <TestimonialSlider />

        {/* Section D: Berita & Artikel */}
        <NewsSection />

        {/* Section E: FAQ & Pendaftaran */}
        <FaqAccordion onOpenRegistration={() => handleOpenRegistration()} />
      </main>

      {/* Layer Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenRegistration={() => handleOpenRegistration()}
        onOpenPortal={(portal) => setActivePortalType(portal)}
      />

      {/* Interactive Modals */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        preselectedConcentrationId={preselectedConcentration}
      />

      <CampusTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenRegistration={() => handleOpenRegistration()}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={handleSelectSearchResult}
      />

      <UtilityPortalModal
        portalType={activePortalType}
        onClose={() => setActivePortalType(null)}
      />
    </div>
  );
}
