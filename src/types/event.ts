export type EventNiche = 'lab' | 'educacao' | 'para-elas' | 'saude' | 'start';

export const NICHE_LABELS: Record<EventNiche, string> = {
  lab: 'Lab',
  educacao: 'Educação',
  'para-elas': 'Para Elas',
  saude: 'Saúde',
  start: 'Start',
};

export type ScheduleStage =
  | 'credenciamento'
  | 'abertura'
  | 'palestra'
  | 'painel'
  | 'case'
  | 'coffee-break'
  | 'encerramento';

export const STAGE_LABELS: Record<ScheduleStage, string> = {
  credenciamento: 'Credenciamento',
  abertura: 'Abertura',
  palestra: 'Palestra',
  painel: 'Painel/Cases',
  case: 'Painel/Cases',
  'coffee-break': 'Coffee Break',
  encerramento: 'Encerramento',
};

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface EventLocation {
  name: string;
  address: string;
  geo: GeoPoint;
  photoUrl: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  org: string;
  orgUrl?: string;
  photoUrl?: string;
}

export interface ScheduleItem {
  id: string;
  stage: ScheduleStage;
  title: string;
  timeStart: string;
  timeEnd: string;
  highlights?: string[];
  speakerIds?: string[];
}

export interface TechEvent {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  niche: EventNiche;
  dateStart: string;
  dateEnd: string;
  location: EventLocation;
  schedule: ScheduleItem[];
  speakers: Speaker[];
  status: 'draft' | 'published';
}

export type EventLifecycle = 'live' | 'upcoming' | 'past' | 'idle';

export type ResolvedEvent =
  | { status: Exclude<EventLifecycle, 'idle'>; event: TechEvent }
  | { status: 'idle'; event: null };
