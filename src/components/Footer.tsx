import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenRegistration: () => void;
  onOpenPortal: (portalType: 'journal' | 'library' | 'student' | 'staff' | 'accreditation' | 'location') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenRegistration,
  onOpenPortal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand & Motto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B0000] text-amber-300 font-heading font-black text-xl flex items-center justify-center border border-amber-400/30">
                P
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white tracking-tight">
                  STT PROVIDENSIA
                </h3>
                <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  National Excellence
                </p>
              </div>
            </div>

            <p className="font-heading font-bold text-xs text-amber-400/90 tracking-wider">
              MEMBERITAKAN ~ MEMBANGUN ~ MENGUTUS
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Membentuk pelayan Tuhan yang berintegritas melalui Paradigma Teologi Integratif Amanat Agung &amp; Mandat Budaya. Terakreditasi resmi BAN-PT dan Kementerian Agama RI.
            </p>

            {/* Accreditation trust tag */}
            <div className="pt-2">
              <button
                onClick={() => onOpenPortal('accreditation')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-800 text-[11px] font-semibold text-stone-300 border border-stone-700 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NPSN: 233158 • Akreditasi &quot;BAIK&quot; BAN-PT</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links: Program Akademik (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400">
              Akademik
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onScrollToSection('konsentrasi')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  S1 Teologi (S.Th)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('konsentrasi')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5 Konsentrasi Teologis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('paradigma')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Paradigma Integratif
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPortal('journal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Jurnal Teologi (EJTP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPortal('library')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Perpustakaan &amp; OPAC
                </button>
              </li>
            </ul>
          </div>

          {/* Kehidupan Kampus & Pendaftaran (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400">
              Pendaftaran &amp; Misi
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={onOpenRegistration}
                  className="text-amber-300 hover:underline font-semibold cursor-pointer"
                >
                  PMB 2026/2027
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Syarat &amp; Biaya Studi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('ministry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mission Trip Tahunan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('ministry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kehidupan Asrama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('testimoni')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kesaksian Alumni
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400">
              Sekretariat Kampus
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Indragiri / Kawasan Kampus, Kota Batu, Jawa Timur 65313, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href="https://wa.me/6281333682828"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  +62 813-3368-2828 (WA Admisi)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href="mailto:pmb@sttprovidensia.ac.id"
                  className="hover:text-amber-300 transition-colors"
                >
                  pmb@sttprovidensia.ac.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>Senin – Jumat: 08.00 – 16.00 WIB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Sekolah Tinggi Teologi Providensia. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPortal('student')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              SIAKAD Online
            </button>
            <button
              onClick={() => onOpenPortal('staff')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Login Dosen
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
