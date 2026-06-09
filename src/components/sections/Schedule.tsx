import { useState } from 'react';
import { SCHEDULE_ITEMS, EVENT_INFO, FEATURED_SPEAKERS } from '../../constants/eventData';
import { LuTarget } from 'react-icons/lu';
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
      className="py-24 px-6 bg-[var(--color-deep-blue-900)]"
    >
      <div className="max-w-4xl mx-auto">

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
  const [expanded, setExpanded] = useState(false);
  const cfg = TYPE_CONFIG[item.type];
  const hasDetails =
    (item.speakers && item.speakers.length > 0) ||
    (item.highlights && item.highlights.length > 0) ||
    !!item.objective;

  return (
    <li className="relative flex items-start gap-0 pb-6 last:pb-0 group">

      <div className="flex-none w-28 text-right pr-5 pt-3.5">
        <time
          dateTime={item.timeStart.replace('h', ':')}
          className="block text-sm font-mono font-semibold text-white/60"
        >
          {item.timeStart}
        </time>
        <span className="block text-xs font-mono text-white/30 mt-0.5">
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
              'inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2',
              cfg.badgeClass,
            ].join(' ')}
          >
            {cfg.label}
          </span>

          <h3 className="text-base font-semibold text-white leading-snug">
            {item.title}
          </h3>

          {item.speakers && item.speakers.length > 0 && !expanded && (
            <p className="mt-1.5 text-sm text-white/50 leading-snug">
              {item.speakers.slice(0, 2).map((s) => s.name).join(' · ')}
              {item.speakers.length > 2 && (
                <span className="text-white/30">
                  {' '}+{item.speakers.length - 2} palestrantes
                </span>
              )}
            </p>
          )}

          {hasDetails && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-tiffany)] hover:text-[var(--color-tiffany-400)] transition-colors"
            >
              <span>{expanded ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
              <svg
                aria-hidden="true"
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={['transition-transform duration-200', expanded ? 'rotate-180' : ''].join(' ')}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {expanded && hasDetails && (
          <div className="border-t border-white/10 px-5 pb-5 pt-4 flex flex-col gap-5">

            {item.objective && (
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-[var(--color-tiffany)] text-base mt-0.5"><LuTarget /></span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/40 uppercase mb-1">Objetivo</p>
                  <p className="text-sm text-white/70 leading-relaxed">{item.objective}</p>
                </div>
              </div>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div>
                <p className="text-xs font-semibold tracking-wide text-white/40 uppercase mb-2">Destaques</p>
                <ul className="flex flex-col gap-1.5">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65">
                      <span aria-hidden="true" className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-tiffany)]/60 flex-none" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.speakers && item.speakers.length > 0 && (
              <div>
                <p className="text-xs font-semibold tracking-wide text-white/40 uppercase mb-3">
                  {item.speakers.length === 1 ? 'Palestrante' : 'Palestrantes'}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.speakers.map((speaker: Speaker, i: number) => (
                    <SpeakerChip key={i} speaker={speaker} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
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
          className="flex-none w-9 h-9 rounded-full object-cover object-top
                     border border-white/20 ring-2 ring-[var(--color-tiffany)]/30"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex-none w-9 h-9 rounded-full bg-[var(--color-deep-blue-700)] border border-white/10
                     flex items-center justify-center text-xs font-bold text-[var(--color-tiffany)]"
        >
          {initials || '?'}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white/90 leading-tight truncate">
          {speaker.name}
        </p>
        {(speaker.role || speaker.org) && (
          <p className="text-xs text-white/45 leading-tight mt-0.5">
            {[speaker.role, speaker.org].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>
    </li>
  );
};

export default Schedule;
