import { LuMapPin, LuCalendarDays, LuClock, LuNavigation } from 'react-icons/lu';
import { EVENT_INFO } from '../../constants/eventData';

const Location: React.FC = () => {

  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.843!2d-42.3843837!3d-21.1101991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc89fdcdcec67%3A0x4e5c2231cba66644!2sCentro%20Universit%C3%A1rio%20FAMINAS!5e0!3m2!1spt-BR!2sbr!4v1716580000000!5m2!1spt-BR!2sbr';

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=-21.1102041,-42.3818034&destination_place_id=0xbcc89fdcdcec67%3A0x4e5c2231cba66644';

  return (
    <section
      id="local"
      aria-labelledby="location-heading"
      className="py-24 px-6 bg-[var(--color-graphite-100)] relative overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[var(--color-deep-blue-800)]/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[var(--color-tiffany)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany-600)]">
            Onde acontece
          </span>
          <h2
            id="location-heading"
            className="mt-3 text-4xl md:text-5xl font-black text-[var(--color-deep-blue-800)] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            LOCAL DO EVENTO
          </h2>
          <p className="mt-4 text-base text-[var(--color-graphite-500)] max-w-xl mx-auto leading-relaxed">
            O evento acontece em um espaço nobre, preparado para receber líderes, pesquisadores
            e empreendedores de toda a região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          <div className="lg:col-span-2 flex flex-col gap-6">

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[var(--color-deep-blue-800)] shadow-[var(--shadow-card)] flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--color-deep-blue-800)] text-white shrink-0">
                  <LuMapPin size={20} />
                </span>
                <h3
                  className="text-2xl font-black text-[var(--color-deep-blue-800)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {EVENT_INFO.venue}
                </h3>
              </div>

              <address className="not-italic space-y-5">
                <InfoRow
                  icon={<LuMapPin size={17} />}
                  label="Endereço"
                  value={`${EVENT_INFO.city}`}
                  sub="Av. Cel. Albino Moreira, 53 — Bairro Dr. Simonini"
                />
                <InfoRow
                  icon={<LuCalendarDays size={17} />}
                  label="Data"
                  value={EVENT_INFO.date}
                />
                <InfoRow
                  icon={<LuClock size={17} />}
                  label="Horário"
                  value={EVENT_INFO.time}
                />
              </address>
            </div>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-como-chegar"
              className="
                group flex items-center justify-center gap-3
                w-full py-4 px-6 rounded-2xl
                bg-[var(--color-deep-blue-800)] text-white
                font-semibold text-base
                shadow-[var(--shadow-card)]
                hover:bg-[var(--color-deep-blue-900)]
                hover:shadow-[0_8px_32px_rgba(0,112,192,0.30)]
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <LuNavigation
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              Como Chegar
            </a>

            <div className="bg-gradient-to-r from-[var(--color-tiffany)]/20 to-[var(--color-light-blue)]/20 border border-[var(--color-tiffany)]/30 rounded-2xl p-5 text-center">
              <p className="text-sm font-semibold text-[var(--color-deep-blue-800)] leading-snug">
                🎓 Evento gratuito e aberto à comunidade
              </p>
              <p className="text-xs text-[var(--color-graphite-500)] mt-1">
                Vagas limitadas — inscrição obrigatória
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="w-full h-full min-h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-white/60 ring-1 ring-[var(--color-deep-blue-800)]/10">
              <iframe
                title="Localização do evento — Salão Nobre da Faminas, Muriaé-MG"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value, sub }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 text-[var(--color-tiffany-600)] shrink-0">{icon}</span>
    <div>
      <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-graphite-300)] mb-0.5">
        {label}
      </p>
      <p className="text-base font-semibold text-[var(--color-graphite-700)]">{value}</p>
      {sub && (
        <p className="text-sm text-[var(--color-graphite-500)] mt-0.5">{sub}</p>
      )}
    </div>
  </div>
);

export default Location;
