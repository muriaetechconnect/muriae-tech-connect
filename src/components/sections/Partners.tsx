import React from 'react';

import { PARTNERS } from '../../data/partners';

const Partners: React.FC = () => {
  return (
    <section
      id="parceiros"
      aria-labelledby="partners-heading"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-tiffany)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-deep-blue)]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-tiffany-600)]">
            Ecosistema
          </span>
          <h2
            id="partners-heading"
            className="mt-3 text-4xl md:text-5xl font-black text-[var(--color-deep-blue-800)] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            PARCEIROS E REALIZADORES
          </h2>
          <p className="mt-4 text-base text-[var(--color-graphite-500)] max-w-2xl mx-auto leading-relaxed">
            O Muriaé Tech Connect é fruto da colaboração de diversas instituições que acreditam
            no potencial da nossa região para a inovação e o desenvolvimento tecnológico.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {PARTNERS.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className={`
                group relative flex items-center justify-center p-8 rounded-3xl bg-white
                border border-[var(--color-graphite-100)]
                shadow-sm hover:shadow-[var(--shadow-card)] hover:border-[var(--color-tiffany-600)]/40
                transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
                ${partner.tier === 'principal' ? 'w-full max-w-[340px] h-48' : 'w-full max-w-[260px] h-36'}
                ${partner.shellClassName ?? ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-light-blue)]/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />

              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className={`
                    relative z-10 object-contain transition-transform duration-300
                    ${partner.tier === 'principal' ? 'w-full max-w-[200px] h-[90px] group-hover:scale-105' : 'w-full max-w-[140px] h-[60px] group-hover:scale-110'}
                    ${partner.name === 'Governo de Minas' ? 'rounded-2xl bg-[var(--color-graphite-50)] p-2' : ''}
                  `}
                />
              ) : (
                <span className={`
                  relative z-10 font-bold text-center transition-colors duration-300
                  ${partner.tier === 'principal' ? 'text-2xl text-[var(--color-graphite-300)] group-hover:text-[var(--color-deep-blue-800)]' : 'text-xl text-[var(--color-graphite-300)] group-hover:text-[var(--color-deep-blue-700)]'}
                `}>
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
