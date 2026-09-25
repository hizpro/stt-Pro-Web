import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Newspaper, Share2, Check } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/content';
import { NewsArticle } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = (article: NewsArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}#berita-${article.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="berita" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-stone-200/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-red-100/60 px-3 py-1 rounded-md mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Warta &amp; Publikasi Kampus</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight">
              Berita &amp; Artikel Terkini
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              Informasi terkini perkembangan akademik, hasil asesmen akreditasi, seminar nasional, serta kehidupan kampus STTP.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Diperbarui secara berkala oleh Humas STTP
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6">
                {/* Clean unboxed metadata with separators (Anti-Slop Zero Pill Rule) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-[#8B0000]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    {article.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-heading font-bold text-lg text-stone-900 group-hover:text-[#8B0000] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium truncate">
                  Oleh: {article.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B0000] hover:text-[#6D0000] group-hover:translate-x-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-[#8B0000]">{selectedArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Tutup Artikel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-base text-stone-800 leading-relaxed font-medium bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-stone-700">
                {selectedArticle.excerpt}
              </p>

              <div className="text-sm text-stone-700 leading-relaxed space-y-3 pt-2">
                <p>{selectedArticle.content}</p>
                <p>
                  Dengan terselenggaranya kegiatan ini, STT Providensia kembali menegaskan tekadnya untuk mencetak pelayan Tuhan yang berkompeten secara akademis, berintegritas tinggi dalam kehidupan doa, serta siap diterjunkan melayani gereja dan masyarakat di seluruh Indonesia.
                </p>
              </div>

              {/* Attribution and Share */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  <p className="font-semibold text-stone-800">Penulis: {selectedArticle.author}</p>
                  <p>Biro Informasi &amp; Publikasi STT Providensia Batu</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(selectedArticle)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tautan Disalin!' : 'Bagikan Berita'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-4 py-1.5 bg-[#8B0000] text-white text-xs font-semibold rounded-lg hover:bg-[#6D0000] cursor-pointer"
                  >
                    Selesai Membaca
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
