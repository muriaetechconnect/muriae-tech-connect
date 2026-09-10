import logoPrefeitura from '../assets/parceiros/logo_prefeitura-nova.png';
import logoFaminas from '../assets/parceiros/LogoFaminas.png';
import logoSebrae from '../assets/parceiros/logo-sebrae-transparente.png';
import logoFcv from '../assets/parceiros/FCVLogo cristiano varela.png';
import logoIf from '../assets/parceiros/ifLogo.png';
import logoMinas from '../assets/parceiros/LogoMinas.png';
import logoCdl from '../assets/parceiros/cdl-ace-mais.png';
import logoComdept from '../assets/parceiros/comdept.png';
import logoCorebi from '../assets/parceiros/corebi-logo.png';
import logoRubeus from '../assets/parceiros/rubeus.png';
import logoArvensis from '../assets/parceiros/arvensis.png';

export type Partner = {
  id: string;
  name: string;
  tier: 'principal' | 'secundario';
  logo: string;
  shellClassName?: string;
};

export const PARTNERS: Partner[] = [
  { id: 'prefeitura', name: 'Prefeitura de Muriaé', tier: 'principal', logo: logoPrefeitura },
  { id: 'faminas', name: 'FAMINAS', tier: 'principal', logo: logoFaminas },
  { id: 'governo-minas', name: 'Governo de Minas', tier: 'secundario', logo: logoMinas, shellClassName: 'bg-[var(--color-graphite-50)]' },
  { id: 'sebrae', name: 'SEBRAE', tier: 'secundario', logo: logoSebrae },
  { id: 'fcv', name: 'Fundação Cristiano Varela', tier: 'secundario', logo: logoFcv },
  { id: 'if-sudeste', name: 'IF Sudeste MG', tier: 'secundario', logo: logoIf },
  { id: 'cdl-ace', name: 'CDL / ACE', tier: 'secundario', logo: logoCdl },
  { id: 'comdept', name: 'COMDEPT', tier: 'secundario', logo: logoComdept },
  { id: 'corebi', name: 'CoreBI', tier: 'secundario', logo: logoCorebi },
  { id: 'rubeus', name: 'Rubeus', tier: 'secundario', logo: logoRubeus },
  { id: 'arvensis', name: 'Arvensis', tier: 'secundario', logo: logoArvensis },
];
