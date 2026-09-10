import { createElement } from 'react';
import { LuBuilding2, LuLink, LuZap } from 'react-icons/lu';
import type { TechEvent } from '../types/event';

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Local', href: '#local' },
  { label: 'Parceiros', href: '#parceiros' },
] as const;

export const ABOUT_CARDS = [
  {
    term: 'MURIAÉ',
    subtitle: 'Nossa cidade, nossa identidade',
    description: 'O evento nasce em Muriaé e para Muriaé. Reunir talentos locais, lideranças regionais e parceiros estratégicos para construir um ecossistema de inovação que começa aqui e irradia para o mundo.',
    icon: createElement(LuBuilding2),
  },
  {
    term: 'TECH',
    subtitle: 'Tecnologia como motor de transformação',
    description: 'De startups a grandes empresas, a tecnologia redefine mercados e abre oportunidades. O "Tech" representa nosso compromisso com o conhecimento aplicado, a digitalização e o pensamento computacional como pilares do desenvolvimento.',
    icon: createElement(LuZap),
  },
  {
    term: 'CONNECT',
    subtitle: 'Conexões que geram valor',
    description: 'Nenhuma transformação acontece em isolamento. O "Connect" simboliza a ponte entre empreendedores, investidores, estudantes e gestores públicos — uma rede que multiplica oportunidades e acelera resultados.',
    icon: createElement(LuLink),
  },
];

export const EVENTS: TechEvent[] = [
  {
    "id": "muriae-tech-connect-2026",
    "slug": "muriae-tech-connect-2026",
    "name": "Muriaé Tech Connect",
    "subtitle": "Circuito de Inovação e Conexões",
    "niche": "educacao",
    "dateStart": "2026-09-15T18:00:00-03:00",
    "dateEnd": "2026-09-15T22:30:00-03:00",
    "location": {
      "name": "Salão Nobre da Faminas",
      "address": "Av. Cel. Albino Moreira, 53 — Bairro Dr. Simonini, Muriaé — MG",
      "geo": {
        "lat": -21.1101991,
        "lng": -42.3843837
      },
      "photoUrl": "/src/assets/Faminas.jpeg"
    },
    "schedule": [
      {
        "id": "credenciamento",
        "stage": "credenciamento",
        "title": "Credenciamento",
        "timeStart": "2026-09-15T18:00:00-03:00",
        "timeEnd": "2026-09-15T19:00:00-03:00",
        "highlights": [
          "Espaço para networking entre estudantes, professores e convidados."
        ],
        "speakerIds": []
      },
      {
        "id": "abertura",
        "stage": "abertura",
        "title": "Abertura Institucional",
        "timeStart": "2026-09-15T19:00:00-03:00",
        "timeEnd": "2026-09-15T19:30:00-03:00",
        "highlights": [
          "Composição da mesa de autoridadesAbertura do Executivo Municipal – Dr. Marcos Guarino (Prefeito)Apresentação da Secretaria de Desenvolvimento Econômico e Inovação Social – Cézar Bianchi Botaro (Secretário) e Leandro Latini Veiga (Secretário Adjunto)Discussão do propósito do evento e visão estratégica para Muriaé – Doutoranda Anna Elisa Martins (Gestora do Núcleo de Inovação e Tecnologia)"
        ],
        "speakerIds": [
          "marcos-guarino",
          "cezar-bianchi",
          "leandro-latini",
          "anna-elisa",
          "flavio"
        ]
      },
      {
        "id": "painel",
        "stage": "palestra",
        "title": "Problema enfrentado, solução construída e aprendizados",
        "timeStart": "2026-09-15T19:30:00-03:00",
        "timeEnd": "2026-09-15T20:15:00-03:00",
        "speakerIds": [
          "guilherme",
          "gabriel-assis",
          "flavia-ferrari",
          "victor",
          "luan",
          "ryan",
          "francisco",
          "bryan"
        ]
      },
      {
        "id": "coffe",
        "stage": "coffee-break",
        "title": "Coffee Break & Networking",
        "timeStart": "2026-09-15T20:15:00-03:00",
        "timeEnd": "2026-09-15T20:35:00-03:00",
        "speakerIds": []
      },
      {
        "id": "palestra",
        "stage": "palestra",
        "title": "Palestra Magna — Investimento em empresas e criação de negócios no meio da educação",
        "timeStart": "2026-09-15T20:35:00-03:00",
        "timeEnd": "2026-09-15T21:05:00-03:00",
        "highlights": [],
        "speakerIds": [
          "isaac"
        ]
      },
      {
        "id": "painel2",
        "stage": "painel",
        "title": "Painel Tríplice Hélice — Universidade, Mercado e Poder Público",
        "timeStart": "2026-09-15T21:05:00-03:00",
        "timeEnd": "2026-09-15T21:50:00-03:00",
        "highlights": [],
        "speakerIds": [
          "flavio",
          "anna-elisa",
          "isaac"
        ]
      },
      {
        "id": "encerramento",
        "stage": "encerramento",
        "title": "Encerramento",
        "timeStart": "2026-09-15T21:50:00-03:00",
        "timeEnd": "2026-09-15T22:40:00-03:00",
        "highlights": [
          "Síntese das discussões ();  ",
          "Convite para participação nas próximas ações do Muriaé Tech Connect;  ",
          "Registro fotográfico institucional."
        ]
      }
    ],
    "speakers": [
      {
        "id": "marcos-guarino",
        "name": "Dr. Marcos Guarino",
        "role": "Prefeito Municipal",
        "org": "Prefeitura de Muriaé",
        "photoUrl": "/src/assets/palestrantes/Dr.%20Marcos%20Guarino.jpg"
      },
      {
        "id": "cezar-bianchi",
        "name": "Cézar Bianchi Botaro",
        "role": "Secretário de Desenvolvimento Econômico e Inovação Social",
        "org": "SDEIS — Muriaé",
        "photoUrl": "/src/assets/palestrantes/C%C3%A9zar_Bianchi_Botaro.jpg"
      },
      {
        "id": "leandro-latini",
        "name": "Leandro Latini Veiga",
        "role": "Secretário Adjunto de Desenvolvimento Econômico e Inovação Social",
        "org": "SDEIS — Muriaé",
        "photoUrl": "/src/assets/palestrantes/Leandro.jpg"
      },
      {
        "id": "anna-elisa",
        "name": "Doutoranda Anna Elisa Martins",
        "role": "Gestora do Núcleo de Inovação e Tecnologia",
        "org": "Prefeitura Municipal de Muriaé",
        "photoUrl": "/src/assets/palestrantes/Anna_Elise_Martins.jpg"
      },
      {
        "id": "guilherme",
        "name": "Guilherme Rissom",
        "role": "Criador do GymTrack",
        "org": "GymTrack",
        "photoUrl": "/src/assets/palestrantes/GuilhermeRissom.jpg"
      },
      {
        "id": "gabriel-assis",
        "name": "Gabriel Assis",
        "role": "Criador do GymTrack",
        "org": "GymTrack",
        "photoUrl": "/src/assets/palestrantes/GabrielAssis.jpg"
      },
      {
        "id": "flavia-ferrari",
        "name": "Flávia Ferrari",
        "role": "Fundadora da Severus Tech",
        "org": "Severus Tech",
        "photoUrl": "/src/assets/palestrantes/flaviaFerrari.jpg"
      },
      {
        "id": "flavio",
        "name": "Flávio Motta",
        "role": "Coordenador do curso de Análise e Desenvolvimento de Sistemas e Coordenador de Inteligência de Dados",
        "org": "FAMINAS",
        "photoUrl": "/src/assets/palestrantes/flavioMotta.jpg"
      },
      {
        "id": "isaac",
        "name": "Isaac Carvalho",
        "role": "Sócio-fundador da APG GOV",
        "org": "APG GOV",
        "photoUrl": "/src/assets/palestrantes/IsaacCarvalho.jpg"
      },
      {
        "id": "victor",
        "name": "Victor Santos",
        "role": "Desenvolvedor FullStack",
        "org": "Drivou",
        "orgUrl": "https://drivou.com/",
        "photoUrl": "/src/assets/palestrantes/victor.jpg"
      },
      {
        "id": "luan",
        "name": "Luan Souza",
        "role": "Desenvolvedor FullStack",
        "org": "Drivou",
        "orgUrl": "https://drivou.com/",
        "photoUrl": "/src/assets/palestrantes/luan.jpg"
      },
      {
        "id": "ryan",
        "name": "Ryan Vitor",
        "role": "Gerente de Projeto",
        "org": "Drivou",
        "orgUrl": "https://drivou.com/",
        "photoUrl": "/src/assets/palestrantes/ryan.jpg"
      },
      {
        "id": "francisco",
        "name": "Francisco Carlos",
        "role": "Gerente de Desenvolvimento",
        "org": "Drivou",
        "orgUrl": "https://drivou.com/",
        "photoUrl": "/src/assets/palestrantes/francisco.jpg"
      },
      {
        "id": "bryan",
        "name": "Bryan Theodoro",
        "role": "Analista de Produto",
        "org": "Drivou",
        "orgUrl": "https://drivou.com/",
        "photoUrl": "/src/assets/palestrantes/bryan.jpg"
      }
    ],
    "status": "published"
  }
];
