import React, { useState } from 'react';
import { Compass, BookCheck, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { CONCENTRATIONS } from '../data/content';
import { Concentration } from '../types';

interface AboutParadigmProps {
  onOpenRegistration: (preselectedConcentration?: string) => void;
}

export const AboutParadigm: React.FC<AboutParadigmProps> = ({ onOpenRegistration }) => {
  const [selectedConcentration, setSelectedConcentration] = useState<Concentration>(CONCENTRATIONS[0]);

  return (
    <section id="paradigma" className="py-20 md:py-28 bg-white border-b border-stone-200/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sub-heading kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-red-50 px-3 py-1 rounded-md border border-red-100">
              <Compass className="w-3.5 h-3.5" />
              <span>Paradigma Teologi Integratif di STT Providensia</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
              Menjembatani Amanat Agung dan Mandat Budaya
            </h2>

            {/* Body Text */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              STT Providensia berkomitmen mengembangkan paradigma teologi yang tidak hanya berfokus pada panggilan misi dan penginjilan (Amanat Agung), tetapi juga menegaskan kembali relevansi dan tanggung jawab umat Allah dalam merawat ciptaan, membangun budaya, dan mengelola dunia secara bertanggung jawab (Mandat Budaya).
            </p>

            {/* Features (Grid 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Feature 1 */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-red-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#8B0000] text-white flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4 text-amber-300" />
                </div>
                <h3 className="font-heading font-bold text-sm text-stone-900 leading-snug">
                  Keseimbangan Amanat Agung &amp; Mandat Budaya
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Pemberitaan kabar baik keselamatan diselaraskan dengan aksi nyata transformasi sosial, keadilan kasih, dan pelestarian ciptaan.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-red-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500 text-stone-900 flex items-center justify-center mb-3">
                  <BookCheck className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-heading font-bold text-sm text-stone-900 leading-snug">
                  Kurikulum dan Pelayanan Holistik
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Integrasi ketat antara studi teks biblika yang teliti, kedalaman spiritualitas asrama, serta praktik pelayanan lapangan berbobot.
                </p>
              </div>
            </div>

            {/* Pillars checkmarks */}
            <div className="pt-2 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Doktrin Ortodoks Reformed &amp; Injili</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Pembinaan Karakter Asrama Terbimbing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Pengajar Berkualifikasi Pascasarjana &amp; Doktor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Jaringan Pelayanan Gerejawi Interdenominasi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Image Presentation (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100 group">
              <img
                src="/src/assets/images/about_theology_study_1790353186321.jpg"
                alt="Mahasiswa Teologi STT Providensia berdiskusi mendalam seputar firman Tuhan dan literatur teologi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
              
              {/* Bottom Quote Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/60">
                <p className="text-xs font-semibold text-stone-800 italic">
                  &quot;Hati yang berkobar untuk Kristus, pikiran yang kritis dan tajam merenungkan kebenaran Firman.&quot;
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-bold text-[#8B0000]">Civitas Akademika STTP</span>
                  <span>Batu, Jawa Timur</span>
                </div>
              </div>
            </div>

            {/* Decorative background accent block */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-400/20 rounded-2xl -z-10 blur-xl"></div>
          </div>

        </div>

        {/* 5 Konsentrasi S1 Showcase */}
        <div id="konsentrasi" className="mt-20 pt-16 border-t border-stone-200 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Program Sarjana Teologi (S.Th)</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
              5 Konsentrasi Unggulan Siap Pelayanan
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Pilih konsentrasi studi yang selaras dengan panggilan Ilahi dan karunia rohani Anda.
            </p>
          </div>

          {/* Concentration Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {CONCENTRATIONS.map((c) => {
              const isActive = selectedConcentration.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcentration(c)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#8B0000] text-white shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {c.name.split('&')[0].trim()}
                </button>
              );
            })}
          </div>

          {/* Active Concentration Card Display */}
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100/80 px-2.5 py-0.5 rounded">
                    Konsentrasi Terpilih
                  </span>
                  <span className="text-xs text-stone-400">·</span>
                  <span className="text-xs font-medium text-stone-500">144–160 SKS • 8 Semester</span>
                </div>
                
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900">
                  {selectedConcentration.name}
                </h4>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {selectedConcentration.description}
                </p>

                {/* Focus Courses */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Mata Kuliah Utama:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedConcentration.focusCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-white text-stone-700 border border-stone-200 px-3 py-1 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Outcome */}
                <div className="pt-2 text-xs text-stone-600 flex items-center gap-2">
                  <span className="font-bold text-stone-800">Prospek Pelayanan:</span>
                  <span>{selectedConcentration.career}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-6">
                <button
                  onClick={() => onOpenRegistration(selectedConcentration.id)}
                  className="px-5 py-3 bg-[#8B0000] hover:bg-[#6D0000] text-white font-semibold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition-all text-center cursor-pointer whitespace-nowrap"
                >
                  Pilih Konsentrasi Ini &rarr;
                </button>
                <p className="text-[11px] text-stone-400 text-center">
                  PMB TA 2026/2027
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
