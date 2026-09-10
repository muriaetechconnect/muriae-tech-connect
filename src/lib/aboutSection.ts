import type { EventNiche, TechEvent } from '../types/event';
import baseLogo from '../assets/Backdrop Oficial Muriaé Tech Connect SEM FUNDO.png';
import educacaoLogo from '../assets/logosTech/educacaoLogo.png';
import labLogo from '../assets/logosTech/labLogo.png';
import paraElasLogo from '../assets/logosTech/paraElasLogo.png';
import saudeLogo from '../assets/logosTech/saudeLogo.png';
import startLogo from '../assets/logosTech/startLogo.png';

const BASE_LOGO = baseLogo;

const LOGO_BY_NICHE: Record<EventNiche, string> = {
  lab: labLogo,
  educacao: educacaoLogo,
  'para-elas': paraElasLogo,
  saude: saudeLogo,
  start: startLogo,
};

export function getAboutPresentation(event: Pick<TechEvent, 'niche' | 'name' | 'subtitle'>) {
  const isSpecialNiche = event.niche === 'educacao' || event.niche === 'saude' || event.niche === 'start';

  if (isSpecialNiche) {
    return {
      badge: 'Edição atual',
      title: event.name,
      subtitle: event.subtitle ?? 'Edição atual',
      showCards: false,
      logo: LOGO_BY_NICHE[event.niche],
    };
  }

  return {
    badge: 'Por que esse nome?',
    title: 'MURIAÉ. TECH. CONNECT.',
    subtitle: 'Cada palavra do nome carrega uma intenção. Descubra o que une esses três conceitos em um único evento transformador.',
    showCards: true,
    logo: BASE_LOGO,
  };
}
