import React from 'react';
import { ShieldCheck, MapPin, GraduationCap, Search, ArrowUpRight } from 'lucide-react';

interface FloatingInfoBarProps {
  onOpenSearch: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenAccreditationModal: () => void;
  onOpenLocationModal: () => void;
}

export const FloatingInfoBar: React.FC<FloatingInfoBarProps> = ({
  onOpenSearch,
  onScrollToSection,
  onOpenAccreditationModal,
  onOpenLocationModal
}) => {
  return (
    <div className="relative z-30 max-w-[1200px] mx-auto px-5 -mt-10 sm:-mt-14 md:-mt-16">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-stone-200/80 overflow-hidden">
        {/* 4 Column Grid (Desktop) / 2x2 Grid (Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          
          {/* Column 1: Akreditasi */}
          <button
            onClick={onOpenAccreditationModal}
            className="p-5 md:p-6 flex items-start gap-4 text-left hover:bg-stone-50/80 transition-colors group cursor-pointer focus:outline-none focus:bg-stone-50"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#8B0000] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-red-100">
              <span className="text-xl" role="img" aria-label="Shield">🛡️</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  STATUS KAMPUS
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#8B0000] transition-colors" />
              </div>
              <p className="mt-1 font-heading font-bold text-sm md:text-base text-stone-900 group-hover:text-[#8B0000] transition-colors">
                Akreditasi &quot;BAIK&quot; BAN-PT
              </p>
              <p className="text-xs text-stone-500 mt-0.5">NPSN: 233158 • Legalitas Resmi</p>
            </div>
          </button>

          {/* Column 2: Lokasi */}
          <button
            onClick={onOpenLocationModal}
            className="p-5 md:p-6 flex items-start gap-4 text-left hover:bg-stone-50/80 transition-colors group cursor-pointer focus:outline-none focus:bg-stone-50"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-amber-100">
              <span className="text-xl" role="img" aria-label="Location">📍</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  LOKASI KAMPUS
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <p className="mt-1 font-heading font-bold text-sm md:text-base text-stone-900 group-hover:text-[#8B0000] transition-colors">
                Kota Batu &amp; Malang
              </p>
              <p className="text-xs text-stone-500 mt-0.5">Jawa Timur, Indonesia</p>
            </div>
          </button>

          {/* Column 3: Program Studi */}
          <button
            onClick={() => onScrollToSection('konsentrasi')}
            className="p-5 md:p-6 flex items-start gap-4 text-left hover:bg-stone-50/80 transition-colors group cursor-pointer focus:outline-none focus:bg-stone-50"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-blue-100">
              <span className="text-xl" role="img" aria-label="Graduation">🎓</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  PROGRAM STUDI
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="mt-1 font-heading font-bold text-sm md:text-base text-stone-900 group-hover:text-[#8B0000] transition-colors">
                S1 Teologi &amp; S2 Magister
              </p>
              <p className="text-xs text-stone-500 mt-0.5">5 Konsentrasi Pilihan Teologis</p>
            </div>
          </button>

          {/* Column 4: Quick Search / Action (Dark Background #111827) */}
          <div className="p-4 md:p-5 bg-[#111827] text-white flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              PORTAL INFORMASI
            </span>
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg border border-stone-700 transition-all text-xs font-medium cursor-pointer shadow-inner group"
            >
              <span className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">Cari Program &amp; Informasi...</span>
              </span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-900 text-stone-400 rounded border border-stone-700">
                ⌘K
              </kbd>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
