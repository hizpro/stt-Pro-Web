import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, GraduationCap } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoplay]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimoni"
      className="py-20 md:py-28 bg-white border-b border-stone-200/60 scroll-mt-20 relative overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-3 border border-amber-100">
            <span>Panggilan &amp; Pelayanan</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight [text-wrap:balance]">
            Apa Kata Mereka Mengenai STT Providensia
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Kesaksian nyata para alumni yang telah dibentuk dan kini melayani di berbagai gereja, ladang misi, serta institusi kristiani.
          </p>
        </div>

        {/* Featured Card Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-md relative">
            
            {/* Top Quote Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#8B0000] text-amber-400 flex items-center justify-center shadow mb-6">
              <Quote className="w-6 h-6 fill-amber-400" />
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="text-base sm:text-lg md:text-xl text-stone-800 font-normal leading-relaxed italic min-h-[120px] flex items-center">
              &quot;{current.quote}&quot;
            </blockquote>

            {/* Author Profile */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Monogram Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#8B0000] text-white flex items-center justify-center font-heading font-bold text-base shadow-sm ring-2 ring-amber-400/40">
                  {current.avatarText}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-stone-900">
                    {current.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                    <span className="font-medium text-[#8B0000]">{current.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{current.generation}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#8B0000] bg-white text-stone-700 hover:text-[#8B0000] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  aria-label="Testimoni Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#8B0000] bg-white text-stone-700 hover:text-[#8B0000] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  aria-label="Testimoni Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-[#8B0000]'
                    : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Buka testimoni ${t.name}`}
              />
            ))}
          </div>

          {/* Small 3-Grid Quick View Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {TESTIMONIALS.map((t, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-red-50/60 border-red-300 shadow-sm'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <p className="font-heading font-bold text-xs text-stone-900 line-clamp-1">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#8B0000] font-medium line-clamp-1 mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 italic">
                    &quot;{t.quote}&quot;
                  </p>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
