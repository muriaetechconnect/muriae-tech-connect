import { LuInstagram } from 'react-icons/lu';

const IdleState: React.FC = () => (
  <section className="min-h-[70vh] px-6 py-24 flex items-center justify-center bg-[var(--color-graphite-100)]">
    <div className="max-w-xl text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany-600)]">
        Muriaé Tech Connect
      </p>
      <h1
        className="mt-3 text-4xl md:text-5xl font-black text-[var(--color-deep-blue-800)]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Este encontro já aconteceu
      </h1>
      <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite-500)]">
        Aguarde os próximos encontros e acompanhe nossas redes sociais para não perder as novidades.
      </p>
      <a
        href="https://www.instagram.com/muriaetechconnect?stkn=Zjl6aTc3OWx3NWk="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram do Muriaé Tech Connect"
        title="Instagram do Muriaé Tech Connect"
        className="mt-6 inline-flex text-[var(--color-tiffany-600)] hover:text-[var(--color-deep-blue-800)] transition-colors"
      >
        <LuInstagram size={26} aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default IdleState;