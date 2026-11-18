import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { HERO_SLIDES } from '../data/zaliaContent';
import { ResilientImage } from './ResilientImage';

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[activeIndex];

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      aria-label="Zalia Africa Featured Overview"
      className="relative w-full min-h-[560px] lg:min-h-[637px] bg-[#131C15] overflow-hidden flex items-end"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03] pointer-events-none'
            }`}
          >
            <ResilientImage
              src={slide.image}
              alt={slide.imageAlt}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover ${slide.imagePosition}`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0B120C]/88 via-[#0B120C]/62 to-[#0B120C]/25"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B120C]/80 via-transparent to-[#0B120C]/20"
              aria-hidden="true"
            />
          </div>
        );
      })}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B7D7BC] mb-4">
              {currentSlide.kicker}
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white [text-wrap:balance] mb-5">
              {currentSlide.title}
            </h1>

            <p className="text-base sm:text-lg text-[#E6ECE7] leading-relaxed max-w-xl mb-8">
              {currentSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#2E7E3A] hover:bg-[#23622D] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-white/95 border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4">
            <div className="flex items-center gap-1.5 bg-[#0E1610]/70 backdrop-blur-md border border-white/15 rounded-lg p-1">
              {HERO_SLIDES.map((slide, idx) => {
                const selected = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View slide ${idx + 1}: ${slide.title}`}
                    aria-current={selected ? 'true' : undefined}
                    className={`px-3 py-1.5 text-xs font-medium tabular-nums rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                      selected
                        ? 'bg-[#2E7E3A] text-white'
                        : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {slide.indexLabel}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#0E1610]/70 border border-white/15 text-white/85 hover:text-white hover:bg-[#0E1610]/90 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#0E1610]/70 border border-white/15 text-white/85 hover:text-white hover:bg-[#0E1610]/90 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#0E1610]/70 border border-white/15 text-white/85 hover:text-white hover:bg-[#0E1610]/90 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
