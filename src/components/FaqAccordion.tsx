import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FaqAccordionProps {
  onOpenRegistration: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenRegistration }) => {
  const [openIds, setOpenIds] = useState<string[]>(['1']); // default open first item

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-stone-200/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-red-50 px-3 py-1 rounded-md mb-3 border border-red-100">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Penerimaan Mahasiswa Baru 2026/2027</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight [text-wrap:balance]">
            Pertanyaan Seputar Pendaftaran STTP
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Jawaban lengkap seputar persyaratan masuk, program studi, sistem asrama terpadu, dan kontak admisi.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left Accordion, Right Quick Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Accordion Items (7 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-stone-50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#8B0000]/10 text-[#8B0000] font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-stone-900 leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen ? 'rotate-180 text-[#8B0000]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                      <p className="pl-9">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Admission Helpdesk Card (4 cols) */}
          <div className="lg:col-span-4 bg-stone-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              
              <h3 className="font-heading font-bold text-lg text-white">
                Butuh Bantuan Pendaftaran?
              </h3>
              
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Staf admisi kami siap mendampingi Anda mengenai proses administrasi, konsultasi kurikulum, dan pengajuan beasiswa panggilan pelayanan.
              </p>

              {/* Direct WhatsApp Callout */}
              <div className="mt-5 p-3.5 rounded-xl bg-stone-800/90 border border-stone-700">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  HOTLINE ADMISI WHATSAPP
                </p>
                <a
                  href="https://wa.me/6281333682828"
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading font-extrabold text-base text-white hover:text-amber-300 transition-colors block mt-1"
                >
                  +62 813-3368-2828
                </a>
                <p className="text-[11px] text-stone-400 mt-0.5">Senin - Jumat (08.00 - 16.00 WIB)</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <button
                onClick={onOpenRegistration}
                className="w-full py-3 bg-[#8B0000] hover:bg-[#A31F34] text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Daftar Online Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
