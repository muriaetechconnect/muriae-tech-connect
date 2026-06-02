import { NAV_LINKS, EVENT_INFO } from '../../constants/eventData';
import { LuMapPin } from 'react-icons/lu';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="rodape"
      role="contentinfo"
      className="bg-[var(--color-graphite-700)] text-white"
    >
      
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <p
              className="font-display font-black text-2xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              MURIAÉ&nbsp;
              <span className="text-[var(--color-tiffany)]">TECH</span>
            </p>
            <p className="text-xs font-light tracking-[0.25em] text-white/50 uppercase mt-0.5">
              CONNECT
            </p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {EVENT_INFO.subtitle}. {EVENT_INFO.date}, {EVENT_INFO.time}.
            </p>
            <p className="mt-1 text-sm text-[var(--color-tiffany)] font-medium flex items-center gap-1">
              <LuMapPin className="flex-none" /> {EVENT_INFO.venue} — {EVENT_INFO.city}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--color-tiffany)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Realização
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="text-sm font-semibold text-white/90">
                  Prefeitura Municipal de Muriaé
                </p>
              </li>
              <li>
                <p className="text-sm text-white/60 leading-snug">
                  Secretaria de Desenvolvimento Econômico e Inovação Social
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© {currentYear} Muriaé Tech Connect. Todos os direitos reservados.</p>
          <p>Prefeitura Municipal de Muriaé · SDEIS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
