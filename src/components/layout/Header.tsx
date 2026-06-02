import { useState, useEffect } from 'react';
import { NAV_LINKS, EVENT_INFO } from '../../constants/eventData';
import type { NavLink } from '../../types/event';
import logoImg from '../../assets/Logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      id="header"
      role="banner"
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--color-deep-blue-900)]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-[var(--color-graphite-100)] py-4',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <a href="#topo" aria-label="Voltar ao início" className="flex items-center group">
          <img 
            src={logoImg} 
            alt="Muriaé Tech Connect Logo" 
            className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
            style={isScrolled ? { filter: 'brightness(0) invert(1)' } : undefined}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                'text-sm font-medium transition-colors duration-200',
                isScrolled
                  ? 'text-white/80 hover:text-[var(--color-tiffany)]'
                  : 'text-[var(--color-deep-blue-800)] hover:text-[var(--color-tiffany-600)]',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.sympla.com.br/evento/muriae-tech-connect-2026/3418712?algoliaID=84ace9a905b3a11fc92f3f3df06bd4b1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-tiffany)] text-[var(--color-deep-blue-900)] hover:brightness-110 transition-all duration-200 shadow-md"
          >
            Inscreva-se
          </a>
        </nav>

        <button
          id="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={[
                'block h-0.5 w-6 rounded transition-all duration-300',
                isScrolled ? 'bg-white' : 'bg-[var(--color-deep-blue-800)]',
              ].join(' ')}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="md:hidden bg-[var(--color-deep-blue-900)] border-t border-white/10 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[var(--color-tiffany)] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programacao"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--color-tiffany)] text-[var(--color-deep-blue-900)] text-center"
          >
            Inscreva-se
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
