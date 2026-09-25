import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Menu, X, Shield, BookOpen, UserCheck, Calendar, MapPin, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface MainNavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenRegistration: () => void;
  onScrollToSection: (sectionId: string) => void;
}

interface DropdownItem {
  title: string;
  desc: string;
  targetId: string;
}

interface NavMenu {
  id: string;
  label: string;
  items: DropdownItem[];
}

const NAV_MENUS: NavMenu[] = [
  {
    id: 'tentang',
    label: 'Tentang',
    items: [
      { title: 'Paradigma Integratif', desc: 'Sintesis Amanat Agung dan Mandat Budaya', targetId: 'paradigma' },
      { title: 'Visi, Misi & Karakter', desc: 'Membentuk hamba Tuhan berintegritas tinggi', targetId: 'paradigma' },
      { title: 'Status Akreditasi BAN-PT', desc: 'Peringkat B / BAIK Terakreditasi Nasional', targetId: 'status' },
      { title: 'Lokasi & Kampus Batu', desc: 'Lingkungan asri pegunungan Jawa Timur', targetId: 'lokasi' }
    ]
  },
  {
    id: 'akademik',
    label: 'Akademik',
    items: [
      { title: 'Program S1 Teologi (S.Th)', desc: 'Kurikulum holistik 144–160 SKS 4 tahun', targetId: 'program' },
      { title: '5 Konsentrasi Spesifik', desc: 'Biblika, Pastoral, Misi, Kepemimpinan & PAK', targetId: 'konsentrasi' },
      { title: 'Program Magister S2 (M.Th)', desc: 'Pendidikan lanjutan riset teologis & kepemimpinan', targetId: 'program' },
      { title: 'Sistem Pembelajaran', desc: 'Teori kelas, laboratorium bahasa & vicarage', targetId: 'program' }
    ]
  },
  {
    id: 'pendaftaran',
    label: 'Pendaftaran',
    items: [
      { title: 'Alur PMB 2026/2027', desc: 'Penerimaan Mahasiswa Baru Gelombang 1', targetId: 'faq' },
      { title: 'Syarat & Dokumen', desc: 'Kualifikasi rohani dan akademik calon mahasiswa', targetId: 'faq' },
      { title: 'Formulir Pendaftaran Online', desc: 'Isi aplikasi formulir langsung di website', targetId: 'register-action' },
      { title: 'Kontak Admisi PMB', desc: 'Konsultasi WhatsApp via sekretariat resmi', targetId: 'kontak' }
    ]
  },
  {
    id: 'kehidupan',
    label: 'Kehidupan Kampus',
    items: [
      { title: 'Mission Trip Lintas Daerah', desc: 'Pemberitaan Injil dan pelayanan masyarakat', targetId: 'ministry' },
      { title: 'Ibadah Raya & Kapel', desc: 'Pusat persekutuan doa dan ibadah mingguan', targetId: 'ministry' },
      { title: 'Misi & Pelayanan Sosial', desc: 'Keterlibatan langsung di tengah masyarakat', targetId: 'ministry' },
      { title: 'Kehidupan Asrama Terbina', desc: 'Mentoring karakter, doa fajar, dan persekutuan', targetId: 'asrama' }
    ]
  },
  {
    id: 'berita',
    label: 'Berita',
    items: [
      { title: 'Warta Kampus & Artikel', desc: 'Kabar terkini seputar kegiatan dan seminar', targetId: 'berita' },
      { title: 'Hasil Asesmen BAN-PT', desc: 'Catatan visitasi dan akreditasi terkini', targetId: 'berita' },
      { title: 'Kesaksian & Testimoni', desc: 'Kisah pembentukan alumni di ladang pelayanan', targetId: 'testimoni' }
    ]
  }
];

export const MainNavbar: React.FC<MainNavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenSearch,
  onOpenRegistration,
  onScrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownItemClick = (targetId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (targetId === 'register-action') {
      onOpenRegistration();
    } else {
      onScrollToSection(targetId);
    }
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-md border-b border-stone-200/80 bg-white/98 backdrop-blur-sm' : 'border-b border-stone-100'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] rounded-lg"
          aria-label="STT Providensia Beranda"
        >
          {/* Official Emblem Logo */}
          <div className="w-11 h-11 rounded-lg bg-[#8B0000] text-white flex items-center justify-center shadow-sm group-hover:bg-[#6D0000] transition-colors relative overflow-hidden">
            <span className="font-heading font-black text-xl tracking-tighter text-amber-300">P</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-400"></div>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg md:text-xl text-stone-900 tracking-tight leading-tight group-hover:text-[#8B0000] transition-colors">
              STT PROVIDENSIA
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#8B0000] uppercase">
              National Excellence
            </span>
          </div>
        </a>

        {/* Center Main Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
          {NAV_MENUS.map((menu) => {
            const isOpen = activeDropdown === menu.id;
            return (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(isOpen ? null : menu.id)}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer ${
                    isOpen
                      ? 'text-[#8B0000] bg-stone-50'
                      : 'text-[#374151] hover:text-[#8B0000] hover:bg-stone-50/80'
                  }`}
                >
                  <span>{menu.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#8B0000]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-2.5 transition-all transform origin-top-left animate-in fade-in-0 zoom-in-95 duration-150">
                      <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider px-3 py-1 mb-1 border-b border-stone-100">
                        Navigasi {menu.label}
                      </div>
                      <div className="space-y-0.5">
                        {menu.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDropdownItemClick(item.targetId)}
                            className="w-full text-left p-2.5 rounded-lg hover:bg-stone-50 transition-colors group cursor-pointer block"
                          >
                            <p className="text-xs font-semibold text-stone-800 group-hover:text-[#8B0000] transition-colors">
                              {item.title}
                            </p>
                            <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                              {item.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 md:gap-4 shrink-0">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Pencarian Situs"
            className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-[#8B0000] hover:bg-stone-100 transition-colors cursor-pointer"
            title="Cari program, berita, kurikulum"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <div className="flex items-center text-xs font-semibold rounded-lg bg-stone-100 p-0.5 border border-stone-200 text-stone-700">
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                currentLang === 'id'
                  ? 'bg-white text-[#8B0000] shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-white text-[#8B0000] shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA: Daftar Sekarang */}
          <button
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#6D0000] rounded-lg shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Daftar Sekarang
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu Mobile"
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-stone-700 hover:bg-stone-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-5 py-4 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-3">
            {NAV_MENUS.map((menu) => {
              const isExpanded = expandedMobileMenu === menu.id;
              return (
                <div key={menu.id} className="border-b border-stone-100 pb-2">
                  <button
                    onClick={() => setExpandedMobileMenu(isExpanded ? null : menu.id)}
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-stone-800"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform ${
                        isExpanded ? 'rotate-180 text-[#8B0000]' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-2 mt-1 bg-stone-50 rounded-lg">
                      {menu.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDropdownItemClick(item.targetId)}
                          className="w-full text-left py-1.5 text-xs text-stone-600 hover:text-[#8B0000] flex flex-col"
                        >
                          <span className="font-medium text-stone-800">{item.title}</span>
                          <span className="text-[11px] text-stone-500">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full py-3 bg-[#8B0000] hover:bg-[#6D0000] text-white text-sm font-semibold rounded-lg shadow text-center cursor-pointer"
              >
                Daftar Sekarang (PMB 2026/2027)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
