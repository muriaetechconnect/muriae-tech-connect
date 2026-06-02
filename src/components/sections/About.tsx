import { ABOUT_CARDS } from '../../constants/eventData';
import type { AboutCard } from '../../types/event';

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 px-6 bg-[var(--color-graphite-100)]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany-600)]">
            Por que esse nome?
          </span>
          <h2
            id="about-heading"
            className="mt-3 text-4xl md:text-5xl font-black text-[var(--color-deep-blue-800)] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MURIAÉ. TECH. CONNECT.
          </h2>
          <p className="mt-4 text-base text-[var(--color-graphite-500)] max-w-xl mx-auto leading-relaxed">
            Cada palavra do nome carrega uma intenção. Descubra o que une esses três conceitos
            em um único evento transformador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CARDS.map((card: AboutCard, index: number) => (
            <AboutCard key={card.term} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  card: AboutCard;
  index: number;
}

const ACCENT_STYLES = [
  
  {
    border:    'border-[var(--color-deep-blue-800)]',
    badge:     'bg-[var(--color-deep-blue-800)] text-white',
    termColor: 'text-[var(--color-deep-blue-800)]',
  },
  
  {
    border:    'border-[var(--color-tiffany)]',
    badge:     'bg-[var(--color-tiffany)] text-[var(--color-deep-blue-900)]',
    termColor: 'text-[var(--color-tiffany-600)]',
  },
  
  {
    border:    'border-[var(--color-light-blue)]',
    badge:     'bg-[var(--color-light-blue)] text-white',
    termColor: 'text-[var(--color-light-blue)]',
  },
] as const;

const AboutCard: React.FC<AboutCardProps> = ({ card, index }) => {
  const style = ACCENT_STYLES[index % ACCENT_STYLES.length];

  return (
    <article
      className={[
        'bg-white rounded-2xl p-8 border-t-4 shadow-[var(--shadow-card)]',
        'hover:-translate-y-1 transition-transform duration-300',
        style.border,
      ].join(' ')}
    >
      <div className="flex items-start gap-4 mb-5">
        <span className="text-3xl" aria-hidden="true">{card.icon}</span>
        <span
          className={[
            'inline-block px-3 py-0.5 rounded-full text-xs font-black tracking-widest uppercase',
            style.badge,
          ].join(' ')}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {card.term}
        </span>
      </div>

      <h3
        className={['text-xl font-bold mb-3', style.termColor].join(' ')}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {card.subtitle}
      </h3>

      <p className="text-sm text-[var(--color-graphite-500)] leading-relaxed">
        {card.description}
      </p>
    </article>
  );
};

export default About;
