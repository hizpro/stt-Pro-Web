import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Newspaper, HelpCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { CONCENTRATIONS, NEWS_ARTICLES, FAQ_ITEMS } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (type: 'program' | 'article' | 'faq', id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAction
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return {
        concentrations: CONCENTRATIONS.slice(0, 3),
        news: NEWS_ARTICLES.slice(0, 2),
        faqs: FAQ_ITEMS.slice(0, 2)
      };
    }

    const q = query.toLowerCase();

    return {
      concentrations: CONCENTRATIONS.filter(
        (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      ),
      news: NEWS_ARTICLES.filter(
        (n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q)
      ),
      faqs: FAQ_ITEMS.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      )
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    searchResults.concentrations.length + searchResults.news.length + searchResults.faqs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50/60">
          <Search className="w-5 h-5 text-stone-400 shrink-0 ml-1" />
          <input
            type="text"
            autoFocus
            placeholder="Cari konsentrasi teologi, syarat pendaftaran, akreditasi, artikel..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm md:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-600 px-2 py-1"
            >
              Hapus
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-stone-500 hover:bg-stone-200/80 flex items-center justify-center cursor-pointer"
            aria-label="Tutup Pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {totalResults === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              Tidak ditemukan hasil untuk &quot;<strong>{query}</strong>&quot;. Silakan coba kata kunci lain seperti &quot;Akreditasi&quot;, &quot;Asrama&quot;, atau &quot;Biblika&quot;.
            </div>
          ) : (
            <>
              {/* Concentrations */}
              {searchResults.concentrations.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8B0000]" />
                    <span>Konsentrasi Program Studi ({searchResults.concentrations.length})</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.concentrations.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onClose();
                          onSelectAction('program', c.id);
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#8B0000] transition-colors">
                            {c.name}
                          </p>
                          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {c.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {searchResults.news.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                    <Newspaper className="w-3.5 h-3.5 text-amber-600" />
                    <span>Berita &amp; Warta Kampus ({searchResults.news.length})</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.news.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onClose();
                          onSelectAction('article', n.id);
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#8B0000] transition-colors">
                            {n.title}
                          </p>
                          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {n.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {searchResults.faqs.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Tanya Jawab Pendaftaran ({searchResults.faqs.length})</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.faqs.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onClose();
                          onSelectAction('faq', f.id);
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#8B0000] transition-colors">
                            {f.question}
                          </p>
                          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {f.answer}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-stone-100/80 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between px-5">
          <span>Ketik untuk mencari di seluruh database situs STTP</span>
          <span className="font-mono text-stone-400">ESC untuk keluar</span>
        </div>

      </div>
    </div>
  );
};
