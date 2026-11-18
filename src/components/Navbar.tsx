import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#mission', label: 'Mission' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleBookClick = () => {
    setMobileOpen(false);
    const contactEl = document.getElementById('consultation-name');
    const sectionEl = document.getElementById('contact');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        contactEl?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#2E7E3A] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 bg-[#FAFBF9]/95 backdrop-blur-md border-b border-[#E2E6E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-[#151D17] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E7E3A] rounded-sm"
          >
            Zalia Africa
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A554C]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#151D17] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#2E7E3A] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E7E3A] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleBookClick}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#2E7E3A] hover:bg-[#23622D] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7E3A]"
            >
              Book Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#151D17] hover:bg-[#E9EFEA] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7E3A]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden border-t border-[#E2E6E0] bg-[#FAFBF9] px-4 py-4 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#2A352C] hover:bg-[#F2F4F1] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookClick}
                className="w-full py-2.5 px-4 text-sm font-medium text-white bg-[#2E7E3A] hover:bg-[#23622D] rounded-lg transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
