import { LuBuilding2, LuZap, LuLink } from 'react-icons/lu';
import type { NavLink, ScheduleItem, AboutCard, SpeakerProfile } from '../types/event';

import photoAlexandre  from '../assets/palestrantes/Alexandre_Horácio Couto_Bittencourt.jpg';
import photoEliton     from '../assets/palestrantes/Eliton_Luiz_de_Assis.jpg';
import photoHicaro     from '../assets/palestrantes/Hícaro_Lima_Maciel.jpg';
import photoBertholdo  from '../assets/palestrantes/Leonardo_Bertholdo_de_Assis.jpg';
import photoFrossard   from '../assets/palestrantes/Leonardo_Miranda_Frossard.jpg';
import photoSergio     from '../assets/palestrantes/Sérgio_Gomes_da_Silva.jpg';
import photoMarcos     from '../assets/palestrantes/Dr. Marcos Guarino.jpg';
import photoAnna       from '../assets/palestrantes/Anna_Elise_Martins.jpg';
import photoCezar      from '../assets/palestrantes/Cézar_Bianchi_Botaro.jpg';
import photoBraulio    from '../assets/palestrantes/braulio_vieira.jpg';
import photoLeandro    from '../assets/palestrantes/Leandro.jpg';

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre',        href: '#sobre'        },
  { label: 'Programação',  href: '#programacao'  },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Local',        href: '#local'        },
  { label: 'Parceiros',    href: '#parceiros'    },
];

export const EVENT_INFO = {
  name:     'Muriaé Tech Connect',
  subtitle: 'Circuito de Inovação e Conexões',
  slogan:   'Conectando ideias. Transformando o futuro.',
  date:     '23 de junho de 2026',
  time:     '08h00 às 12h30',
  venue:    'Salão Nobre da Faminas',
  city:     'Muriaé — MG',
} as const;

export const ABOUT_CARDS: AboutCard[] = [
  {
    term:        'MURIAÉ',
    subtitle:    'Nossa cidade, nossa identidade',
    description:
      'O evento nasce em Muriaé e para Muriaé. Reunir talentos locais, lideranças regionais e parceiros estratégicos para construir um ecossistema de inovação que começa aqui e irradia para o mundo.',
    icon: <LuBuilding2 />,
  },
  {
    term:        'TECH',
    subtitle:    'Tecnologia como motor de transformação',
    description:
      'De startups a grandes empresas, a tecnologia redefine mercados e abre oportunidades. O "Tech" representa nosso compromisso com o conhecimento aplicado, a digitalização e o pensamento computacional como pilares do desenvolvimento.',
    icon: <LuZap />,
  },
  {
    term:        'CONNECT',
    subtitle:    'Conexões que geram valor',
    description:
      'Nenhuma transformação acontece em isolamento. O "Connect" simboliza a ponte entre empreendedores, investidores, estudantes e gestores públicos — uma rede que multiplica oportunidades e acelera resultados.',
    icon: <LuLink />,
  },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  
  {
    timeStart: '08h00',
    timeEnd:   '08h30',
    type:      'credenciamento',
    title:     'Credenciamento',
    highlights: [
      'Recepção dos participantes',
      'Momento inicial de networking espontâneo',
      'Ambientação com telão exibindo ações e projetos do município',
    ],
  },

  {
    timeStart: '08h30',
    timeEnd:   '08h50',
    type:      'abertura',
    title:     'Abertura Institucional',
    highlights: [
      'Composição da mesa de autoridades',
      'Abertura do Executivo Municipal – Dr. Marcos Guarino (Prefeito)',
      'Apresentação da Secretaria de Desenvolvimento Econômico e Inovação Social – Cézar Bianchi Botaro (Secretário) e Leandro Latini Veiga (Secretário Adjunto)',
      'Discussão do propósito do evento e visão estratégica para Muriaé – Doutoranda Anna Elisa Martins (Gestora do Núcleo de Inovação e Tecnologia)',
    ],
    speakers: [
      { name: 'Dr. Marcos Guarino',          role: 'Prefeito Municipal' },
      { name: 'Cézar Bianchi Botaro',        role: 'Secretário de Desenvolvimento Econômico e Inovação Social' },
      { name: 'Leandro Latini Veiga',        role: 'Secretário Adjunto de Desenvolvimento Econômico e Inovação Social' },
      { name: 'Doutoranda Anna Elisa Martins', role: 'Gestora do Núcleo de Inovação e Tecnologia da Prefeitura Municipal de Muriaé' },
    ],
  },

  {
    timeStart: '08h50',
    timeEnd:   '09h30',
    type:      'palestra',
    title:     'Palestra Institucional – Governo do Estado',
    highlights: [
      'Secretaria de Desenvolvimento Econômico de Minas Gerais',
      'Programas, incentivos e políticas públicas voltadas à inovação',
    ],
    speakers: [
      {
        name: 'Hícaro Lima Maciel',
        role: 'Superintendente de Inovação Tecnológica',
        org:  'Governo do Estado de Minas Gerais',
      },
    ],
  },

  {
    timeStart: '09h30',
    timeEnd:   '10h00',
    type:      'palestra',
    title:     'Palestra Magna – Ecossistemas de Inovação e Desenvolvimento Regional',
    highlights: [
      'Palestra técnica conduzida pelo SEBRAE: “Como estruturar e fortalecer ecossistemas locais de inovação”',
    ],
    speakers: [
      {
        name: 'Leonardo Bertholdo de Assis',
        role: 'Diretor de Ensino',
        org:  'IF Sudeste',
      },
    ],
  },

  {
    timeStart: '10h00',
    timeEnd:   '10h40',
    type:      'painel',
    title:     'Painel – Pesquisa, Educação e Inovação',
    highlights: [
      'Participação de representantes dos Institutos de Ciência e Tecnologia (ICTs)',
      'Apresentação de projetos de pesquisa aplicada (3 apresentações curtas, de 10 min cada)',
      'Temas sugeridos: “Tecnologia aplicada ao mercado”, “Empreendedorismo acadêmico”, “Tecnologias em Saúde”',
    ],
    speakers: [
      { name: 'Dr. Sérgio Gomes',        role: 'Representante', org: 'Fundação Cristiano Varela' },
      { name: 'Dr. Alexandre Bittencourt', role: 'Representante', org: 'Faminas'                },
      { name: 'Dr. Leonardo Frossard',   role: 'Representante', org: 'PARTEC JF'                },
    ],
  },

  {
    timeStart: '10h40',
    timeEnd:   '11h00',
    type:      'intervalo',
    title:     'Coffee Break & Networking',
    highlights: [
      'Momento estruturado para conexões',
      'Sugestão: uso de crachás por área de atuação para facilitar interações',
    ],
  },

  {
    timeStart: '11h00',
    timeEnd:   '11h50',
    type:      'case',
    title:     'Painel – Cases de Sucesso Social',
    highlights: [
      'Empresas convidadas (startups, empresas locais inovadoras)',
      'Apresentação de cases reais de transformação por meio da inovação (15 min cada)',
    ],
    speakers: [
      { name: 'Eliton Assis',  role: 'Representante', org: 'CoreBI'   },
      { name: 'Braulio Vieira',role: 'Representante', org: 'Rubeus'   },
      { name: 'Fábio',         role: 'Representante', org: 'Arvensis' },
    ],
  },

  {
    timeStart: '11h50',
    timeEnd:   '12h30',
    type:      'encerramento',
    title:     'Encerramento Oficial',
    highlights: [
      'Síntese dos principais pontos do evento',
      'Convite para próximas ações do Circuito',
      'Registro institucional (foto oficial)',
    ],
  },
];

export const FEATURED_SPEAKERS: SpeakerProfile[] = [
  
  {
    name:    'Dr. Marcos Guarino',
    role:    'Prefeito Municipal',
    org:     'Prefeitura de Muriaé',
    session: 'Abertura Institucional',
    photoUrl: photoMarcos,
  },
  {
    name:    'Cézar Bianchi Botaro',
    role:    'Secretário de Desenvolvimento Econômico e Inovação Social',
    org:     'SDEIS — Muriaé',
    session: 'Abertura Institucional',
    photoUrl: photoCezar,
  },
  {
    name:    'Leandro Latini Veiga',
    role:    'Secretário Adjunto de Desenvolvimento Econômico e Inovação Social',
    org:     'SDEIS — Muriaé',
    session: 'Abertura Institucional',
    photoUrl: photoLeandro,
  },
  {
    name:    'Doutoranda Anna Elisa Martins',
    role:    'Gestora do Núcleo de Inovação e Tecnologia',
    org:     'Prefeitura Municipal de Muriaé',
    session: 'Abertura Institucional',
    photoUrl: photoAnna,
  },

  {
    name:    'Dr. Leonardo Miranda Frossard',
    role:    'Coordenador',
    org:     'PARTEC JF — Parque Tecnológico da UFJF',
    session: 'Painel — Pesquisa, Educação e Inovação',
    photoUrl: photoFrossard,
  },

  {
    name:    'Dr. Sérgio Gomes da Silva',
    role:    'Coordenador de PDI',
    org:     'Hospital do Câncer de Muriaé — FCV',
    orgUrl:  'https://fcv.org.br/',
    session: 'Painel — Pesquisa, Educação e Inovação',
    photoUrl: photoSergio,
  },
  {
    name:    'Dr. Alexandre Horácio Couto Bittencourt',
    role:    'Coordenador de Pesquisa e Internacionalização',
    org:     'Centro Universitário FAMINAS',
    orgUrl:  'https://www.unifaminas.edu.br/',
    session: 'Painel — Pesquisa, Educação e Inovação',
    photoUrl: photoAlexandre,
  },
  {
    name:    'Leonardo Bertholdo de Assis',
    role:    'Diretor de Ensino',
    org:     'IF Sudeste MG — Campus Muriaé',
    orgUrl:  'https://www.ifsudestemg.edu.br/muriae',
    session: 'Palestra Magna',
    photoUrl: photoBertholdo,
  },

  {
    name:    'Eliton Luiz de Assis',
    role:    'Consultor Empresarial',
    org:     'Core Consultoria e Inteligência',
    orgUrl:  'https://www.corebi.com.br/',
    session: 'Painel — Cases de Sucesso Social',
    photoUrl: photoEliton,
  },
  {
    name:    'Braulio Vieira',
    role:    'Representante',
    org:     'Rubeus',
    orgUrl:  'https://rubeus.com.br/',
    session: 'Painel — Cases de Sucesso Social',
    photoUrl: photoBraulio,
  },
  {
    name:    'Fábio',
    role:    'Representante',
    org:     'Arvensis',
    orgUrl:  'https://arvensiscosmeticos.com.br/',
    session: 'Painel — Cases de Sucesso Social',
  },
  {
    name:    'Hícaro Lima Maciel',
    role:    'Superintendente de Inovação Tecnológica',
    org:     'Governo do Estado de Minas Gerais',
    orgUrl:  'https://www.mg.gov.br/',
    session: 'Palestra Institucional – Governo do Estado',
    photoUrl: photoHicaro,
  },
];
