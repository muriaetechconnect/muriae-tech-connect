import { FEATURED_SPEAKERS } from '../../constants/eventData';
import type { SpeakerProfile } from '../../types/event';

const AVATAR_GRADIENTS = [
  'from-[var(--color-deep-blue-900)] to-[var(--color-deep-blue-700)]',
  'from-[var(--color-tiffany-600)] to-[var(--color-tiffany)]',
  'from-[var(--color-deep-blue-700)] to-[var(--color-light-blue)]',
  'from-[var(--color-deep-blue-900)] to-[var(--color-tiffany-600)]',
] as const;

const AVATAR_TEXT = [
  'text-white',
  'text-[var(--color-deep-blue-900)]',
  'text-white',
  'text-white',
] as const;

const ACCENT_BORDERS = [
  'border-t-[var(--color-deep-blue-800)]',
  'border-t-[var(--color-tiffany-600)]',
  'border-t-[var(--color-light-blue)]',
  'border-t-[var(--color-deep-blue-700)]',
] as const;

const Speakers: React.FC = () => {
  return (
    <section id="palestrantes" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-tiffany)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-deep-blue-700)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany-600)]">
            Especialistas e Lideranças
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-black text-[var(--color-deep-blue-800)] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            PALESTRANTES
          </h2>
          <p className="mt-4 text-base text-[var(--color-graphite-500)] max-w-2xl mx-auto leading-relaxed">
            Conheça os especialistas, pesquisadores e líderes que compartilharão suas visões e experiências no nosso palco.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SPEAKERS.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SpeakerCardProps {
  speaker: SpeakerProfile;
  index:   number;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const gradient   = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  const textColor  = AVATAR_TEXT[index % AVATAR_TEXT.length];
  const accentBorder = ACCENT_BORDERS[index % ACCENT_BORDERS.length];

  const initials = speaker.name
    .replace(/^(Dr\.|Dra\.|Prof\.|Doutoranda)\s*/i, '')
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  return (
    <article
      className={[
        'group flex flex-col items-center text-center bg-white rounded-2xl p-6',
        'border border-[var(--color-graphite-100)] border-t-4',
        accentBorder,
        'shadow-[0_4px_24px_rgba(0,112,192,0.04)]',
        'hover:shadow-[var(--shadow-card)] hover:-translate-y-1.5',
        'transition-all duration-300',
      ].join(' ')}
    >
      
      <div className="mb-5">
        {speaker.photoUrl ? (
          
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[var(--color-graphite-100)] group-hover:ring-[var(--color-tiffany)]/40 transition-all duration-300">
            <img
              src={speaker.photoUrl}
              alt={`Foto de ${speaker.name}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          
          <div
            className={[
              'w-24 h-24 rounded-full flex items-center justify-center',
              'bg-gradient-to-br',
              gradient,
              'ring-4 ring-[var(--color-graphite-100)] group-hover:ring-[var(--color-tiffany)]/40',
              'group-hover:scale-105 transition-all duration-300',
            ].join(' ')}
          >
            <span
              className={['text-2xl font-black', textColor].join(' ')}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center flex-grow">
        <h3
          className="text-base font-bold text-[var(--color-graphite-700)] leading-snug"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {speaker.name}
        </h3>
        <p className="text-xs font-semibold text-[var(--color-tiffany-600)] mt-1 leading-snug">
          {speaker.role}
        </p>
        {speaker.org && (
          <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[var(--color-deep-blue-800)]/8 text-[var(--color-deep-blue-800)]">
            {speaker.org}
          </span>
        )}

        {speaker.bio && (
          <p className="mt-3 text-xs text-[var(--color-graphite-500)] leading-relaxed">
            {speaker.bio}
          </p>
        )}
      </div>

      {speaker.session && (
        <div className="mt-4 pt-4 border-t border-[var(--color-graphite-100)] w-full">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-[var(--color-graphite-300)]">
            <span className="w-1 h-1 rounded-full bg-[var(--color-tiffany-600)]" aria-hidden="true" />
            {speaker.session}
          </span>
        </div>
      )}
    </article>
  );
};

export default Speakers;
