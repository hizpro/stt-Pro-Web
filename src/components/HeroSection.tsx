import React from 'react';
import { ArrowRight, Play, Award, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  currentLang: Language;
  onOpenRegistration: () => void;
  onOpenTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenRegistration,
  onOpenTour
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
      {/* Background Image with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_campus_sttp_1790353170511.jpg"
          alt="Kampus Sekolah Tinggi Teologi Providensia di Batu Jawa Timur"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Overlay (rgba(0,0,0,0.65) to black/80) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/60 backdrop-brightness-90"></div>
        {/* Subtle radial glow of warm gold */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-24 md:py-28 text-center flex flex-col items-center">
        
        {/* Accreditation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-stone-800 shadow-md backdrop-blur-md mb-6 border border-white/40 text-xs md:text-sm font-semibold transform hover:scale-[1.02] transition-transform">
          <Award className="w-4 h-4 text-[#8B0000]" />
          <span>🏆 Terakreditasi &quot;BAIK&quot; oleh BAN-PT • NPSN 233158</span>
        </div>

        {/* H1 Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl [text-wrap:balance] drop-shadow-sm">
          {currentLang === 'id' ? 'SEKOLAH TINGGI TEOLOGI PROVIDENSIA' : 'PROVIDENSIA THEOLOGICAL SEMINARY'}
        </h1>

        {/* Subtitle / Motto */}
        <p className="mt-4 font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#F59E0B] tracking-wider uppercase">
          MEMBERITAKAN ~ MEMBANGUN ~ MENGUTUS
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-200 max-w-[700px] leading-relaxed [text-wrap:balance] font-normal">
          &quot;Membentuk pelayan Tuhan yang berintegritas melalui Paradigma Teologi Integratif Amanat Agung &amp; Mandat Budaya.&quot;
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenRegistration}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#8B0000] hover:bg-[#6D0000] text-white font-semibold text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap border border-red-700/50"
          >
            <span>Daftar Mahasiswa Baru</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenTour}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm md:text-base rounded-xl border border-white/60 hover:border-white backdrop-blur-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <Play className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>▶ Jelajahi Profil Kampus</span>
          </button>
        </div>

        {/* Small Trust Micro-Metrics */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-stone-300/90 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>100% Lulusan Terserap Pelayanan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Beasiswa Misi &amp; Asrama Lengkap</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Dosen Bergelar Doktoral &amp; Magister</span>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Shadow Fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none"></div>
    </section>
  );
};
