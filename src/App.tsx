import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { ConsultationSection } from './components/ConsultationSection';
import { ResilientImage } from './components/ResilientImage';
import {
  CONSULTANCY_SOLUTIONS,
  CORE_PILLARS,
  EDITORIAL_SECTIONS,
  SOLUTION_FILTERS,
  type SolutionCategory,
} from './data/zaliaContent';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory>('all');
  const [activePillarId, setActivePillarId] = useState<string>(CORE_PILLARS[0].id);

  const visibleSolutions =
    selectedCategory === 'all'
      ? CONSULTANCY_SOLUTIONS
      : CONSULTANCY_SOLUTIONS.filter((item) => item.category === selectedCategory);

  const handleSelectPillar = (pillarId: string) => {
    setActivePillarId(pillarId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#151D17]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Showcase Carousel */}
        <HeroSlider />

        {/* 2. Three Core Practice Pillars */}
        <section
          id="services"
          aria-labelledby="core-pillars-heading"
          className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E6E0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-medium text-[#2E7E3A] mb-2">
                  Value Chains Optimization
                </p>
                <h2
                  id="core-pillars-heading"
                  className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#151D17] [text-wrap:balance]"
                >
                  Core Pillars of Agricultural Excellence
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#4A554C] max-w-md leading-relaxed">
                Structured advisory across farm strategy, environmental stewardship, and applied
                field technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {CORE_PILLARS.map((pillar) => {
                const isSelected = activePillarId === pillar.id;
                return (
                  <article
                    key={pillar.id}
                    className={`group flex flex-col rounded-xl border transition-colors overflow-hidden bg-[#FAFBF9] ${
                      isSelected
                        ? 'border-[#2E7E3A]'
                        : 'border-[#E2E6E0] hover:border-[#C2CCC3]'
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9EFEA]">
                      <ResilientImage
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="text-xs font-semibold tabular-nums text-[#2E7E3A]">
                            {pillar.number}.
                          </span>
                          <span className="text-xs text-[#59645B]">Core Practice</span>
                        </div>

                        <h3 className="font-display text-xl font-semibold text-[#151D17] mb-2.5">
                          {pillar.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#4A554C] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E2E6E0] space-y-2">
                        <ul className="space-y-1.5 text-xs text-[#4A554C]">
                          {pillar.focusAreas.map((area) => (
                            <li key={area}>{area}</li>
                          ))}
                        </ul>

                        <div className="pt-2 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => handleSelectPillar(pillar.id)}
                            className="text-xs font-semibold text-[#2E7E3A] hover:text-[#23622D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7E3A]"
                          >
                            {isSelected ? 'Selected Focus' : 'Highlight Focus'}
                          </button>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#151D17] hover:text-[#2E7E3A] transition-colors"
                          >
                            <span>Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Editorial Narrative Sections (Transforming Agriculture, Our Mission, What We Offer) */}
        <div className="divide-y divide-[#E2E6E0]">
          {EDITORIAL_SECTIONS.map((section, idx) => {
            const mediaFirst = section.mediaSide === 'left';
            const surfaceClass = idx % 2 === 0 ? 'bg-[#F2F4F1]' : 'bg-white';

            return (
              <section
                key={section.id}
                id={section.anchor}
                aria-labelledby={`${section.id}-heading`}
                className={`${surfaceClass} py-16 sm:py-20 lg:py-24`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                    <div
                      className={`lg:col-span-6 ${
                        mediaFirst ? 'lg:order-1' : 'lg:order-2'
                      } rounded-xl overflow-hidden border border-[#E2E6E0] bg-[#E9EFEA] min-h-[280px] sm:min-h-[360px]`}
                    >
                      <ResilientImage
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full lg:h-full object-cover"
                      />
                    </div>

                    <div
                      className={`lg:col-span-6 ${
                        mediaFirst ? 'lg:order-2' : 'lg:order-1'
                      } flex flex-col justify-center py-2`}
                    >
                      <p className="text-xs sm:text-sm font-medium text-[#2E7E3A] mb-3">
                        {section.kicker}
                      </p>

                      <h2
                        id={`${section.id}-heading`}
                        className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#151D17] [text-wrap:balance] mb-5"
                      >
                        {section.title}
                      </h2>

                      <p className="text-base text-[#4A554C] leading-[1.7] max-w-[62ch] mb-8">
                        {section.body}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#DCE1DA]">
                        {section.highlights.map((item) => (
                          <div key={item.label}>
                            <p className="text-xs font-semibold text-[#151D17] mb-1">
                              {item.label}
                            </p>
                            <p className="text-sm text-[#4A554C] leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* 4. Flexible Consultancy Solutions (9 Core Strengths + Interactive Category Filter) */}
        <section
          id="solutions"
          aria-labelledby="flexible-solutions-heading"
          className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#E2E6E0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-xs sm:text-sm font-medium text-[#4A554C] mb-2">
                Global Advisory Capabilities
              </p>
              <h2
                id="flexible-solutions-heading"
                className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#2E7E3A] [text-wrap:balance] mb-4"
              >
                Flexible Consultancy Solutions
              </h2>
              <p className="text-base text-[#4A554C] leading-relaxed">
                Designed around local agronomic realities, international business disciplines, and
                seamless digital execution.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div
                role="tablist"
                aria-label="Filter consultancy solutions"
                className="inline-flex flex-wrap items-center justify-center gap-1 p-1 bg-[#F2F4F1] border border-[#E2E6E0] rounded-lg"
              >
                {SOLUTION_FILTERS.map((filter) => {
                  const isActive = selectedCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(filter.id)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7E3A] ${
                        isActive
                          ? 'bg-white text-[#151D17] shadow-xs border border-[#E2E6E0]'
                          : 'text-[#4A554C] hover:text-[#151D17]'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleSolutions.map((solution) => (
                <article
                  key={solution.id}
                  className="bg-[#FAFBF9] border border-[#E2E6E0] rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-4 hover:border-[#C2CCC3] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 text-xs text-[#59645B] mb-3">
                      <span className="font-semibold tabular-nums text-[#2E7E3A]">
                        {solution.number}
                      </span>
                      <span>{solution.categoryLabel}</span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-[#151D17] mb-2.5 [text-wrap:balance]">
                      {solution.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4A554C] leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Zalia Africa & Direct Consultation */}
        <ConsultationSection />
      </main>

      {/* 6. Quiet Corporate Footer */}
      <footer className="bg-[#111813] text-[#B8C6BA] border-t border-[#212E24] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
            <div className="md:col-span-5 space-y-2">
              <p className="font-display text-xl font-semibold text-white">Zalia Africa</p>
              <p className="text-sm text-[#95C99D]">Value chains optimization</p>
              <p className="text-xs text-[#94A396] max-w-sm leading-relaxed pt-1">
                Corporate agricultural consultancy registered in Estonia, serving producers and
                agribusinesses across Africa, Europe, the Americas, and South Asia.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <p className="text-xs font-semibold text-white">Navigation</p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-white transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2">
              <p className="text-xs font-semibold text-white">Direct Contact</p>
              <p className="text-sm tabular-nums">
                <a
                  href="tel:+243994933267"
                  className="text-white hover:text-[#95C99D] transition-colors"
                >
                  +243994933267
                </a>
              </p>
              <p className="text-xs text-[#94A396]">Corporate Advisory Desk</p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A396]">
            <p>Zalia Africa · Value chains optimization</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
