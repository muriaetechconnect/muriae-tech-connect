import { SCHEDULE_ITEMS, EVENT_INFO, FEATURED_SPEAKERS } from '../../constants/eventData';
import type { ScheduleItem, Speaker } from '../../types/event';

const TYPE_CONFIG: Record<
  ScheduleItem['type'],
  { label: string; dotBg: string; badgeClass: string; isMain: boolean }
> = {
  credenciamento: {
    label:      'Credenciamento',
    dotBg:      'bg-white/30',
    badgeClass: 'bg-white/10 text-white/50 border border-white/15',
    isMain:     false,
  },
  abertura: {
    label:      'Abertura Institucional',
    dotBg:      'bg-[var(--color-light-blue)]',
    badgeClass: 'bg-[var(--color-light-blue)]/20 text-[var(--color-light-blue)] border border-[var(--color-light-blue)]/30',
    isMain:     true,
  },
  palestra: {
    label:      'Palestra',
    dotBg:      'bg-[var(--color-tiffany)]',
    badgeClass: 'bg-[var(--color-tiffany)]/20 text-[var(--color-tiffany)] border border-[var(--color-tiffany)]/30',
    isMain:     true,
  },
  painel: {
    label:      'Painel',
    dotBg:      'bg-[var(--color-tiffany-400)]',
    badgeClass: 'bg-[var(--color-tiffany-400)]/20 text-[var(--color-tiffany-400)] border border-[var(--color-tiffany-400)]/30',
    isMain:     true,
  },
  case: {
    label:      'Cases de Sucesso',
    dotBg:      'bg-[var(--color-light-blue)]',
    badgeClass: 'bg-[var(--color-light-blue)]/20 text-[var(--color-light-blue)] border border-[var(--color-light-blue)]/30',
    isMain:     true,
  },
  intervalo: {
    label:      'Coffee Break',
    dotBg:      'bg-white/20',
    badgeClass: 'bg-white/5 text-white/40 border border-white/10',
    isMain:     false,
  },
  encerramento: {
    label:      'Encerramento',
    dotBg:      'bg-[var(--color-tiffany)]',
    badgeClass: 'bg-[var(--color-tiffany)]/20 text-[var(--color-tiffany)] border border-[var(--color-tiffany)]/30',
    isMain:     false,
  },
};

const Schedule: React.FC = () => {
  return (
    <section
      id="programacao"
      aria-labelledby="schedule-heading"
      className="py-24 px-6 bg-[var(--color-deep-blue-900)] relative overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-[220px] overflow-hidden opacity-30 hidden lg:block">
        <svg viewBox="0 0 220 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30"  y1="80"  x2="140" y2="80"  stroke="#56ecbe" strokeWidth="2"/>
          <line x1="140" y1="80"  x2="140" y2="200" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="60"  y1="200" x2="140" y2="200" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="60"  y1="200" x2="60"  y2="350" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="60"  y1="350" x2="180" y2="350" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="180" y1="350" x2="180" y2="480" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="20"  y1="480" x2="180" y2="480" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="20"  y1="480" x2="20"  y2="600" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="20"  y1="600" x2="120" y2="600" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="100" y1="130" x2="100" y2="270" stroke="#56ecbe" strokeWidth="2"/>
          <line x1="100" y1="270" x2="200" y2="270" stroke="#56ecbe" strokeWidth="2"/>

          <circle cx="30"  cy="80"  r="5" fill="#56ecbe"/>
          <circle cx="140" cy="80"  r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="60"  cy="200" r="5" fill="#56ecbe"/>
          <circle cx="140" cy="200" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="60"  cy="350" r="5" fill="#56ecbe"/>
          <circle cx="180" cy="350" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="180" cy="480" r="5" fill="#56ecbe"/>
          <circle cx="20"  cy="480" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="20"  cy="600" r="5" fill="#56ecbe"/>
          <circle cx="120" cy="600" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="100" cy="130" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
          <circle cx="100" cy="270" r="5" fill="#56ecbe"/>
          <circle cx="200" cy="270" r="4" fill="none" stroke="#56ecbe" strokeWidth="2"/>
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-[220px] overflow-hidden opacity-30 hidden lg:block">
        <svg viewBox="0 0 220 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="190" y1="60"  x2="80"  y2="60"  stroke="#0070c0" strokeWidth="2"/>
          <line x1="80"  y1="60"  x2="80"  y2="180" stroke="#0070c0" strokeWidth="2"/>
          <line x1="80"  y1="180" x2="160" y2="180" stroke="#0070c0" strokeWidth="2"/>
          <line x1="160" y1="180" x2="160" y2="320" stroke="#0070c0" strokeWidth="2"/>
          <line x1="40"  y1="320" x2="160" y2="320" stroke="#0070c0" strokeWidth="2"/>
          <line x1="40"  y1="320" x2="40"  y2="450" stroke="#0070c0" strokeWidth="2"/>
          <line x1="40"  y1="450" x2="200" y2="450" stroke="#0070c0" strokeWidth="2"/>
          <line x1="200" y1="450" x2="200" y2="560" stroke="#0070c0" strokeWidth="2"/>
          <line x1="90"  y1="560" x2="200" y2="560" stroke="#0070c0" strokeWidth="2"/>
          <line x1="120" y1="110" x2="120" y2="250" stroke="#0070c0" strokeWidth="2"/>
          <line x1="10"  y1="250" x2="120" y2="250" stroke="#0070c0" strokeWidth="2"/>

          <circle cx="190" cy="60"  r="5" fill="#0070c0"/>
          <circle cx="80"  cy="60"  r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="80"  cy="180" r="5" fill="#0070c0"/>
          <circle cx="160" cy="180" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="160" cy="320" r="5" fill="#0070c0"/>
          <circle cx="40"  cy="320" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="40"  cy="450" r="5" fill="#0070c0"/>
          <circle cx="200" cy="450" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="200" cy="560" r="5" fill="#0070c0"/>
          <circle cx="90"  cy="560" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="120" cy="110" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
          <circle cx="120" cy="250" r="5" fill="#0070c0"/>
          <circle cx="10"  cy="250" r="4" fill="none" stroke="#0070c0" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany)]">
            {EVENT_INFO.date} · {EVENT_INFO.time}
          </span>
          <h2
            id="schedule-heading"
            className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            PROGRAMAÇÃO
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-lg mx-auto leading-relaxed">
            Um dia completo de conteúdo, conexões e inspiração no {EVENT_INFO.venue}.
          </p>
        </div>

        <ol aria-label="Cronograma oficial do evento" className="relative flex flex-col">
          
          <div
            aria-hidden="true"
            className="absolute left-[6.5rem] top-4 bottom-4 w-px bg-white/10"
          />

          {SCHEDULE_ITEMS.map((item, i) => (
            <ScheduleRow key={i} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
};

interface ScheduleRowProps {
  item:  ScheduleItem;
  index: number;
}

const ScheduleRow: React.FC<ScheduleRowProps> = ({ item }) => {
  const cfg = TYPE_CONFIG[item.type];
  const hasSpeakers = item.speakers && item.speakers.length > 0;

  return (
    <li className="relative flex items-start gap-0 pb-6 last:pb-0 group">

      <div className="flex-none w-28 text-right pr-5 pt-3.5">
        <time
          dateTime={item.timeStart.replace('h', ':')}
          className="block text-base font-mono font-semibold text-white/60"
        >
          {item.timeStart}
        </time>
        <span className="block text-sm font-mono text-white/30 mt-0.5">
          {item.timeEnd}
        </span>
      </div>

      <div className="flex-none flex flex-col items-center pt-4 mr-5">
        <div
          aria-hidden="true"
          className={[
            'w-3 h-3 rounded-full ring-2 ring-offset-2 ring-offset-[var(--color-deep-blue-900)] flex-none',
            cfg.dotBg,
            cfg.isMain ? 'ring-current' : 'ring-transparent',
          ].join(' ')}
        />
      </div>

      <div
        className={[
          'flex-1 min-w-0 rounded-2xl border transition-all duration-300 overflow-hidden',
          cfg.isMain
            ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        
        <div className="px-5 py-4">
          
          <span
            className={[
              'inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2',
              cfg.badgeClass,
            ].join(' ')}
          >
            {cfg.label}
          </span>

          <h3 className="text-lg font-semibold text-white leading-snug">
            {item.title}
          </h3>

          {item.highlights && item.highlights.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold tracking-wide text-white/40 uppercase mb-2">Destaques</p>
              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-white/65">
                    <span aria-hidden="true" className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-tiffany)]/60 flex-none" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasSpeakers && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-semibold tracking-wide text-white/40 uppercase mb-3">
                {item.speakers!.length === 1 ? 'Palestrante' : 'Palestrantes'}
              </p>
              <ul className="flex flex-col gap-2">
                {item.speakers!.map((speaker: Speaker, i: number) => (
                  <SpeakerChip key={i} speaker={speaker} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

interface SpeakerChipProps {
  speaker: Speaker;
}

const SpeakerChip: React.FC<SpeakerChipProps> = ({ speaker }) => {
  
  const profile = FEATURED_SPEAKERS.find((p) => {
    const nomeCompleto = p.name.toLowerCase();
    const nomeCronograma = speaker.name.toLowerCase();
    
    const palavras = nomeCronograma.split(' ');
    return palavras.every(palavra => nomeCompleto.includes(palavra));
  });
  const photoUrl = profile?.photoUrl;

  const initials = speaker.name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  return (
    <li className="flex items-center gap-3">
      
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`Foto de ${speaker.name}`}
          aria-hidden="true"
          className="flex-none w-10 h-10 rounded-full object-cover object-top
                     border border-white/20 ring-2 ring-[var(--color-tiffany)]/30"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex-none w-10 h-10 rounded-full bg-[var(--color-deep-blue-700)] border border-white/10
                     flex items-center justify-center text-sm font-bold text-[var(--color-tiffany)]"
        >
          {initials || '?'}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-base font-semibold text-white/90 leading-tight truncate">
          {speaker.name}
        </p>
        {(speaker.role || speaker.org) && (
          <p className="text-sm text-white/45 leading-tight mt-0.5">
            {[speaker.role, speaker.org].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>
    </li>
  );
};

export default Schedule;
