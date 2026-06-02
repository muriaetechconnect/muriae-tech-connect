import React from 'react';
import { LuBuilding2, LuHandshake, LuLightbulb, LuAward } from 'react-icons/lu';

import logoPrefeitura from '../../assets/parceiros/logo_prefeitura-nova.png';
import logoFaminas from '../../assets/parceiros/LogoFaminas.png';
import logoSebrae from '../../assets/parceiros/logo-sebrae-transparente.png';
import logoFcv from '../../assets/parceiros/FCVLogo cristiano varela.png';
import logoIf from '../../assets/parceiros/ifLogo.png';
import logoMinas from '../../assets/parceiros/LogoMinas.png';
import logoCdl from '../../assets/parceiros/cdl-ace-mais.png';
import logoComdept from '../../assets/parceiros/comdept.png';
import logoCorebi from '../../assets/parceiros/corebi-logo.png';
import logoRubeus from '../../assets/parceiros/rubeus.png';
import logoArvensis from '../../assets/parceiros/arvensis.png';

const PARTNER_CATEGORIES = [
  {
    id: 'realizacao',
    title: 'Realização',
    icon: <LuAward size={24} />,
    partners: [
      { name: 'Prefeitura de Muriaé', tier: 'principal', logo: logoPrefeitura },
      { name: 'FAMINAS', tier: 'principal', logo: logoFaminas },
    ]
  },
  {
    id: 'apoio',
    title: 'Apoio Institucional',
    icon: <LuHandshake size={24} />,
    partners: [
      { name: 'Governo de Minas', tier: 'secundario', logo: logoMinas },
      { name: 'SEBRAE', tier: 'secundario', logo: logoSebrae },
      { name: 'Fundação Cristiano Varela', tier: 'secundario', logo: logoFcv },
      { name: 'IF Sudeste MG', tier: 'secundario', logo: logoIf },
      { name: 'CDL / ACE', tier: 'secundario', logo: logoCdl },
      { name: 'COMDEPT', tier: 'secundario', logo: logoComdept },
    ]
  },
  {
    id: 'inovacao',
    title: 'Parceiros de Inovação',
    icon: <LuLightbulb size={24} />,
    partners: [
      { name: 'CoreBI', tier: 'secundario', logo: logoCorebi },
      { name: 'Rubeus', tier: 'secundario', logo: logoRubeus },
      { name: 'Arvensis', tier: 'secundario', logo: logoArvensis }
    ]
  }
];

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

        <div className="flex flex-col gap-20">
          {PARTNER_CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[var(--color-deep-blue)] p-4 rounded-2xl bg-[var(--color-deep-blue)]/5 border border-[var(--color-deep-blue)]/10 shadow-[var(--shadow-card)]">
                  {category.icon}
                </span>
                <h3 className="text-3xl font-bold text-[var(--color-graphite-700)]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
                {category.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className={`
                      group relative flex items-center justify-center p-8 rounded-3xl bg-white
                      border border-[var(--color-graphite-100)]
                      shadow-sm hover:shadow-[var(--shadow-card)] hover:border-[var(--color-tiffany-600)]/40
                      transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
                      ${partner.tier === 'principal' ? 'w-full max-w-[340px] h-48' : 'w-full max-w-[260px] h-36'}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
