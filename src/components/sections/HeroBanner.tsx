import { EVENT_INFO } from '../../constants/eventData';
import { LuCalendar, LuClock, LuMapPin } from 'react-icons/lu';
import logoHomepage from '../../assets/Backdrop Oficial Muriaé Tech Connect SEM FUNDO.png';

const HeroBanner: React.FC = () => {
  return (
    <section
      id="topo"
      aria-label="Banner principal do evento"
      className="relative min-h-dvh flex flex-col items-center justify-center text-center overflow-hidden
                 bg-white px-6 py-32"
    >
      
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-[220px] overflow-hidden opacity-25 hidden lg:block">
        <svg viewBox="0 0 220 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <line x1="30"  y1="80"  x2="140" y2="80"  stroke="#0070c0" strokeWidth="2"/>
          <line x1="140" y1="80"  x2="140" y2="200" stroke="#0070c0" strokeWidth="2"/>
          <line x1="60"  y1="200" x2="140" y2="200" stroke="#0070c0" strokeWidth="2"/>
          <line x1="60"  y1="200" x2="60"  y2="350" stroke="#0070c0" strokeWidth="2"/>
          <line x1="60"  y1="350" x2="180" y2="350" stroke="#0070c0" strokeWidth="2"/>
          <line x1="180" y1="350" x2="180" y2="480" stroke="#0070c0" strokeWidth="2"/>
          <line x1="20"  y1="480" x2="180" y2="480" stroke="#0070c0" strokeWidth="2"/>
          <line x1="20"  y1="480" x2="20"  y2="600" stroke="#0070c0" strokeWidth="2"/>
          <line x1="20"  y1="600" x2="120" y2="600" stroke="#0070c0" strokeWidth="2"/>
          <line x1="100" y1="130" x2="100" y2="270" stroke="#0070c0" strokeWidth="2"/>
          <line x1="100" y1="270" x2="200" y2="270" stroke="#0070c0" strokeWidth="2"/>
          
          <circle cx="30"  cy="80"  r="5" fill="#0070c0"/>
          <circle cx="140" cy="80"  r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="60"  cy="200" r="5" fill="#0070c0"/>
          <circle cx="140" cy="200" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="60"  cy="350" r="5" fill="#0070c0"/>
          <circle cx="180" cy="350" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="180" cy="480" r="5" fill="#0070c0"/>
          <circle cx="20"  cy="480" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="20"  cy="600" r="5" fill="#0070c0"/>
          <circle cx="120" cy="600" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="100" cy="130" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="100" cy="270" r="5" fill="#0070c0"/>
          <circle cx="200" cy="270" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-[220px] overflow-hidden opacity-25 hidden lg:block">
        <svg viewBox="0 0 220 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="190" y1="60"  x2="80"  y2="60"  stroke="#56ecbe" strokeWidth="2"/>
          <line x1="80"  y1="60"  x2="80"  y2="180" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="80"  y1="180" x2="160" y2="180" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="160" y1="180" x2="160" y2="320" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="40"  y1="320" x2="160" y2="320" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="40"  y1="320" x2="40"  y2="450" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="40"  y1="450" x2="200" y2="450" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="200" y1="450" x2="200" y2="560" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="90"  y1="560" x2="200" y2="560" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="120" y1="110" x2="120" y2="250" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="10"  y1="250" x2="120" y2="250" stroke="#56ecbe" strokeWidth="2"/>
          
          <circle cx="190" cy="60"  r="5" fill="#56ecbe"/>
          <circle cx="80"  cy="60"  r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="80"  cy="180" r="5" fill="#56ecbe"/>
          <circle cx="160" cy="180" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="160" cy="320" r="5" fill="#56ecbe"/>
          <circle cx="40"  cy="320" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="40"  cy="450" r="5" fill="#56ecbe"/>
          <circle cx="200" cy="450" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="200" cy="560" r="5" fill="#56ecbe"/>
          <circle cx="90"  cy="560" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="120" cy="110" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="120" cy="250" r="5" fill="#56ecbe"/>
          <circle cx="10"  cy="250" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">

        <h1 className="sr-only">{EVENT_INFO.name} — {EVENT_INFO.subtitle}</h1>

        <img
          src={logoHomepage}
          alt="Muriaé Tech Connect — Circuito de Inovação e Conexões"
          className="w-full max-w-4xl mx-auto"
          draggable={false}
        />

        <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-deep-blue-800)] to-[var(--color-tiffany)] rounded-full" />

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <InfoBadge icon={<LuCalendar />} label={EVENT_INFO.date} />
          <div className="hidden sm:block h-6 w-px bg-[var(--color-graphite-300)]/50" aria-hidden="true" />
          <InfoBadge icon={<LuClock />} label={EVENT_INFO.time} />
          <div className="hidden sm:block h-6 w-px bg-[var(--color-graphite-300)]/50" aria-hidden="true" />
          <InfoBadge icon={<LuMapPin />} label={EVENT_INFO.venue} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            id="hero-cta-primary"
            href="https://www.sympla.com.br/evento/muriae-tech-connect-2026/3418712?algoliaID=84ace9a905b3a11fc92f3f3df06bd4b1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold text-base
                       bg-[var(--color-deep-blue-800)] text-white
                       hover:bg-[var(--color-deep-blue-900)] transition-all duration-200
                       shadow-[0_4px_24px_rgba(0,112,192,0.30)]
                       hover:shadow-[0_6px_32px_rgba(0,112,192,0.45)]
                       hover:-translate-y-0.5"
          >
            Garanta seu Convite
          </a>
          <a
            id="hero-cta-secondary"
            href="#sobre"
            className="px-8 py-3.5 rounded-full font-semibold text-base
                       border-2 border-[var(--color-deep-blue-800)] text-[var(--color-deep-blue-800)]
                       hover:bg-[var(--color-deep-blue-800)] hover:text-white
                       transition-all duration-200"
          >
            Saiba Mais
          </a>
        </div>

        <div
          aria-hidden="true"
          className="flex flex-col items-center gap-1 opacity-40 mt-4"
        >
          <span className="text-[var(--color-graphite-500)] text-xs tracking-widest uppercase">Role</span>
          <div className="w-px h-8 bg-[var(--color-deep-blue-800)]/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

interface InfoBadgeProps {
  icon: React.ReactNode;
  label: string;
}
const InfoBadge: React.FC<InfoBadgeProps> = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-[var(--color-graphite-700)] text-sm font-medium">
    <span aria-hidden="true" className="text-[var(--color-deep-blue-800)]">{icon}</span>
    <span>{label}</span>
  </div>
);

export default HeroBanner;
