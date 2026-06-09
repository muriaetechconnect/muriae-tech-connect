import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Speaker {
  name: string;
  role?: string;
  org?: string;
  orgUrl?: string;
}

export interface SpeakerProfile extends Speaker {
  bio?:         string;
  session?:     string;
  photoUrl?:    string;
  linkedinUrl?: string;
}

export interface ScheduleItem {
  timeStart:    string;
  timeEnd:      string;
  title:        string;
  type:         'credenciamento' | 'abertura' | 'palestra' | 'painel' | 'case' | 'intervalo' | 'encerramento';
  objective?:   string;
  speakers?:    Speaker[];
  highlights?:  string[];   
}

export interface AboutCard {
  term:        string;
  subtitle:    string;
  description: string;
  icon:        ReactNode;
}
