import type { EventNiche, TechEvent } from '../types/event';

const BASE_LOGO = '/src/assets/Backdrop Oficial Muriaé Tech Connect SEM FUNDO.png';

const LOGO_BY_NICHE: Record<EventNiche, string> = {
  lab: BASE_LOGO,
  educacao: '/src/assets/logosTech/educacaoLogo.png',
  'para-elas': '/src/assets/logosTech/paraElasLogo.png',
  saude: '/src/assets/logosTech/saudeLogo.png',
  start: '/src/assets/logosTech/startLogo.png',
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
